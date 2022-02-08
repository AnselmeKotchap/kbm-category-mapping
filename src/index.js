import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
// import store from "./app/store";
// import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const authenticated = (auth) => {
  return auth;
};

render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <Routes>
      <Route
        path="/"
        element={
          authenticated(localStorage.getItem("Auth")) ? <App /> : <Login />
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
    </Routes>
    {/* </Provider> */}
  </BrowserRouter>,
  rootElement
);
