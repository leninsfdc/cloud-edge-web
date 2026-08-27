import { Metadata } from "next";
import { buildSubjectLocationMetadata, renderSubjectLocationPage } from "@/libs/subjectTrainingShared";

const SUBJECT_SLUG = "java";

type Props = {
  params: Promise<{ country: string; location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, location } = await params;
  return buildSubjectLocationMetadata(SUBJECT_SLUG, country, location);
}

const Page = async ({ params }: Props) => {
  const { country, location } = await params;
  return renderSubjectLocationPage(SUBJECT_SLUG, country, location);
};

export default Page;
