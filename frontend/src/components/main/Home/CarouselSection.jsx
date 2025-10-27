import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import img1 from "../../../assets/Home/0.webp";
import img2 from "../../../assets/Home/1.webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useTranslation } from "react-i18next";
const images = [img1, img2];

const CarouselSection = () => {
  const { t } = useTranslation("global");

  return (
    <section className="my-20 w-3/4">
      {/* carousel */}

      <div className="mt-8 aspect-video ">
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
      <div className=" flex justify-between">
        <p className="font-jhost text-xl text-[#0c331c] ">© Samuel Nicolaï</p>{" "}
        <p className="w-1/3 ml-auto font-jhost text-xl italic">
          {t("home.carouselCaption")}
        </p>
      </div>

      <p className="w-3/4 my-9 ml-8 font-jhost text-xl ">
        {t("home.carouselDescription")}
      </p>
    </section>
  );
};

export default CarouselSection;
