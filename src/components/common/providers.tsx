"use client";

import { AnalyticsScripts } from "@/components/marketing/analytics-scripts";
import { ContactMethodChooserProvider } from "@/components/marketing/contact-method-chooser";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ContactMethodChooserProvider>
      <AnalyticsScripts />
      {children}
    </ContactMethodChooserProvider>
  );
}
