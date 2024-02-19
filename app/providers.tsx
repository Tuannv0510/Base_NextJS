"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import ReactQueryProvider from "@/services/react-query/react-query-provider";
import AuthProvider from "@/services/auth/auth-provider";
import StoreLanguageProvider from "@/services/i18n/store-language-provider";
import { SidebarProvider } from "@/context/sidebar-context";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <StoreLanguageProvider>
        <AuthProvider>
          <SidebarProvider>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
          </SidebarProvider>
        </AuthProvider>
      </StoreLanguageProvider>
    </ReactQueryProvider>
  );
}
