import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/sign-in">Sign-in</Link>
      <Link to="/photos">Photos</Link>
    </div>
  );
};
