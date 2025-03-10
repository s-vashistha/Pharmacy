import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PharmacyProvider } from "../context/PharmacyProvider"; // Ensure correct path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PharmacyProvider> {/* ✅ Wrap your App in the provider */}
      <App />
    </PharmacyProvider>
  </React.StrictMode>
);
