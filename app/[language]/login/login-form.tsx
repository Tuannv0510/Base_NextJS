"use client";

import withPageRequiredGuest from "@/services/auth/with-page-required-guest";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { authApi } from "@/services/axios/auth";
import useAuthActions from "@/services/auth/use-auth-actions";
import useAuthTokens from "@/services/auth/use-auth-tokens";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useTranslation } from "@/services/i18n/client";
import { Button, TextInput } from "flowbite-react";
import { LoginPayload } from "@/services/axios/types/auth";
import Image from "next/image";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "@/services/axios/httpClient";
import { HiMail } from "react-icons/hi";
import { EyeFilledIcon } from "@/components/icons";
import FormTextInput from "@/components/form/text-input";

const useValidationSchema = () => {
  const { t } = useTranslation("login");

  return yup.object().shape({
    email: yup
      .string()
      .email(t("login:inputs.email.validation.invalid"))
      .required(t("login:inputs.email.validation.required")),
    password: yup
      .string()
      .min(8, t("login:inputs.password.validation.min"))
      .required(t("login:inputs.password.validation.required")),
  });
};

function FormActions() {
  const { t } = useTranslation("login");
  const { isSubmitting } = useFormState();

  return (
    <Button
      className="w-full"
      size="lg"
      type="submit"
      disabled={isSubmitting}
      isProcessing={isSubmitting}
    >
      {t("login:actions.submit")}
    </Button>
  );
}

function LoginForm() {
  const { setUser } = useAuthActions();
  const { setTokensInfo } = useAuthTokens();
  const { t } = useTranslation("login");
  const validationSchema = useValidationSchema();

  const methods = useForm<LoginPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: LoginPayload) => {
    const tokens = await authApi.login(formData);

    if (tokens && tokens.apiToken) {
      const { data: user } = await authApi.verifyToken({
        token: tokens.apiToken,
      });
      if (user && user.email) {
        Cookies.set(AUTH_TOKEN, tokens.apiToken);
        setTokensInfo(tokens);
        setUser(user);
        reset();
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="email"
              name="email"
              type="email"
              rightIcon={HiMail}
              placeholder="Email"
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="password"
              name="password"
              type="password"
              rightIcon={EyeFilledIcon}
              placeholder="******"
              required
            />
          </div>
        </div>

        <FormActions />
      </form>
    </FormProvider>
  );
}

function Login() {
  return (
    <div className="main-section relative text-sm antialiased bg-[#023071]">
      <div className="min-h-screen text-black dark:text-white-dark">
        <div
          className={`flex min-h-screen items-center justify-start bg-cover bg-center pl-56 bg-[url('/assets/images/bg/bg.png')]`}
        >
          <div className="m-6 w-full max-w-lg sm:w-[450px]">
            <Image
              alt="logo"
              src={"/assets/images/logo/logo-mkt.png"}
              width={340}
              height={103}
            />
            <h1 className="mb-6 text-2xl font-bold text-white mt-6">
              Hệ Thống Quản Lý Phần Mềm MKT
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withPageRequiredGuest(Login);
