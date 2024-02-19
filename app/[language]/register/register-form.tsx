"use client";
import { useRouter } from "next/navigation";
import * as yup from "yup";

import Image from "next/image";
import Link from "next/link";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { Button } from "flowbite-react";
import FormTextInput from "@/components/form/text-input";
import { RegisterPayload } from "@/services/axios/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { authApi } from "@/services/axios";
import { useTranslation } from "@/services/i18n/client";

const useValidationSchema = () => {
  const { t } = useTranslation("register");

  return yup.object().shape({
    last_name: yup
      .string()
      .required(t("register:inputs.last_name.validation.required"))
      .max(255, "Dài vượt quá số ký tự cho phép"),
    first_name: yup
      .string()
      .required(t("register:inputs.first_name.validation.required"))
      .max(255, "Dài vượt quá số ký tự cho phép"),
    email: yup
      .string()
      .required(t("register:inputs.email.validation.required"))
      .email(t("register:inputs.email.validation.invalid")),
    phone: yup
      .string()
      .required(t("register:inputs.phone.validation.required"))
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {
        message: t("register:inputs.phone.validation.matches"),
        excludeEmptyString: false,
      }),
    password: yup
      .string()
      .required(t("register:inputs.password.validation.required"))
      .min(8, "Mật khẩu tối thiểu 8 ký tự"),
    password_confirmation: yup
      .string()
      .required(t("register:inputs.password_confirmation.validation.required"))
      .min(8, "Xác nhập mật khẩu tối thiểu 8 ký tự")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  });
};

function RegisterActions() {
  const { t } = useTranslation("register");
  const { isSubmitting } = useFormState();

  return (
    <Button
      className="w-full"
      size="lg"
      type="submit"
      disabled={isSubmitting}
      isProcessing={isSubmitting}
    >
      {t("register:actions.submit")}
    </Button>
  );
}

const RegisterForm = () => {
  const { t } = useTranslation("register");
  const validationSchema = useValidationSchema();

  const methods = useForm<RegisterPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      last_name: "",
      first_name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: RegisterPayload) => {
    console.log("register", formData);
    const { data: user } = await authApi.register(formData);

    if (user && user.id) {
      reset();
    } else {
      reset({ password: "", password_confirmation: "" });
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
              id="last_name"
              name="last_name"
              type="text"
              placeholder={t("register:inputs.last_name.label")}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="first_name"
              name="first_name"
              type="text"
              placeholder={t("register:inputs.first_name.label")}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="email"
              name="email"
              type="email"
              placeholder={t("register:inputs.email.label")}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="phone"
              name="phone"
              placeholder={t("register:inputs.phone.label")}
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
              placeholder={t("register:inputs.password.label")}
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
            <FormTextInput
              label=""
              className="w-full"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder={t("register:inputs.password_confirmation.label")}
              required
            />
          </div>
        </div>

        <RegisterActions />
        <Link href="/login">{t("register:actions.accountAlreadyExists")}</Link>
      </form>
    </FormProvider>
  );
};

function Register() {
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
              Chào Mừng Đến Phần Mềm MKT
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
