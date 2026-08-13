import { headers } from "next/headers";

export type PricingCountryCode = "IN" | "UK" | "US" | "CA";

function mapToPricingCode(raw: string | null | undefined): PricingCountryCode {
  const code = (raw ?? "").toUpperCase().trim();

  if (code === "IN") return "IN";
  if (code === "GB" || code === "UK") return "UK";
  if (code === "CA") return "CA";
  if (code === "US") return "US";

  return "US";
}

async function fetchCountryFromPublicIp(clientIp: string): Promise<string | null> {
  const isPrivate =
    !clientIp ||
    clientIp === "127.0.0.1" ||
    clientIp === "::1" ||
    clientIp.startsWith("192.168.") ||
    clientIp.startsWith("10.") ||
    clientIp.startsWith("172.");

  const targetIp = isPrivate ? "" : clientIp;

  // Provider 1: api.country.is (HTTPS, super fast)
  try {
    const url = targetIp ? `https://api.country.is/${targetIp}` : `https://api.country.is/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country) return String(data.country);
    }
  } catch {}

  // Provider 2: ipapi.co (HTTPS fallback)
  try {
    const url = targetIp ? `https://ipapi.co/${targetIp}/json/` : `https://ipapi.co/json/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country_code) return String(data.country_code);
    }
  } catch {}

  // Provider 3: ipwho.is (HTTPS fallback)
  try {
    const url = targetIp ? `https://ipwho.is/${targetIp}` : `https://ipwho.is/`;
    const res = await fetch(url, { signal: AbortSignal.timeout(3000), cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.country_code) return String(data.country_code);
    }
  } catch {}

  return null;
}

/**
 * Reads the visitor's country from HTTP request headers or queries HTTPS IP API fallback.
 */
export async function getCountryCode(): Promise<PricingCountryCode> {
  try {
    const headersList = await headers();

    const cf = headersList.get("cf-ipcountry");
    if (cf) return mapToPricingCode(cf);

    const vercel = headersList.get("x-vercel-ip-country");
    if (vercel) return mapToPricingCode(vercel);

    const aws = headersList.get("cloudfront-viewer-country");
    if (aws) return mapToPricingCode(aws);

    const forwarded = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    let clientIp = (forwarded ? forwarded.split(",")[0] : realIp) || "";
    clientIp = clientIp.trim();

    const detected = await fetchCountryFromPublicIp(clientIp);
    if (detected) return mapToPricingCode(detected);
  } catch {
    // Ignore errors
  }

  return "US";
}
