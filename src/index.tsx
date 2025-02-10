import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { sendToVercelAnalytics } from "./vitals";
import { BrowserRouter, Route, Routes } from "react-router";

const container = document.getElementById("root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

// If you want to enable Vercel analytics
sendToVercelAnalytics();
