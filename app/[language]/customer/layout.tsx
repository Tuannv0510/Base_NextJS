import { Metadata } from "next";
import { getServerTranslation } from "@/services/i18n";
import CustomerLayout from "./layout-client";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "home");

  return {
    title: t("title"),
  };
}

export default CustomerLayout;
