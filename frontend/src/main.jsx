import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "./Translations/en/global.json";
import global_fr from "./Translations/fr/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "fr", // default language
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router}></RouterProvider>
    </I18nextProvider>
  </StrictMode>
);
