import React from "react";
import Button from "../../ui/button/button";
import { TextField } from "../../ui/text-field";
import s from "./sign-in.module.scss";
import { useForm } from "react-hook-form";
import { useGetAuthMutation } from "../../../services/auth/auth.service";
import { saveState } from "../../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};
export const SignIn = () => {
  const [login, result] = useGetAuthMutation();
  let errorServer401 = result.error ? "Incorrect login or password" : "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    return login(data)
      .unwrap()
      .then((res) => {
        saveState("token", res.token);
        navigate("/");
      })
      .catch((error) => console.log(error));
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
            errorMessage={errors.email?.message || errorServer401}
            {...register("email", {
              required: "Email is required",
              pattern: { value: emailRegex, message: "Invalid email" },
            })}
          />
        </div>
        <div className={s.password}>
          <TextField
            placeholder="password"
            errorMessage={errors.password?.message || errorServer401}
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
