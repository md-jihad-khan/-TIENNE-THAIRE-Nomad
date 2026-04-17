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
    <section className="mb-5 flex flex-col gap-20 md:flex-row items-center  relative">
      {/* carousel */}

      <div className=" w-1/4 mx-auto ">
        <img className=" rounded-2xl mx-auto " src={img1} alt="" />

        <div className="mt-2 text-center">
          <p className="font-jost text-[8px] md:text-[10px] opacity-40 hover:opacity-100 hover:text-xs transition-all duration-300 text-[#0c331c]">
            © Samuel Nicolaï
          </p>
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic">
            {t("home.heroCaption")}
          </p>
        </div>
      </div>

      <div className="w-full my-8 ">
        <p className=" ml-auto font-jost md:text-xl lg:text-2xl mb-5">
          S’échapper de la littérature, de sa prison schizophrénique (entre mon
          "Je" réel et mon "Je" imaginaire) est dès lors devenu une question de
          survie.
        </p>
        <p className=" ml-auto font-jost md:text-xl lg:text-2xl mb-5">
          J’ai d’abord trouvé un exutoire dans des écrits de type documentaire,
          y abordant quelques thèmes de prédilection tels que le cinéma, le
          rock, le sport…
        </p>
        <p className=" ml-auto font-jost md:text-xl lg:text-2xl">
          {t("home.carouselDescription2")}
        </p>
      </div>
    </section>
  );
};

export default CarouselSection;
