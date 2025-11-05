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
      className="relative w-22 h-7 rounded-full bg-primary flex items-center justify-between px-1 shadow-md cursor-pointer border border-primary/20"
      aria-label={isFrench ? "Switch to English" : "Passer en français"}
    >
      {/* Animated Flag */}
      <motion.img
        src={isFrench ? ukFlag : franceFlag}
        alt={isFrench ? "UK Flag" : "France Flag"}
        className="w-6 h-4 rounded-sm shadow absolute"
        initial={false}
        animate={{
          x: isFrench ? 0 : 56, // manually control animation
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Language Text (constant center) */}
      <span className="absolute left-1/2 -translate-x-1/2 text-white text-sm font-medium select-none">
        {i18n.language === "fr" ? "EN" : "FR"}
      </span>

      {/* Animated White Ball */}
      <motion.div
        className="absolute bg-white w-5 h-5 rounded-full shadow"
        initial={false}
        animate={{
          x: isFrench ? 56 : 0, // smooth transition, independent of layout
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </button>
  );
};

export default LanguageSwitcher;
