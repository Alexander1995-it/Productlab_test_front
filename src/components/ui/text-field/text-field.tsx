import React, { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import clsx from "clsx";
import s from "./text-field.module.scss";
import { Eye, EyeOff } from "../../../assets/icons";

type TextFieldPropsType = {
  className?: string;
  errorMessage?: string;
} & ComponentPropsWithoutRef<"input">;

export const TextField = forwardRef<HTMLInputElement, TextFieldPropsType>(
  ({ type, className, errorMessage, ...restProps }, ref) => {
    const [showPassword, setShowPassword] = useState(true);

    const isButtonShowPassword = type === "password";

    const classNames = {
      root: clsx(s.field, className, errorMessage && s.error),
    };

    const finalType = type === "password" && showPassword ? "password" : "text";

    return (
      <div className={s.containerInput}>
        {isButtonShowPassword && (
          <button
            onClick={() => setShowPassword((prev) => !prev)}
            className={s.showPassword}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
        <input
          ref={ref}
          className={classNames.root}
          type={finalType}
          {...restProps}
        />
        <div className={s.errorMessage}>{errorMessage}</div>
      </div>
    );
  },
);
