import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import React from "react";
import CreateUpdateBatchRegionContainer from "@/containers/asgard/academics/CreateUpdateBatchRegionContainer";
import { getAllBatches } from "../actions";
import { IBatches } from "@/types";

const Page = async () => {
  const batches = (await getAllBatches()) as IBatches[];

  return <CreateUpdateBatchRegionContainer batches={batches} />;
};

export default Page;
