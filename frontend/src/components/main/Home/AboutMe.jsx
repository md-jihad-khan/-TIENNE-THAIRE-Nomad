import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/about1.png";
import img2 from "../../../assets/Home/about2.png";
import img3 from "../../../assets/Home/about3.png";
import rainbow from "../../../assets/Home/rainbow.png";

const AboutMe = () => {
  const { t } = useTranslation("global");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 gap-5">
      {/* img section */}
      <div className=" grid grid-cols-4">
        <div className="col-span-2 relative">
          <img className="relative -bottom-2 left-1/3" src={img2} alt="" />
        </div>
        <img src={rainbow} className="col-span-2" alt="" />
        <div className="col-span-2">
          <img src={img1} alt="" />
        </div>
        <img src={img3} alt="" />
      </div>
      {/* text section  */}
      <div>
        <h3 className="font-semibold font-eb-garamond text-7xl uppercase text-primary">
          {t("home.aboutTitle")}
        </h3>

        <h4 className="font-jost text-2xl   ml-auto leading-7 mt-10">
          {t("home.aboutDescription")}
        </h4>
      </div>
    </section>
  );
};

export default AboutMe;
