import { GithubIcon } from "@/components/icons";
import { getServerTranslation } from "@/services/i18n";
import { languages } from "@/services/i18n/config";
import { Button } from "flowbite-react";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "home");

  return {
    title: t("title"),
  };
}

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export default async function Home({ params }: Props) {
  const { t } = await getServerTranslation(params.language, "home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1>{t("title")}</h1>
        <div className="flex flex-wrap gap-2">
          <Button gradientDuoTone="purpleToBlue">
            <Link href={"/customer"} color="primary">
              Khách Hàng
            </Link>
          </Button>
          <Button outline gradientDuoTone="purpleToBlue">
            <GithubIcon size={20} className="mr-2 h-5 w-5" />
            <Link href={"/employee"}>Nhân Viên</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
