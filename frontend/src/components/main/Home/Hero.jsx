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
import { Link } from "react-router";
import { FaArrowUpLong } from "react-icons/fa6";
const images = [img1, img2];
const Hero = () => {
  const { t } = useTranslation("global");

  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold italic">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<b>/g, '<strong class="font-bold italic">')
      .replace(/<\/b>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  return (
    <section className=" mt-6">
      <div className="relative md:text-center">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-5xl text-primary  ">
          {t("home.heroDescription")}

        </h2>



        <Link to={"/biography"} className="w-auto">
          <FaArrowUpLong className="ml-8 rotate-45 text-gray-200 " />
          <p className="z-10 text-gray-200 text-xs ml-3 font-jhost absolute  lg:flex w-20 left-0 ">
            {" "}
            Biography
          </p>
          <img
            className="absolute hidden lg:flex w-20 left-0 -bottom-8 -z-10"
            src={rainbow}
            alt=""
          />
        </Link>

      </div>
      <p
        className="font-jost text-xl md:text-xl md:text-center mt-6 italic"
        dangerouslySetInnerHTML={renderHTML(t("home.quoteAragon"))}
      />
      <p
        className="font-jost  md:text-center md:text-xl lg:text-xl my-4 italic mb-6 "
        dangerouslySetInnerHTML={renderHTML(t("home.quoteEtienne"))}
      />

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

          <div className="relative mt-4">
            <div className="absolute -right-14 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
              <p className="font-jost text-[8px] md:text-[10px] opacity-40 hover:opacity-100 hover:text-xs transition-all duration-300 text-green-900">
                © Samuel Nicolaï
              </p>
            </div>
            <div className="aspect-video w-full">
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
          </div>
          <div className="mt-2 text-right">
            <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic">
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
