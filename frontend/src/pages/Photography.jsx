import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import travelData from "../data/travelData.json";

const Photography = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Travel Photography
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {travelData.map((country, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">{country.country}</h2>

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
                      <p className="mt-3 text-center text-gray-700 text-sm font-medium ">
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
