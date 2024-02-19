import type { Metadata } from "next";
import Login from "./login-form";
import { getServerTranslation } from "@/services/i18n";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "login");

  return {
    title: t("title"),
  };
}

export default Login;
