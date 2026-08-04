import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import { getBanners } from "../banners/actions";
import BannerContainer from "@/containers/asgard/content/banners/BannerContainer";
import InstructureContainer from '@/containers/asgard/content/instructures/InstructureContainer';
import { getInstructures } from './actions';

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page({
  searchParams,
}: Props) {
  const params = await searchParams;

  const currentPage = Number(params.page ?? "1");

  const result = await getInstructures(currentPage);
  return (
    <InstructureContainer result={result} />
  );
}