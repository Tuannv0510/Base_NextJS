import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import acceptLanguage from "accept-language";
import {
  fallbackLanguage,
  languages,
  cookieName,
} from "./services/i18n/config";
import { AUTH_TOKEN } from "./services/axios/httpClient";
import { NextURL } from "next/dist/server/web/next-url";

acceptLanguage.languages([...languages]);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|robots.txt|sitemap.xml|manifest.json).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { cookies, nextUrl, headers } = req;
  const token = cookies.get(AUTH_TOKEN) ?? "";

  if (
    nextUrl.pathname.indexOf("icon") > -1 ||
    nextUrl.pathname.indexOf("chrome") > -1
  ) {
    return NextResponse.next();
  }

  let language;
  if (cookies.has(cookieName))
    language = acceptLanguage.get(cookies.get(cookieName)?.value);
  if (!language) language = acceptLanguage.get(headers.get("Accept-Language"));
  if (!language) language = fallbackLanguage;

  // Redirect if language in path is not supported
  if (
    !languages.some((loc) => nextUrl.pathname.startsWith(`/${loc}`)) &&
    !nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${language}${nextUrl.pathname}${nextUrl.search}`, req.url)
    );
  }

  if (headers.has("referer")) {
    const refererUrl = new URL(headers.get("referer") ?? "");
    const languageInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (languageInReferer) response.cookies.set(cookieName, languageInReferer);

    return response;
  }

  if (!token && !isPublic(language, nextUrl)) {
    return NextResponse.redirect(new URL(`/${language}/login`, req.url));
  }

  return NextResponse.next();
}

const isPublic = (language: string, nextUrl: NextURL): boolean => {
  return (
    nextUrl.pathname.startsWith(`/${language}/login`) ||
    nextUrl.pathname.startsWith(`/${language}/register`)
  );
};
