"use client";

import { AnalyticsScripts } from "@/components/marketing/analytics-scripts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnalyticsScripts />
      {children}
    </>
  );
}
