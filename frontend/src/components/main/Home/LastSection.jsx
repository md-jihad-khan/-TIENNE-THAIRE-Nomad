import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/3.webp";

const LastSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="my-20 ">
      <p className=" lg:my-9 mx-auto font-jhost md:text-xl lg:text-2xl mt-8">
        {t("home.lastSectionDescription")}
      </p>
      {/* images */}
      <div className="mt-8 lg:w-10/12 mx-auto ">
        <img className="rounded-2xl  object-cover" src={img1} alt="" />

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
      </div>
    </section>
  );
};

export default LastSection;
