import React from "react";
import {creat}from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

import "@fontsource/jost";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
