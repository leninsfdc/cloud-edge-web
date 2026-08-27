import { CountrySlug } from "./country-data";

export interface CountryFaqItem {
  question: string;
  answer: string;
}

export interface CountryHomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    /** Uses the same {{highlight}} convention as CMS-driven banner titles. */
    title: string;
    description: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  faqs: CountryFaqItem[];
}

// Only countries with genuine, non-fabricated local content go here — no
// invented stats, testimonials, or claims of physical presence. Countries
// without an entry fall back to the existing CMS-driven / generic homepage
// content (see HeroSection.tsx, FaqSection.tsx, CountryIntroSection.tsx).
//
// Subject/course claims here must match what's actually live in the course
// catalog (checked 2026-08-27: Salesforce Administrator and Digital
// Marketing only — no AWS, SAP, Power BI, Data Science, or Java course
// exists yet despite those subjects being promoted elsewhere on the site).
// Update this copy to match the catalog as new courses go live, not the
// other way around.
export const COUNTRY_HOME_CONTENT: Partial<Record<CountrySlug, CountryHomeContent>> = {
  uk: {
    metaTitle: "IT Training Courses UK | Salesforce & Digital Marketing | Cloud Edge Solutions",
    metaDescription:
      "Explore IT training courses in the UK with Cloud Edge Solutions. Learn Salesforce Administration and Digital Marketing with expert-led online training and career support.",
    hero: {
      title: "IT Training Courses{{ in the UK}}",
      description:
        "Practical, instructor-led IT training for professionals, graduates and career changers across the UK.",
    },
    intro: {
      heading: "Online IT Training Built for UK Professionals",
      paragraphs: [
        "Cloud Edge Solutions delivers live, instructor-led online IT training for professionals, graduates and career changers across the UK. Our current courses cover Salesforce Administration and Digital Marketing, with hands-on projects and certification preparation built into every programme.",
        "Training is fully online and scheduled around UK time zones, so you can learn alongside a live instructor without relocating or taking time away from work. Every course includes career support to help you move from certification into a new role.",
        "Cloud Edge Solutions is an India-based IT training provider delivering live online training to professionals across the UK — there's no physical UK office, but every session is live with a real instructor, not pre-recorded.",
      ],
    },
    faqs: [
      {
        question: "Do you offer IT training in the UK?",
        answer:
          "Yes. Cloud Edge Solutions delivers live, instructor-led online IT training to students across the UK, with course schedules designed to fit UK time zones.",
      },
      {
        question: "Is Cloud Edge Solutions based in the UK?",
        answer:
          "Cloud Edge Solutions is headquartered in India and delivers training to UK students entirely online — there is no physical UK office. Every class is live and instructor-led, scheduled to fit UK time zones.",
      },
      {
        question: "What courses does Cloud Edge Solutions currently offer?",
        answer:
          "Salesforce Administration and Digital Marketing, both as live online training with certification exam preparation included. Full course details are on our Courses page.",
      },
      {
        question: "Do you provide Salesforce certification preparation?",
        answer:
          "Yes, certification exam preparation is included as part of our Salesforce Administration course.",
      },
      {
        question: "Are evening classes available for working professionals?",
        answer:
          "Yes, batches are scheduled to accommodate working professionals, including evening and weekend options where available.",
      },
      {
        question: "Are these courses suitable for beginners?",
        answer:
          "Yes, both our Salesforce Administration and Digital Marketing courses are designed for beginners as well as career changers, with prerequisites listed on each course page.",
      },
    ],
  },
  usa: {
    metaTitle: "IT Training Courses USA | Salesforce & Digital Marketing | Cloud Edge Solutions",
    metaDescription:
      "Explore IT training courses in the USA with Cloud Edge Solutions. Learn Salesforce Administration and Digital Marketing with expert-led online training and career support.",
    hero: {
      title: "IT Training Courses{{ in the USA}}",
      description:
        "Practical, instructor-led IT training for professionals, graduates and career changers across the USA.",
    },
    intro: {
      heading: "Online IT Training Built for US Professionals",
      paragraphs: [
        "Cloud Edge Solutions delivers live, instructor-led online IT training for professionals, graduates and career changers across the USA. Our current courses cover Salesforce Administration and Digital Marketing, with hands-on projects and certification preparation built into every programme.",
        "Training is fully online and scheduled around US time zones, so you can learn alongside a live instructor without relocating or taking time away from work. Every course includes career support to help you move from certification into a new role.",
        "Cloud Edge Solutions is an India-based IT training provider delivering live online training to professionals across the USA — there's no physical US office, but every session is live with a real instructor, not pre-recorded.",
      ],
    },
    faqs: [
      {
        question: "Do you offer IT training in the USA?",
        answer:
          "Yes. Cloud Edge Solutions delivers live, instructor-led online IT training to students across the USA, with course schedules designed to fit US time zones.",
      },
      {
        question: "Is Cloud Edge Solutions based in the USA?",
        answer:
          "Cloud Edge Solutions is headquartered in India and delivers training to US students entirely online — there is no physical US office. Every class is live and instructor-led, scheduled to fit US time zones.",
      },
      {
        question: "Are classes available in US time zones?",
        answer:
          "Yes, batches are scheduled with US time zones in mind, including evening and weekend options where available.",
      },
      {
        question: "What courses does Cloud Edge Solutions currently offer?",
        answer:
          "Salesforce Administration and Digital Marketing, both as live online training with certification exam preparation included. Full course details are on our Courses page.",
      },
      {
        question: "Do you provide career support after certification?",
        answer:
          "Yes, every course includes career guidance to help you move from certification into a new role.",
      },
      {
        question: "Are these courses suitable for beginners?",
        answer:
          "Yes, both our Salesforce Administration and Digital Marketing courses are designed for beginners as well as career changers, with prerequisites listed on each course page.",
      },
    ],
  },
  australia: {
    metaTitle: "IT Training Courses Australia | Salesforce & Digital Marketing | Cloud Edge Solutions",
    metaDescription:
      "Explore IT training courses in Australia with Cloud Edge Solutions. Learn Salesforce Administration and Digital Marketing with expert-led online training and career support.",
    hero: {
      title: "IT Training Courses{{ in Australia}}",
      description:
        "Practical, instructor-led IT training for professionals, graduates and career changers across Australia.",
    },
    intro: {
      heading: "Online IT Training Built for Australian Professionals",
      paragraphs: [
        "Cloud Edge Solutions delivers live, instructor-led online IT training for professionals, graduates and career changers across Australia. Our current courses cover Salesforce Administration and Digital Marketing, with hands-on projects and certification preparation built into every programme.",
        "Training is fully online and scheduled with Australian time zones in mind, so you can learn alongside a live instructor without relocating or taking time away from work. Every course includes career support to help you move from certification into a new role.",
        "Cloud Edge Solutions is an India-based IT training provider delivering live online training to professionals across Australia — there's no physical Australian office, but every session is live with a real instructor, not pre-recorded.",
      ],
    },
    faqs: [
      {
        question: "Do you offer IT training in Australia?",
        answer:
          "Yes. Cloud Edge Solutions delivers live, instructor-led online IT training to students across Australia, with course schedules designed to fit Australian time zones.",
      },
      {
        question: "Is Cloud Edge Solutions based in Australia?",
        answer:
          "Cloud Edge Solutions is headquartered in India and delivers training to Australian students entirely online — there is no physical Australian office. Every class is live and instructor-led, scheduled to fit Australian time zones.",
      },
      {
        question: "Are classes available in AEST/AEDT?",
        answer:
          "Yes, batches are scheduled with Australian time zones in mind, including evening and weekend options where available.",
      },
      {
        question: "What courses does Cloud Edge Solutions currently offer?",
        answer:
          "Salesforce Administration and Digital Marketing, both as live online training with certification exam preparation included. Full course details are on our Courses page.",
      },
      {
        question: "Do you provide career support after certification?",
        answer:
          "Yes, every course includes career guidance to help you move from certification into a new role.",
      },
      {
        question: "Are these courses suitable for beginners?",
        answer:
          "Yes, both our Salesforce Administration and Digital Marketing courses are designed for beginners as well as career changers, with prerequisites listed on each course page.",
      },
    ],
  },
};
