import React from "react";
import "./app.css";
import { Layout } from "./components/layout/layout";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/page/sign-in";
import { Photos } from "./components/page/photos";
import { Provider } from "react-redux";
import { store } from "./services/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Photos />} />
        </Route>
        <Route path={"/login"} element={<SignIn />} />
      </Routes>
    </Provider>
  );
}

export default App;
