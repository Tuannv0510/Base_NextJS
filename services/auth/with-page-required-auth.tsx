"use client";
import { useRouter } from "next/navigation";
import useAuth from "./use-auth";
import React, { FunctionComponent, useEffect } from "react";
import useLanguage from "../i18n/use-language";
import { RoleEnum } from "@/services/axios/types/permission";

type PropsType = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

type OptionsType = {
  roles: RoleEnum[];
  permissions?: string[];
};

const roles = Object.values(RoleEnum).filter(
  (value) => !Number.isNaN(Number(value))
) as RoleEnum[];

function withPageRequiredAuth(
  Component: FunctionComponent<PropsType>,
  options?: OptionsType
) {
  const optionRoles = options?.roles || roles;

  return function WithPageRequiredAuth(props: PropsType) {
    const { user, isLoaded } = useAuth();
    const router = useRouter();
    const language = useLanguage();

    useEffect(() => {
      const check = () => {
        if (
          (user &&
            user.roles &&
            user.roles.length > 0 &&
            optionRoles.includes(user.roles[0].id)) ||
          !isLoaded
        )
          return;

        const currentLocation = window.location.toString();
        const returnToPath =
          currentLocation.replace(new URL(currentLocation).origin, "") ||
          `/${language}`;
        const params = new URLSearchParams({
          returnTo: returnToPath,
        });

        let redirectTo = `/${language}/login?${params.toString()}`;

        if (user) {
          redirectTo = `/${language}`;
        }

        router.replace(redirectTo);
      };

      check();
    }, [user, isLoaded, router, language]);

    return user &&
      user.roles &&
      user.roles.length > 0 &&
      user?.roles[0].id &&
      optionRoles.includes(user.roles[0].id) ? (
      <Component {...props} />
    ) : null;
  };
}

export default withPageRequiredAuth;
