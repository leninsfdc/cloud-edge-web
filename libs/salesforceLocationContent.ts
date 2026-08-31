import { CountrySlug } from "./country-data";

export interface LocalFaqItem {
  question: string;
  answer: string;
}

/** A country-wide "Salesforce Training in {Country}" page — online-only markets. */
export interface CountryWidePage {
  countrySlug: CountrySlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  citiesmentioned: string[];
  faqs: LocalFaqItem[];
}

/** A city page tied to a genuine physical CloudEdge AI branch. */
export interface CityPage {
  slug: string;
  countrySlug: CountrySlug;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  address: string;
  /** No verified phone number exists for this branch yet — omit rather than reuse the placeholder numbers found in TrainingBranchesSection. */
  telephone?: string;
  faqs: LocalFaqItem[];
}

const SALESFORCE_COURSE_PATH = "courses/master-salesforce-advance-your-career";

export const SALESFORCE_COUNTRY_PAGES: Partial<Record<CountrySlug, CountryWidePage>> = {
  uk: {
    countrySlug: "uk",
    metaTitle: "Salesforce Training in the UK | Live Online Course | Cloud Edge AI Solutions",
    metaDescription:
      "Salesforce Administrator training for professionals across the UK, including London, Manchester and Birmingham — live online, certification exam preparation included.",
    h1: "Salesforce Training in the UK",
    intro: [
      "Cloud Edge AI Solutions delivers live, instructor-led Salesforce Administrator training to professionals across the UK — including London, Manchester, Birmingham, and everywhere in between — entirely online.",
      "There's no physical UK office: Cloud Edge AI Solutions is headquartered in India, and every class is live with a real instructor over Zoom, not pre-recorded, scheduled to fit UK time zones.",
    ],
    citiesmentioned: ["London", "Manchester", "Birmingham", "Edinburgh", "Leeds"],
    faqs: [
      {
        question: "Is Salesforce training available near me in the UK?",
        answer:
          "Yes — since training is delivered live online rather than from a physical classroom, it's equally accessible from London, Manchester, Birmingham, or anywhere else in the UK, as long as you can join a live Zoom session.",
      },
      {
        question: "Do you have a training centre in London?",
        answer:
          "No. Cloud Edge AI Solutions doesn't have a physical UK office. Training is delivered live online from India-based instructors, with schedules set to fit UK time zones.",
      },
      {
        question: "What does the Salesforce training cover?",
        answer:
          "The course prepares you for the Salesforce Administrator (ADM-201) certification, with hands-on practice in a real Salesforce org, not just a demo environment.",
      },
    ],
  },
  usa: {
    countrySlug: "usa",
    metaTitle: "Salesforce Training in the USA | Live Online Course | Cloud Edge AI Solutions",
    metaDescription:
      "Salesforce Administrator training for professionals across the USA, including New York, Chicago and San Francisco — live online, certification exam preparation included.",
    h1: "Salesforce Training in the USA",
    intro: [
      "Cloud Edge AI Solutions delivers live, instructor-led Salesforce Administrator training to professionals across the USA — including New York, Chicago, San Francisco, and everywhere in between — entirely online.",
      "There's no physical US office: Cloud Edge AI Solutions is headquartered in India, and every class is live with a real instructor over Zoom, not pre-recorded, scheduled to fit US time zones.",
    ],
    citiesmentioned: ["New York", "Chicago", "San Francisco", "Austin", "Seattle"],
    faqs: [
      {
        question: "Is Salesforce training available near me in the USA?",
        answer:
          "Yes — since training is delivered live online rather than from a physical classroom, it's equally accessible from New York, Chicago, San Francisco, or anywhere else in the USA, as long as you can join a live Zoom session.",
      },
      {
        question: "Do you have a training centre in New York?",
        answer:
          "No. Cloud Edge AI Solutions doesn't have a physical US office. Training is delivered live online from India-based instructors, with schedules set to fit US time zones.",
      },
      {
        question: "What does the Salesforce training cover?",
        answer:
          "The course prepares you for the Salesforce Administrator (ADM-201) certification, with hands-on practice in a real Salesforce org, not just a demo environment.",
      },
    ],
  },
  uae: {
    countrySlug: "uae",
    metaTitle: "Salesforce Training in the UAE | Live Online Course | Cloud Edge AI Solutions",
    metaDescription:
      "Salesforce Administrator training for professionals across the UAE, including Dubai, Abu Dhabi and Sharjah — live online, certification exam preparation included.",
    h1: "Salesforce Training in the UAE",
    intro: [
      "Cloud Edge AI Solutions delivers live, instructor-led Salesforce Administrator training to professionals across the UAE — including Dubai, Abu Dhabi, Sharjah, and everywhere in between — entirely online.",
      "There's no physical UAE office: Cloud Edge AI Solutions is headquartered in India, and every class is live with a real instructor over Zoom, not pre-recorded, scheduled to fit UAE time zones.",
    ],
    citiesmentioned: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    faqs: [
      {
        question: "Is Salesforce training available near me in Dubai?",
        answer:
          "Yes — since training is delivered live online rather than from a physical classroom, it's equally accessible from Dubai, Abu Dhabi, Sharjah, or anywhere else in the UAE, as long as you can join a live Zoom session.",
      },
      {
        question: "Do you have a training centre in Dubai?",
        answer:
          "No. Cloud Edge AI Solutions doesn't have a physical UAE office. Training is delivered live online from India-based instructors, with schedules set to fit UAE time zones.",
      },
      {
        question: "What does the Salesforce training cover?",
        answer:
          "The course prepares you for the Salesforce Administrator (ADM-201) certification, with hands-on practice in a real Salesforce org, not just a demo environment.",
      },
    ],
  },
};

export const SALESFORCE_CITY_PAGES: Record<string, CityPage> = {
  hyderabad: {
    slug: "hyderabad",
    countrySlug: "in",
    city: "Hyderabad",
    region: "Telangana, India",
    metaTitle: "Salesforce Training in Hyderabad | Cloud Edge AI Solutions",
    metaDescription:
      "Salesforce Administrator training in Hyderabad — live online classes plus a real CloudEdge AI training branch in Hitech City, Madhapur. Certification exam preparation included.",
    h1: "Salesforce Training in Hyderabad",
    intro: [
      "Cloud Edge AI Solutions runs a real training branch in Hitech City, Madhapur, Hyderabad, alongside live online Salesforce Administrator training for students who prefer to learn remotely.",
      "Whether you visit the Hyderabad branch or join live online, every class is instructor-led with hands-on practice in a real Salesforce org, building toward the Salesforce Administrator (ADM-201) certification.",
    ],
    address: "5th Floor, TechSquare Tower, Hitech City, Madhapur, Hyderabad – 500081",
    faqs: [
      {
        question: "Is there a Salesforce training centre near me in Hyderabad?",
        answer:
          "Yes — Cloud Edge AI Solutions has a training branch in Hitech City, Madhapur, Hyderabad. Online-only students can also join the same live classes remotely.",
      },
      {
        question: "What does the Salesforce training in Hyderabad cover?",
        answer:
          "The course prepares you for the Salesforce Administrator (ADM-201) certification, with hands-on practice in a real Salesforce org, not just a demo environment.",
      },
    ],
  },
  vijayawada: {
    slug: "vijayawada",
    countrySlug: "in",
    city: "Vijayawada",
    region: "Andhra Pradesh, India",
    metaTitle: "Salesforce Training in Vijayawada | Cloud Edge AI Solutions",
    metaDescription:
      "Salesforce Administrator training in Vijayawada — live online classes plus a real CloudEdge AI training branch near Benz Circle, MG Road. Certification exam preparation included.",
    h1: "Salesforce Training in Vijayawada",
    intro: [
      "Cloud Edge AI Solutions runs a real training branch near Benz Circle on MG Road, Vijayawada, alongside live online Salesforce Administrator training for students who prefer to learn remotely.",
      "Whether you visit the Vijayawada branch or join live online, every class is instructor-led with hands-on practice in a real Salesforce org, building toward the Salesforce Administrator (ADM-201) certification.",
    ],
    address: "3rd Floor, SR Plaza, MG Road, Benz Circle, Vijayawada - 520010",
    faqs: [
      {
        question: "Is there a Salesforce training centre near me in Vijayawada?",
        answer:
          "Yes — Cloud Edge AI Solutions has a training branch on MG Road, near Benz Circle, Vijayawada. Online-only students can also join the same live classes remotely.",
      },
      {
        question: "What does the Salesforce training in Vijayawada cover?",
        answer:
          "The course prepares you for the Salesforce Administrator (ADM-201) certification, with hands-on practice in a real Salesforce org, not just a demo environment.",
      },
    ],
  },
};

export { SALESFORCE_COURSE_PATH };
