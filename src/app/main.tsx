import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../pages/App.tsx";
import { I18nProvider } from "@/shared/providers/i18n-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
