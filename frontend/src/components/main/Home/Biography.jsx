import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/about1.png";
import img2 from "../../../assets/Home/about2.png";
import img3 from "../../../assets/Home/about3.png";
import rainbow from "../../../assets/Home/rainbow.png";

const Biography = () => {
  const { t } = useTranslation("global");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5">
      {/* title section */}
      <div className="order-1 lg:order-2">
        <h3 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary text-right lg:text-left uppercase">
          {t("home.biographyTitle")}
        </h3>
      </div>

      {/* description section */}
      <div className="order-2 lg:order-1">
        <h4 className="font-jost w-10/12 ml-auto md:text-xl lg:text-2xl  lg:mt-30">
          {t("home.biographyDescription")}
        </h4>
      </div>
    </section>
  );
};

export default Biography;
