import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DetailsContext } from "./DetailsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DetailsContext>
      <App />
    </DetailsContext>
  </React.StrictMode>
);
