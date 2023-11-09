import React, { ComponentPropsWithoutRef } from "react";
import s from "./button.module.scss";
import clsx from "clsx";

type SuperButtonPropsType = {
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
} & ComponentPropsWithoutRef<"button">;

const Button = (props: SuperButtonPropsType) => {
  const { variant = "primary", className, ...restProps } = props;
  const classNames = {
    root: clsx(s["primary"], className),
  };
  return <button className={classNames.root} {...restProps} />;
};

export default Button;
