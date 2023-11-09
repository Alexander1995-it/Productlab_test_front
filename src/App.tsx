import React from "react";
import "./app.css";
import { Layout } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/page/sign-in";
import { Photos } from "./components/page/photos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/photos"} element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default App;
