import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/3.webp";

const LastSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="mb-20 grid grid-cols-3 gap-10 items-center">
      <p className="col-span-2 mr-auto lg:my-9  font-jhost md:text-xl lg:text-2xl mt-8">
        {t("home.lastSectionDescription")}
      </p>
      {/* images */}
      <div className="mt-8 ">
        <img className="rounded-2xl  object-cover" src={img1} alt="" />

        {/* text */}
        <div className=" ">
          <p className="-jhost text-sm md:text-sm  text-[#0c331c] ">
            {" "}
            © Ana Serafim
          </p>
          <p className="font-jhost text-sm md:text-md   italic">
            {" "}
            {t("home.lastSectionCaption")}
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default LastSection;
