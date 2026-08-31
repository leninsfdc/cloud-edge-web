/**
 * Subjects genuinely taught by Cloud Edge AI Solutions as corporate/private
 * batches that aren't yet represented as public course records in the
 * "courses" table (confirmed with the site owner 2026-08-27). Salesforce
 * and Digital Marketing ARE in that table and have their own dedicated
 * implementation (see salesforce-training/) — deliberately not duplicated
 * here to avoid two parallel systems for the same subject.
 *
 * Because none of these have a real course detail page, every CTA here
 * points to an enquiry (WhatsApp/email), not a fake "view course" link.
 */
export interface Subject {
  slug: string;
  name: string;
  shortDescription: string;
  highlights: string[];
  certExam?: string;
}

export const SUBJECTS: Record<string, Subject> = {
  sap: {
    slug: "sap",
    name: "SAP",
    shortDescription:
      "SAP ERP training covering the modules enterprises actually run in production — finance, materials management, and core configuration.",
    highlights: [
      "SAP FICO (Finance & Controlling)",
      "SAP MM (Materials Management)",
      "Core SAP navigation and configuration",
      "Real system access, not a demo sandbox",
    ],
    certExam: "official SAP certification exams",
  },
  mulesoft: {
    slug: "mulesoft",
    name: "MuleSoft",
    shortDescription:
      "MuleSoft API and integration training for connecting enterprise systems — the same integration patterns used in live Salesforce/SAP deployments.",
    highlights: [
      "Anypoint Platform fundamentals",
      "API design and API-led connectivity",
      "Integration patterns used in production systems",
      "Hands-on integration projects",
    ],
    certExam: "MuleSoft Certified Developer exam",
  },
  java: {
    slug: "java",
    name: "Java Full Stack",
    shortDescription:
      "Java full-stack development covering backend services with Spring Boot and frontend integration, built around real projects rather than isolated exercises.",
    highlights: [
      "Core Java and Spring Boot",
      "REST API development",
      "Frontend integration (React)",
      "Database-backed project work",
    ],
  },
  aws: {
    slug: "aws",
    name: "AWS",
    shortDescription:
      "AWS cloud training covering the services most enterprise roles actually use — compute, storage, and the fundamentals behind the Solutions Architect and DevOps certification paths.",
    highlights: [
      "EC2, S3, IAM, VPC fundamentals",
      "Cloud architecture principles",
      "Hands-on labs in a real AWS account",
      "Certification exam preparation",
    ],
    certExam: "AWS certification exams",
  },
  devops: {
    slug: "devops",
    name: "DevOps",
    shortDescription:
      "DevOps training covering CI/CD pipelines, containerisation, and infrastructure automation — the practical skillset behind modern deployment workflows.",
    highlights: [
      "CI/CD pipeline design",
      "Containerisation (Docker)",
      "Infrastructure automation",
      "Real deployment workflows, not slides",
    ],
  },
  "data-science": {
    slug: "data-science",
    name: "Data Science",
    shortDescription:
      "Data Science training covering Python, statistical analysis, and machine learning fundamentals, built around real datasets rather than toy examples.",
    highlights: [
      "Python for data analysis",
      "Statistical fundamentals",
      "Machine learning basics",
      "Real dataset projects",
    ],
  },
  python: {
    slug: "python",
    name: "Python",
    shortDescription:
      "Python programming training from core language fundamentals through to building real, working applications.",
    highlights: [
      "Core Python syntax and data structures",
      "Object-oriented programming",
      "Working with real-world libraries",
      "Project-based learning",
    ],
  },
  "web-design": {
    slug: "web-design",
    name: "Web Design",
    shortDescription:
      "Web design training covering responsive layout, modern CSS, and the front-end fundamentals behind building real, working websites.",
    highlights: [
      "HTML5 and modern CSS",
      "Responsive, mobile-first layout",
      "Design-to-code workflow",
      "Real website build projects",
    ],
  },
  "ui-ux": {
    slug: "ui-ux",
    name: "UI/UX Design",
    shortDescription:
      "UI/UX design training covering user research, wireframing, and design systems in Figma — taught by a practising design lead, not just a certified instructor.",
    highlights: [
      "User research fundamentals",
      "Wireframing and prototyping in Figma",
      "Design systems",
      "Accessibility-aware design",
    ],
  },
};
