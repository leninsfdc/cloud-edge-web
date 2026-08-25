import { Metadata } from 'next';
import React from 'react';
import DashboardContainer from "@/containers/asgard/dashboard/DashboardContainer";
import { getDashboardKPIs } from "@/app/(asgard)/asgard/dashboard/actions";

export const metadata: Metadata = {
  title: "Dashboard & KPIs | Asgard Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const DashboardPage = async () => {
  const kpis = await getDashboardKPIs();

  return <DashboardContainer initialData={kpis} />;
};

export default DashboardPage;