import React from "react";
import {createRoot}from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import App from "./App.jsx";

import "@fontsource/jost";
import "./index.css";

// const root = createRoot(document.getElementById("root"));
// root.render(
 
//   <BrowserRouter>
//     <React.StrictMode basename="/wine-shop/">
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>

// );
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/wine-shop/"> {/* Move basename here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);