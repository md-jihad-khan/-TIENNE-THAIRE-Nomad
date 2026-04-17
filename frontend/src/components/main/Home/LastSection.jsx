import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/3.webp";

const LastSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className=" grid grid-cols-3 gap-10 items-center">
      {/* images */}
      <div className="mt-8 ">
        <img className="rounded-2xl  object-cover" src={img1} alt="" />

        <div className="mt-2 text-left">
          <p className="font-jost text-[8px] md:text-[10px] opacity-40 hover:opacity-100 hover:text-xs transition-all duration-300 text-[#0c331c]">
            © Ana Serafim
          </p>
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic">
            {t("home.lastSectionCaption")}
          </p>
        </div>
      </div>
      <p className="col-span-2 mr-auto lg:my-9  font-jost md:text-xl lg:text-2xl mt-8">
        {t("home.lastSectionDescription")}
      </p>
    </section>
  );
};

export default LastSection;
