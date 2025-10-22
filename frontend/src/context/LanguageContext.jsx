import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage, default to 'fr'
    return localStorage.getItem("language") || "fr";
  });

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => {
      const newLang = prev === "en" ? "fr" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
