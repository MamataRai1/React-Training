import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ fixed here
import "./index.css";
import AppRoutes from "./routes";

const root = createRoot(document.getElementById("namuna"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
