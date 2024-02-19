import type { Metadata } from "next";
import Register from "./register-form";
import { getServerTranslation } from "@/services/i18n";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "register");

  return {
    title: t("title"),
  };
}

export default Register;
