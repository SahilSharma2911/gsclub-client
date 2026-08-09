import { noIndex } from "@/lib/noindex";
import { Metadata } from "next";
import VapePage from "@/components/vapes/VapePage";

export const metadata: Metadata = {
  alternates: { canonical: 'https://getsmoke.com/e-hookah' },
  ...noIndex,
  title: "E-Hookah Vapes | GetSmoke",
  description: "Shop E-Hookah disposable devices at GetSmoke. Best selection of shisha-style vapes.",
};

export default function EHookahPage() {
  return <VapePage productType="HOOKAH" heading="E-Hookah Vapes" />;
}
