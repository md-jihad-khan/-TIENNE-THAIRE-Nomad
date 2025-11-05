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
    <section className="my-20 lg:w-3/4 ">
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
      <div className=" flex flex-col lg:flex-row justify-between">
        <p className=" font-jhost text-sm  md:text-lg italic">
          {t("home.carouselCaption")}
        </p>
        <p className="font-jhost text-sm md:text-lg  text-green-900 ">
          © Samuel Nicolaï
        </p>{" "}
      </div>

      <p className="lg:w-3/4  my-8 lg:ml-8 font-jhost md:text-xl lg:text-2xl">
        {t("home.carouselDescription")}
      </p>
    </section>
  );
};

export default CarouselSection;
