import { Metadata } from "next";
import { buildInstituteLocationMetadata, renderInstituteLocationPage } from "@/libs/instituteTrainingShared";

type Props = {
  params: Promise<{ country: string; location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, location } = await params;
  return buildInstituteLocationMetadata(country, location);
}

const Page = async ({ params }: Props) => {
  const { country, location } = await params;
  return renderInstituteLocationPage(country, location);
};

export default Page;
