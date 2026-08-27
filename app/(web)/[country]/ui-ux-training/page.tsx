import { Metadata } from "next";
import { buildSubjectCountryMetadata, renderSubjectCountryPage } from "@/libs/subjectTrainingShared";

const SUBJECT_SLUG = "ui-ux";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  return buildSubjectCountryMetadata(SUBJECT_SLUG, country);
}

const Page = async ({ params }: Props) => {
  const { country } = await params;
  return renderSubjectCountryPage(SUBJECT_SLUG, country);
};

export default Page;
