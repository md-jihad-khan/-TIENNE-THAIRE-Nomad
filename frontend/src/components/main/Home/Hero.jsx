import img1 from "../../../assets/Home/2.webp";
import img2 from "../../../assets/Home/3.webp";
import rainbow from "../../../assets/Home/rainbow.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <section className=" py-10">
      <div className="relative">
        {/* <h1 className="font-eb-garamond text-3xl md:text-7xl md:text-center text-primary">
          {t("home.heroDescription")}
        </h1> */}

        <img
          className="absolute hidden lg:flex  left-1/3 -bottom-30"
          src={rainbow}
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mt-2">
        <h2 className="font-eb-garamond text-3xl md:text-5xl md:text-center text-primary  lg:w-2/3  ">
          {t("home.heroDescription")}
        </h2>

        <div className="md:w-3/4 lg:w-5/12 grid grid-cols-2 items-end gap-1">
          <div className="relative">
            <img
              className="relative -right-10 lg:hidden"
              src={rainbow}
              alt=""
            />
          </div>
          <img className=" rounded-2xl" src={img1} alt="" />

          <div className=" col-span-2">
            <p className="font-jhost text-lg text-right text-[#0c331c] ">
              © Samuel Nicolaï
            </p>{" "}
            <p className="w-full font-jhost text-lg italic">
              {t("home.heroCaption")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
