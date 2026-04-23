import { useTranslation } from "react-i18next";
import img1 from "../assets/NBS/image1.jpg";
import img2 from "../assets/NBS/image2.jpg";
import img3 from "../assets/NBS/image3.png";
import img4 from "../assets/NBS/image4.jpg";
import img5 from "../assets/NBS/image5.jpg";
import sheepSticker from "../assets/black_sheep_sticker.png";
import globeSticker from "../assets/globe_sticker.png";
import filmReelSticker from "../assets/film_reel_sticker.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";
import rainbow from "../assets/Home/rainbow.png";

const images = [img4, img3];

const NBS = () => {
  const { t } = useTranslation("global");

  // Helper for rendering HTML correctly
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold italic">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  return (
    <div className="my-10 px-4 max-w-6xl mx-auto">
      <div className="w-full text-center mb-10">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-5xl text-primary">
          {t("nbsPage.title")}
          <img
            src={sheepSticker}
            className="absolute -top-10 -left-12 w-12 h-12 md:w-16 md:h-16 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none"
            alt=""
          />

          <img
            src={filmReelSticker}
            className="absolute -bottom-8 -right-20 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
        </h2>
      </div>

      <p
        className="font-jost text-md md:text-xl md:text-center mt-5 mb-5 italic"
        dangerouslySetInnerHTML={renderHTML(t("nbsPage.quote1"))}
      />
      <p
        className="font-jost md:text-center md:text-md lg:text-xl my-5 italic"
        dangerouslySetInnerHTML={renderHTML(t("nbsPage.quote2"))}
      />
      <p
        className="font-jost md:text-center md:text-md lg:text-xl italic mb-10"
        dangerouslySetInnerHTML={renderHTML(t("nbsPage.quote3"))}
      />

      {/* Part 1 */}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/3 lg:w-1/4 ml-6 mb-4 mt-2">
          <div className="aspect-square">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySwiper rounded-2xl w-full h-full shadow-xl"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={src}
                      alt={`slide-${index}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p
            className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-center mt-2"
            dangerouslySetInnerHTML={renderHTML(t("nbsPage.caption1"))}
          />
        </div>

        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p1")}
        </p>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p2")}
        </p>
      </div>

      {/* Part 2 */}
      <div className="clearfix mb-6 relative">
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p3")}
          <img
            src={rainbow}
            className="inline-block align-middle ml-4 w-12 h-12 md:w-16 md:h-16 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-80 pointer-events-none -rotate-12"
            alt=""
          />
        </p>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p4")}
        </p>
      </div>

      {/* Part 3 */}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/3 lg:w-1/4 ml-6 mb-4 mt-2">
          <img className="w-full rounded-2xl shadow-xl" src={img1} alt="" />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p5")}
        </p>
      </div>

      <div className="clearfix mb-6">
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p6")}
        </p>
      </div>

      {/* Part 4 */}
      <div className="clearfix mb-6">
        <div className="float-left w-1/2 md:w-1/3 lg:w-1/4 mr-6 mb-4 mt-2">
          <img className="w-full rounded-2xl shadow-xl" src={img2} alt="" />
          <p
            className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-center mt-2"
            dangerouslySetInnerHTML={renderHTML(t("nbsPage.caption2"))}
          />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p7")}
        </p>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p8")}
        </p>
      </div>

      <div className="clearfix mb-6">
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p9")}
        </p>
      </div>

      {/* Part 5 */}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/3 lg:w-1/4 ml-6 mb-4 mt-2">
          <img className="w-full rounded-2xl shadow-xl" src={img5} alt="" />
          <p
            className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic w-full mt-2"
            dangerouslySetInnerHTML={renderHTML(t("nbsPage.caption3"))}
          />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("nbsPage.p10")}
        </p>
      </div>
    </div>
  );
};

export default NBS;
