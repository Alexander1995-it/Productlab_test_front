import React from "react";
import { Header } from "./header";
import { Navigate, Outlet } from "react-router-dom";
import { useGetAuthMeQuery } from "../../services/auth/auth.service";
import s from "./layout.module.scss";

export const Layout = () => {
  const { isError, isLoading } = useGetAuthMeQuery();
  if (isLoading) return <div>Loading....</div>;
  return (
    <div>
      <Header />
      {isError ? (
        <Navigate to="/login" />
      ) : (
        <div className={s.container}>
          <Outlet />
        </div>
      )}
    </div>
  );
};
