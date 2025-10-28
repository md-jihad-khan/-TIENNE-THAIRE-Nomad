import { useTranslation } from "react-i18next";

const Documentary = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 ">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary   uppercase mb-10">
        {t("books.novelTitle")}
      </h2>
    </div>
  );
};

export default Documentary;
