"use client";

import { Label, TextInput, TextInputProps } from "flowbite-react";
import { ChangeEvent, ReactNode, forwardRef, useState } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

type MyTextInputProps = TextInputProps & {
  label: string;
  type?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  autoComplete?: string;
};

const TextInputField = forwardRef<
  HTMLInputElement | null,
  MyTextInputProps & {
    name: string;
    value: string;
    onChange: (
      value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlur: () => void;
    helperTextRender?: () => ReactNode;
  }
>(function TextInputField(props, ref) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  // const handleClickShowPassword = () => setIsShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };
  return (
    <TextInput
      ref={ref}
      {...props}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      autoFocus={props.autoFocus}
      type={props.type === "password" && isShowPassword ? "text" : props.type}
      color={props.error ? "failure" : "success"}
      helperText={props.error}
      disabled={props.disabled}
      autoComplete={props.autoComplete}
      // InputProps={{
      //   readOnly: props.readOnly,
      //   endAdornment:
      //     props.type === "password" ? (
      //       <InputAdornment position="end">
      //         <IconButton
      //           aria-label="toggle password visibility"
      //           onClick={handleClickShowPassword}
      //           onMouseDown={handleMouseDownPassword}
      //           edge="end"
      //         >
      //           {isShowPassword ? <VisibilityOff /> : <Visibility />}
      //         </IconButton>
      //       </InputAdornment>
      //     ) : undefined,
      // }}
    />
  );
});

function FormTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: Pick<ControllerProps<TFieldValues, TName>, "name" | "defaultValue"> &
    MyTextInputProps
) {
  return (
    <Controller
      name={props.name}
      defaultValue={props.defaultValue}
      render={({ field, fieldState }) => (
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor={props.id} value={props.label} />
          </div>

          <TextInputField
            {...props}
            {...field}
            error={fieldState.error?.message}
          />
        </div>
      )}
    />
  );
}

export default FormTextInput;
