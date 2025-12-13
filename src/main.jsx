import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as atatus from "atatus-spa";

atatus.config("93a5259ce4244b73bf28b599c2c52f55").install();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
