import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import { getServerTranslation } from "@/services/i18n";
import { dir } from "i18next";
import { languages } from "@/services/i18n/config";
import { cn } from "@/services/helpers/utils";

type Props = {
  params: { language: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { t } = await getServerTranslation(params.language, "common");

  return {
    title: {
      default: t("title"),
      template: `%s - ${t("title")}`,
    },
    description: siteConfig.description,
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params: { language },
}: {
  children: React.ReactNode;
  params: { language: string };
}) {
  return (
    <html lang={language} dir={dir(language)} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-transparent font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
