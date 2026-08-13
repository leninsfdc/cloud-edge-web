import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/libs/supabase/middleware";

// The four valid country slugs
const COUNTRY_SLUGS = ["in", "uk", "us", "ca"] as const;
type CountrySlug = (typeof COUNTRY_SLUGS)[number];

/**
 * Queries HTTPS IP Geolocation APIs with multi-provider fallbacks.
 * Works on localhost, production, Node.js, Edge, and all deployment environments.
 */
async function fetchCountryFromPublicIp(clientIp: string): Promise<string | null> {
  const isPrivate =
    !clientIp ||
    clientIp === "127.0.0.1" ||
    clientIp === "::1" ||
    clientIp.startsWith("192.168.") ||
    clientIp.startsWith("10.") ||
    clientIp.startsWith("172.");

  const targetIp = isPrivate ? "" : clientIp;

  // Provider 1: api.country.is (HTTPS, 0-config, super fast)
  try {
    const url = targetIp ? `https://api.country.is/${targetIp}` : `https://api.country.is/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country) return String(data.country).toLowerCase();
    }
  } catch {}

  // Provider 2: ipapi.co (HTTPS fallback)
  try {
    const url = targetIp ? `https://ipapi.co/${targetIp}/json/` : `https://ipapi.co/json/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country_code) return String(data.country_code).toLowerCase();
    }
  } catch {}

  // Provider 3: ipwho.is (HTTPS fallback)
  try {
    const url = targetIp ? `https://ipwho.is/${targetIp}` : `https://ipwho.is/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country_code) return String(data.country_code).toLowerCase();
    }
  } catch {}

  return null;
}

async function getTargetCountrySlug(request: NextRequest): Promise<CountrySlug> {
  // 1. Detect IP Country (Edge headers or HTTPS Geolocation API)
  const cf = request.headers.get("cf-ipcountry")?.toLowerCase();
  const vercel = request.headers.get("x-vercel-ip-country")?.toLowerCase();
  const aws = request.headers.get("cloudfront-viewer-country")?.toLowerCase();

  let raw = cf || vercel || aws || "";

  if (!raw) {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    let clientIp = (forwarded ? forwarded.split(",")[0] : realIp) || "";
    clientIp = clientIp.trim();

    const detected = await fetchCountryFromPublicIp(clientIp);
    if (detected) raw = detected;
  }

  // 2. If IP matched one of our supported countries, return it
  if (raw === "in") return "in";
  if (raw === "gb" || raw === "uk") return "uk";
  if (raw === "ca") return "ca";
  if (raw === "us") return "us";

  // 3. If IP is from an unsupported country (e.g. DE, FR, JP) -> default to "us" (USD)
  return "us";
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. Skip static assets, Next.js internals, and favicon ────────────────
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff2?)$/.test(pathname)
  ) {
    return NextResponse.next({ request });
  }

  // ── 2. Asgard admin routes: run Supabase auth only, no country redirect ──
  if (pathname.startsWith("/asgard")) {
    return await updateSession(request);
  }

  // ── 3. Check if path already starts with a valid country slug ─────────────
  const firstSegment = pathname.split("/")[1]?.toLowerCase() ?? "";
  const hasCountryPrefix = (COUNTRY_SLUGS as readonly string[]).includes(firstSegment);

  if (hasCountryPrefix) {
    // Already country-prefixed — run Supabase session update
    const response = await updateSession(request);
    // Ensure cookie matches the active URL segment
    response.cookies.set("user_country", firstSegment, {
      path: "/",
      maxAge: 31536000,
      sameSite: "lax",
    });
    return response;
  }

  // ── 4. Bare path → detect country from IP Geolocation & redirect ─────────
  const targetCountry = await getTargetCountrySlug(request);

  // Preserve the full path + search string
  const rest = pathname === "/" ? "" : pathname;
  const search = request.nextUrl.search ?? "";
  const redirectUrl = new URL(`/${targetCountry}${rest}${search}`, request.url);

  const response = NextResponse.redirect(redirectUrl, { status: 307 });
  response.cookies.set("user_country", targetCountry, {
    path: "/",
    maxAge: 31536000,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimisation)
     * - favicon.ico / robots.txt / sitemap.xml
     * - image/font files
     */
    "/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};