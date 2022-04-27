import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WordleProvider from "./helper/WordleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>
);
