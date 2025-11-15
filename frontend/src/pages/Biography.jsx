import { Trans, useTranslation } from "react-i18next";
import img1 from "../assets/Biography/img1.png";
import img2 from "../assets/Biography/img2.png";
import img3 from "../assets/Biography/img3.png";
import img4 from "../assets/Biography/img4.png";
import img5 from "../assets/Biography/img5.png";
import img6 from "../assets/Biography/img6.png";
import img7 from "../assets/Biography/img7.png";
import img8 from "../assets/Biography/img10.jpg";
import img9 from "../assets/Biography/img11.jpg";
import caruselImg1 from "../assets/Biography/image1.jpg";
import caruselImg2 from "../assets/Biography/image2.jpg";
import caruselImg3 from "../assets/Biography/image3.jpg";
import caruselImg4 from "../assets/Biography/image4.jpg";
import caruselImg5 from "../assets/Biography/image5.jpg";
import caruselImg6 from "../assets/Biography/image6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = [
  caruselImg1,
  caruselImg2,
  caruselImg3,
  caruselImg4,
  caruselImg5,
  caruselImg6,
];
const Biography = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-10 ">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary text-center  uppercase mb-10">
        Biography
      </h2>

      <p className="font-jost text-md md:text-xl md:text-center mt-5 italic">
        “Le temps d’apprendre à vivre, il est déjà trop tard”,{" "}
        <b>Louis Aragon</b>
      </p>
      <p className="font-jost  md:text-center md:text-md lg:text-xl my-5 italic mb-10">
        « Ça, c'est la grande connerie des hommes, on se dit toujours qu'on a le
        temps, ... Et puis tout meurt. On se retrouve à suivre des cercueils. »
        <b> Philippe Claudel</b>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 ">
        <div className="">
          <p className="font-jost  md:text-xl lg:text-2xl ">
            {" "}
            <Trans
              i18nKey={t("biography.introDescription")}
              components={{
                bold: <strong className="font-bold" />,
                italic: <em className="italic" />,
              }}
            />
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
            {" "}
            <Trans
              i18nKey={t("biography.introDescription2")}
              components={{
                bold: <strong className="font-bold" />,
                italic: <em className="italic" />,
              }}
            />
          </p>
        </div>

        <div className="lg:w-1/2 lg:ml-auto ">
          <div className="grid grid-cols-2 md:flex justify-end items-center ">
            <img src={img2} alt="" />
            <img className="" src={img1} alt="" />
          </div>
        </div>
      </div>
      <p className="font-jhost text-sm w-1/2 md:text-lg ml-auto italic mt-5">
        {" "}
        {t("biography.caption1")}
      </p>

      <div className="bg-primary ml-auto w-1/6 mt-3 h-2"></div>

      {/* adolescence */}
      <p className="font-jost  md:text-xl lg:text-2xl lg:w-1/3 my-20 leading-7">
        {" "}
        <Trans
          i18nKey={t("biography.adolescence")}
          components={{
            bold: <strong className="font-bold" />,
          }}
        />
      </p>

      <div className="font-jost  md:text-xl lg:text-2xl  ml-auto lg:w-10/12 ">
        <p className="mb-5">
          <Trans
            i18nKey={t("biography.studies")}
            components={{
              bold: <strong className="font-bold" />,
            }}
          />
        </p>
        <p>{t("biography.salvage")}</p>
      </div>
      <p className="font-jost  md:text-xl lg:text-2xl lg:w-1/3 mt-20 mb-10 font-bold leading-7">
        {t("biography.experiment")}
      </p>

      {/* cinema */}
      <p className="font-jost  md:text-xl lg:text-2xl lg:w-1/3 mb-20 leading-7">
        {" "}
        <Trans
          i18nKey={t("biography.cinema")}
          components={{
            bold: <strong className="font-bold" />,
          }}
        />
      </p>

      <div className="font-jost  md:text-xl lg:text-2xl  ml-auto lg:w-10/12 ">
        <p className="mb-5">
          <Trans
            i18nKey={t("biography.litterature")}
            components={{
              bold: <strong className="font-bold" />,
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey={t("biography.cinema2")}
            components={{
              bold: <strong className="font-bold" />,
            }}
          />
        </p>
      </div>

      {/* youth */}
      <div className="lg:w-4/5 mr-auto mt-20">
        <img className="" src={img3} alt="" />
        <p className="font-jhost text-sm  md:text-lg italic mt-5">
          {" "}
          {t("biography.youthCaption")}
        </p>
        <div className="bg-primary mr-auto w-1/6 my-10 h-2"></div>

        <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
          {t("biography.experimentYouthTitle")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc2")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc3")}
        </p>
      </div>
      {/* adult hood */}
      <div className="lg:w-4/5 ml-auto mt-30">
        <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
          {t("biography.adultTitle")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
          {t("biography.adultTitle2")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.adultDescription1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.adultDescription2")}
        </p>
      </div>

      {/* adult part 2 */}
      <div className="lg:w-4/5 mr-auto mt-20">
        <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
          {t("biography.adultTitle3")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5 ">
          {t("biography.adultDescription3")}
        </p>
      </div>

      {/* Home */}

      <div className="lg:w-3/5 my-20 ml-auto">
        <img className="ml-auto " src={img4} alt="" />
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeTitle")}
        </p>
        <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
          {t("biography.homeCaption")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc1")}
        </p>
      </div>
      {/* litterature */}
      <div className="lg:w-3/5 mr-auto my-30">
        <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
          {t("biography.litteratureTitle")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.litteratureDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.litteratureDesc2")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.litteratureDesc3")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.litteratureDesc4")}
        </p>
      </div>
      {/* cinema books */}
      <div className="lg:w-3/5 mr-auto">
        <img className="" src={img5} alt="" />
        <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
          {t("biography.cinemaCaption")}
        </p>
      </div>

      <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl my-20">
        {t("biography.cinemaDesc")}
      </p>
      <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl">
        {t("biography.bookDesc")}
      </p>

      {/* father section*/}

      <div className="my-32 ">
        <img className="ml-auto rounded-2xl " src={img6} alt="" />
        <p className="font-jhost text-sm  md:text-lg   italic mb-10">
          {t("biography.caption2")}
        </p>

        <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl mt-20 mb-10">
          {t("biography.novelDesc")}
        </p>
        <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl">
          {t("biography.inspiration")}
        </p>
      </div>

      {/*began writing */}
      <div className="my-32">
        <img src={img7} alt="" />
        <p className="font-jhost text-sm  md:text-lg mt-5  italic mb-10">
          {t("biography.writingCaption")}
        </p>

        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl mt-20 mb-10">
          {t("biography.writingDesc1")}
        </p>
        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl">
          {t("biography.writingDesc2")}
        </p>
      </div>

      {/* exit leterature */}
      <div className="lg:w-4/5 mr-auto my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold  mb-5">
          {t("biography.exitTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.exitDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl">
          {t("biography.exitDesc2")}
        </p>
      </div>
      <div className="my-32 ">
        <img className="ml-auto w-2/3 rounded-2xl" src={img8} alt="" />
        <p className="font-jhost text-sm  md:text-lg mt-5 text-right italic mb-10">
          {t("biography.caption3")}
        </p>

        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl  mb-10">
          {t("biography.exitDesc3")}
        </p>
      </div>
      {/* Nomad Black sheep */}
      <div className="lg:w-2/3 ml-auto my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold  mb-5">
          {t("biography.NBSTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.NBSDesc1")}
        </p>
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.NBSDesc2")}
        </p>
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.NBSDesc3")}
        </p>
      </div>
      {/* return Literature */}
      <div className="lg:w-2/3 mr-auto lg:my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold mb-5">
          {t("biography.RLTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.RLDesc1")}
        </p>
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.RLDesc2")}
        </p>
      </div>
      {/* Tatto Image */}
      <div className=" gap-6 items-center flex">
        <p className="lg:w-4/5  font-jost  md:text-xl lg:text-2xl  ">
          {" "}
          {t("biography.endSection")}
        </p>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper rounded-2xl w-1/4"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px] overflow-hidden rounded-2xl">
                {/* 👇 Full width + full height + crop like Instagram */}
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="font-jhost text-sm  md:text-lg mt-5  italic mb-10">
        {t("biography.TattooCaption")}
      </p>
      {/* desire for youth */}
      <div className="lg:w-2/3 mr-auto lg:mt-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold mb-5">
          {t("biography.desireTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.desireDesc1")}
        </p>
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.desireDesc2")}
        </p>
      </div>
      <div className="lg:w-2/3 ml-auto mb-20">
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.desireDesc3")}
        </p>
        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.desireDesc4")}
        </p>
      </div>

      {/* pure love */}
      <div className="lg:w-2/3 mr-auto lg:mt-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold mb-5">
          {t("biography.loveTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.loveDesc1")}
        </p>
      </div>
      {/* Nora */}
      <div className="my-32 ">
        <img className="ml-auto w-2/3 rounded-2xl" src={img9} alt="" />
        <p className="font-jhost text-sm  md:text-lg mt-5 text-right italic mb-10">
          {t("biography.caption4")}
        </p>

        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl  mb-10">
          {t("biography.noraDesc1")}
        </p>
        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl  mb-10">
          {t("biography.noraDesc2")}
        </p>
      </div>
    </div>
  );
};

export default Biography;
