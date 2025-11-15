import rainbow from "../../../assets/Home/rainbow.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import img1 from "../../../assets/Home/0.webp";
import img2 from "../../../assets/Home/1.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Trans, useTranslation } from "react-i18next";
const images = [img1, img2];
const Hero = () => {
  const { t } = useTranslation("global");
  return (
    <section className=" py-10">
      <div className="relative">
        <h2 className="font-eb-garamond text-3xl md:text-5xl md:text-center text-primary  ">
          {t("home.heroDescription")}
        </h2>

        <img
          className="absolute hidden lg:flex w-20 left-0 -bottom-8"
          src={rainbow}
          alt=""
        />
      </div>
      <p className="font-jost text-xl md:text-xl md:text-center mt-10 italic">
        “Le temps d’apprendre à vivre, il est déjà trop tard”,{" "}
        <b>Louis Aragon</b>
      </p>
      <p className="font-jost  md:text-center md:text-xl lg:text-xl my-5 italic mb-10 ">
        “Dans la citation précédente, remplacez le verbe “vivre” par écrire,
        photographier, filmer, ou par tout autre verbe illustrant vos passions,
        et la même vérité vous reviendra à la gueule, comme un boomerang.”,
        <b>Étienne Éthaire</b>, toujours en quête du filtre de l’immortalité.
      </p>

      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center ">
        <h4 className="font-jost  ml-auto md:text-xl lg:text-2xl md:w-1/2 ">
          {t("home.biographyDescription")}
        </h4>
        <div className=" md:w-1/2 ">
          <div className="relative">
            <img
              className="relative -right-10 lg:hidden "
              src={rainbow}
              alt=""
            />
          </div>

          <div className="mt-8 aspect-video w-full">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade, Navigation, Pagination]}
              className="mySwiper rounded-2xl"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={src}
                      alt={`slide-${index}`}
                      className="absolute aspect-video inset-0 w-full  object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="">
            <p className="font-jhost text-sm text-right md:text-lg  text-green-900 ">
              © Samuel Nicolaï
            </p>{" "}
            <p className=" font-jhost text-sm  md:text-lg italic">
              {t("home.carouselCaption")}
            </p>
          </div>
          {/* <img className=" rounded-2xl" src={img1} alt="" /> */}

          {/* <div className=" col-span-2">
            <p className="font-jhost text-lg text-right text-[#0c331c] ">
              © Samuel Nicolaï
            </p>{" "}
            <p className="w-full font-jhost text-lg italic">
              {t("home.heroCaption")}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
