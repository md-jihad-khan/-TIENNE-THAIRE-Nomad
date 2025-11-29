import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/Travel/image1.jpg";
import { useEffect, useRef } from "react";
import twemoji from "twemoji";
import { useTranslation } from "react-i18next";

const Travel = () => {
  const { t } = useTranslation("global");
  const travelData = t("TravelData", { returnObjects: true }) || [];
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return; // <-- 🛠 IMPORTANT FIX

    twemoji.parse(ref.current, {
      folder: "svg",
      ext: ".svg",
    });
  }, []);

  return (
    <div className="my-10 ">
      <h2 className="font-eb-garamond text-3xl md:text-6xl md:text-center text-primary  mb-10">
        Voyage
      </h2>
      <p className="font-jost text-md md:text-xl md:text-center mt-5 italic">
        "Comme tout ce qui compte dans la vie, un beau voyage est une œuvre
        d'art" <b>André Suarès in Le Voyage de Condottiere.</b>
      </p>
      <div>
        <img className=" w-1/2 mx-auto my-5" src={img1} alt="" />
        <p className="font-jhost text-sm w-2/3 md:text-lg mx-auto italic mt-5">
          J’aimerais épingler les pays visités. En attendant, je propose de
          faire un recensement photographique, pays par pays, dans l’ordre
          alphabétique
        </p>
      </div>

      {/* travel carousel */}
      <div ref={ref} className="grid grid-cols-4 gap-5 mt-20">
        {travelData.map((country, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-lg font-semibold mb-4 flex items-center  gap-2">
              {country.country}{" "}
              <span className=" w-8 h-8 mt-2">{country.flag}</span>
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

export default Travel;
