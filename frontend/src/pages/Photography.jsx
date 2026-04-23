import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/Travel/image1.jpg";
import photoCameraSticker from "../assets/photo_camera_sticker.png";
import globeSticker from "../assets/globe_sticker.png";
import twemoji from "twemoji";
import { useTranslation } from "react-i18next";

const Photography = () => {
  const { t } = useTranslation("global");
  const travelData = t("TravelData", { returnObjects: true }) || [];

  // Helper for rendering HTML correctly (same as in Biography.jsx)
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  // Helper function to render flag emojis as Twemoji images
  const renderFlag = (flag) => {
    if (!flag) return "";
    try {
      // Handle both default and property-based export
      const parse = twemoji.parse || twemoji;
      return parse(flag, {
        folder: "svg",
        ext: ".svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
      });
    } catch (e) {
      return flag;
    }
  };

  return (
    <div className=" py-10">
      <div className="text-center mb-10">
        <h2 className="relative inline-block font-semibold font-eb-garamond text-3xl md:text-7xl text-primary uppercase">
          {t("photographyPage.title")}
          <img
            src={photoCameraSticker}
            className="absolute -top-6 -left-16 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
          <img
            src={globeSticker}
            className="absolute -top-10 -right-20 w-24 h-24 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12"
            alt=""
          />
        </h2>
      </div>
      <div className="font-jost  md:text-xl lg:text-2xl   lg:w-10/12 ">
        <p className="mb-5 ">
          {t("photographyPage.intro1")}
        </p>
        <p className="mb-5 ">
          {t("photographyPage.intro2")}
        </p>
        <p className="mb-5 ">
          {t("photographyPage.intro3")}
        </p>
        <p className="mb-5 ">
          {t("photographyPage.intro4")}
        </p>
      </div>

      <div className=" my-20 grid grid-cols-2 gap-10 items-center">
        <div>
          <img className="  " src={img1} alt="" />
          <p className="w-full  font-jhost text-lg italic">
            {t("photographyPage.sidebar")}
          </p>
        </div>

        <div className=" text-center ">
          <p className="mb-5 font-bold uppercase text-primary font-jhost md:text-xl lg:text-2xl">
            {t("photographyPage.citationsTitle")}
          </p>
          <p
            className="w-full  font-jhost text-lg italic md:text-xl lg:text-xl mb-3"
            dangerouslySetInnerHTML={renderHTML(t("photographyPage.quote1"))}
          />
          <p
            className="w-full  font-jhost text-lg italic md:text-xl lg:text-xl"
            dangerouslySetInnerHTML={renderHTML(t("photographyPage.quote2"))}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {travelData.map((country, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              {country.country} <span dangerouslySetInnerHTML={{ __html: renderFlag(country.flag) }} />
            </h2>

            <Swiper
              spaceBetween={20}
              slidesPerView={1} // Mobile default
              navigation
              modules={[Navigation, Pagination]}
              className=" w-full swiper-custom-theme"
            >
              {country.photos.map((photo, pIndex) => (
                <SwiperSlide key={pIndex}>
                  <div className="flex flex-col  overflow-hidden">
                    {/* Image */}
                    <img
                      src={photo.src}
                      alt={photo.caption || `${country.country} photo`}
                      className="w-full  object-cover aspect-video rounded-xl"
                    />

                    {/* Caption below image */}
                    {photo.caption && (
                      <p className="mt-3 text-center text-gray-700 text-[9px] font-medium ">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
