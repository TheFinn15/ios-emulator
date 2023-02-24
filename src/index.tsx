import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { PhoneContainer } from "./components/phone-container";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PhoneContainer />
  </React.StrictMode>
);

reportWebVitals();
