import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import franceFlag from "../../assets/languageFlag/france.svg";
import ukFlag from "../../assets/languageFlag/uk.svg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation("global");

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const isFrench = i18n.language === "fr";

  return (
    <button
      onClick={handleChangeLanguage}
      className="relative w-22 h-7 rounded-full bg-primary flex items-center justify-between px-2 overflow-hidden shadow-md cursor-pointer border border-primary/20"
      aria-label={isFrench ? "Switch to English" : "Passer en français"}
    >
      {/* Animated Flag */}
      <motion.img
        layout
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        src={isFrench ? ukFlag : franceFlag}
        alt={isFrench ? "UK Flag" : "France Flag"}
        className="w-6 h-4 rounded-sm shadow absolute"
        style={{
          left: isFrench ? "8px" : "auto",
          right: isFrench ? "auto" : "8px",
        }}
      />

      {/* Language Text (constant center) */}
      <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm font-medium select-none">
        {i18n.language === "fr" ? "EN" : "FR"}
      </span>

      {/* Animated White Ball */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute bg-white w-5 h-5 rounded-full shadow"
        style={{
          right: isFrench ? "8px" : "auto",
          left: isFrench ? "auto" : "8px",
        }}
      ></motion.div>
    </button>
  );
};

export default LanguageSwitcher;
