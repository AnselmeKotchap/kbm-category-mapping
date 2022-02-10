import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";

const rootElement = document.getElementById("root");
const authenticated = (auth) => {
  return auth;
};

render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/kbm-category-mapping"
        element={
          authenticated(localStorage.getItem("Auth")) ? <App /> : <Login />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
