import React from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import { useGetAuthMeQuery } from "../../../services/auth/auth.service";

export const Header = () => {
  const { data } = useGetAuthMeQuery();

  return (
    <div className={s.headerBlock}>
      <div className={s.container}>
        <div className={s.wrapperHeader}>
          {data ? <div>{data.email}</div> : <Link to="/login">Sign-in</Link>}
        </div>
      </div>
    </div>
  );
};
