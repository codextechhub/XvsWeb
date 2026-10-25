import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Built pages arrive already drawn (scripts/prerender.mjs), so React takes them over
// without redrawing. While developing the page starts empty and React draws it.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
