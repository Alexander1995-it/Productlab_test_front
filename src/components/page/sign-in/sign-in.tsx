import React from "react";
import Button from "../../ui/button/button";
import { TextField } from "../../ui/text-field";
import s from "./sign-in.module.scss";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};
export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  console.log(errors);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.wrapperLogin}>
      <div className={s.loginBlock}>
        <div className={s.title}>Log in to your account</div>
        <div className={s.login}>
          <TextField
            placeholder="login"
            errorMessage={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: { value: emailRegex, message: "Invalid email" },
            })}
          />
        </div>
        <div className={s.password}>
          <TextField
            placeholder="password"
            errorMessage={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password has to be at least 5 characters long",
              },
            })}
            type={"password"}
          />
        </div>
        <div className={s.buttonSignIn}>
          <Button type="submit">Sign in</Button>
        </div>
      </div>
    </form>
  );
};
