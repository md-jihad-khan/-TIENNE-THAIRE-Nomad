import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import img1 from "../../../assets/Home/2.webp";
import img4 from "../../../assets/Home/3.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";

const CarouselSection = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mb-20 flex flex-col md:flex-row items-center  relative">
      {/* carousel */}

      <div className=" w-1/2 ">
        <img className=" rounded-2xl mx-auto w-1/2" src={img1} alt="" />

        <div className=" ">
          <p className="font-jhost text-sm text-center text-[#0c331c] ">
            © Samuel Nicolaï
          </p>{" "}
          <p className="w-full absolute font-jhost text-lg italic">
            {t("home.heroCaption")}
          </p>
        </div>
      </div>

      <p className="w-1/2  my-8 ml-auto font-jhost md:text-xl lg:text-2xl">
        {t("home.carouselDescription")}
      </p>
    </section>
  );
};

export default CarouselSection;
