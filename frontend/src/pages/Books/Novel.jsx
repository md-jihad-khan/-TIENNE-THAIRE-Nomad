import { useTranslation } from "react-i18next";

const Novel = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary   uppercase mb-10">
        {t("books.novelTitle")}
      </h2>
      {/* LA 2003 */}
      <h4> {t("books.LLTitle")} </h4>
    </div>
  );
};

export default Novel;
