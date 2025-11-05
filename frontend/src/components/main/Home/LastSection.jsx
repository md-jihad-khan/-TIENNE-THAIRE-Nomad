import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/3.webp";

const LastSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="my-20 lg:w-3/4 ml-auto">
      {/* images */}
      <div className="mt-8 aspect-video ">
        <img
          className="rounded-2xl aspect-video object-cover"
          src={img1}
          alt=""
        />
      </div>

      {/* text */}
      <div className=" flex flex-col-reverse lg:flex-row justify-between">
        <p className="font-jhost text-sm md:text-lg   italic">
          {" "}
          {t("home.lastSectionCaption")}
        </p>{" "}
        <p className="-jhost text-sm md:text-lg  text-[#0c331c] ">
          {" "}
          © Ana Serafim
        </p>
      </div>

      <p className="lg:w-3/4 lg:my-9 mx-auto font-jhost md:text-xl lg:text-2xl mt-8">
        {t("home.lastSectionDescription")}
      </p>
    </section>
  );
};

export default LastSection;
