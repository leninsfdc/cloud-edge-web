import { Metadata } from "next";
import { buildInstituteCountryMetadata, renderInstituteCountryPage } from "@/libs/instituteTrainingShared";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  return buildInstituteCountryMetadata(country);
}

const Page = async ({ params }: Props) => {
  const { country } = await params;
  return renderInstituteCountryPage(country);
};

export default Page;
