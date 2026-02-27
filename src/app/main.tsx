import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { I18nProvider } from "@/shared/providers/i18n-provider.tsx";
import { RouterProvider } from "react-router/dom";
import { router } from "./rotuer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <RouterProvider router={router} />
    </I18nProvider>
  </StrictMode>,
);
