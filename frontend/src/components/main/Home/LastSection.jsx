import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/3.webp";

const LastSection = () => {
  const { t } = useTranslation("global");
  return (
    <section className="my-20 w-3/4 ml-auto">
      {/* images */}
      <div className="mt-8 aspect-video ">
        <img
          className="rounded-2xl aspect-video object-cover"
          src={img1}
          alt=""
        />
      </div>

      {/* text */}
      <div className=" flex justify-between">
        <p className="font-jhost text-xl uppercase w-1/3 mr-auto font">
          {" "}
          {t("home.lastSectionCaption")}
        </p>{" "}
        <p className="-jhost text-xl  text-[#0c331c] ">© Samuel Nicolaï</p>
      </div>

      <p className="w-3/4 my-9 mx-auto font-jhost text-xl uppercase">
        {t("home.lastSectionDescription")}
      </p>
    </section>
  );
};

export default LastSection;
