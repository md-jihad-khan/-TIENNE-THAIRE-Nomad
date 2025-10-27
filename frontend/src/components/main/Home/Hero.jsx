import img1 from "../../../assets/Home/2.webp";
import img2 from "../../../assets/Home/3.webp";
import rainbow from "../../../assets/Home/rainbow.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <section className=" py-10">
      <div className="relative">
        <h1 className="font-eb-garamond text-2xl lg:text-7xl lg:text-center text-primary">
          ÉTIENNE ÉTHAIRE
        </h1>

        <img
          className="absolute hidden md:flex  left-1/3 -bottom-30"
          src={rainbow}
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:items-center mt-2">
        <h2 className="font-jhost text-base lg:text-3xl  lg:w-1/2 w-2/3 ">
          {t("home.heroDescription")}
        </h2>

        <div className=" lg:w-5/12 grid grid-cols-2 items-end gap-1">
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
