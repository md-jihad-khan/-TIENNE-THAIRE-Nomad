import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/about1.png";
import img2 from "../../../assets/Home/about2.png";
import img3 from "../../../assets/Home/about3.png";
import rainbow from "../../../assets/Home/rainbow.png";

const Biography = () => {
  const { t } = useTranslation("global");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2  my-10 gap-5">
      {/* img section */}
      <div className=" ">
        <h4 className="font-jost text-2xl    leading-7 mt-30">
          {t("home.biographyDescription")}
        </h4>
      </div>
      {/* text section  */}
      <div>
        <h3 className="font-semibold font-eb-garamond text-7xl uppercase text-primary">
          {t("home.biographyTitle")}
        </h3>
      </div>
    </section>
  );
};

export default Biography;
