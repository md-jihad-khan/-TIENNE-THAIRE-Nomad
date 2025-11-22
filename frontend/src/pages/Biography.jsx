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
import caruselImg4 from "../assets/Biography/image2.jpg";
import caruselImg3 from "../assets/Biography/image3.jpg";
import caruselImg2 from "../assets/Biography/image4.jpg";
import caruselImg5 from "../assets/Biography/image5.jpg";
import caruselImg6 from "../assets/Biography/image6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

const images = [
  caruselImg1,
  caruselImg2,
  caruselImg3,
  caruselImg4,
  caruselImg5,
  caruselImg6,
];

// Define names for the slides corresponding to the images array
const slideNames = [
  "Right Arm",
  "Left Arm",
  "Chest",
  "Upper Back",
  "Side View",
  "Full Body (Nude)", // The last slide
];
// Define constants for better readability
const NUDE_SLIDE_INDEX = images.length - 1;

const Biography = () => {
  const { t } = useTranslation("global");

  // State for the carousel's active index and modal status
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change and intercept the nude slide
  const handleSlideChange = (swiper) => {
    const nextIndex = swiper.activeIndex;

    // Check if the user is attempting to slide to the nude image
    if (nextIndex === NUDE_SLIDE_INDEX && !hasConsented) {
      // Force Swiper to stay on the previous slide
      swiper.slideTo(NUDE_SLIDE_INDEX - 1);

      // Open the consent modal
      setIsModalOpen(true);
    } else {
      // Allow navigation and update the active index
      setActiveIndex(nextIndex);
    }
  };

  // Function to handle consent
  const handleConsent = (consent) => {
    setIsModalOpen(false);
    if (consent) {
      setHasConsented(true);
      // Now that consent is given, manually slide to the nude image
      swiperInstance.slideTo(NUDE_SLIDE_INDEX);
      setActiveIndex(NUDE_SLIDE_INDEX);
    }
    // If 'No' is clicked, the state remains false and the slide stays put
  };

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

      {/* <div className="font-jost  md:text-xl lg:text-2xl  ml-auto lg:w-10/12 ">
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
      </div> */}

      {/* img 3 */}
      <div className="grid grid-cols-2">
        <div className="">
          <img className="" src={img3} alt="" />
          <p className="font-jhost text-sm  md:text-lg italic mt-5">
            {" "}
            {t("biography.youthCaption")}
          </p>
          <div className="bg-primary mr-auto w-1/6 my-10 h-2"></div>
        </div>
        <div className="font-jost  md:text-xl lg:text-2xl  ">
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
      </div>

      {/* youth */}

      <div className="lg:w-4/5 mr-auto mt-5">
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

      {/* Home */}

      <div className="grid grid-cols-2 gap-5">
        {/* adult part 2 */}
        <div className=" mr-auto mt-20">
          <p className="font-jost  md:text-xl lg:text-2xl mb-5 font-bold">
            {t("biography.adultTitle3")}
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl mb-5 ">
            {t("biography.adultDescription3")}
          </p>
        </div>
        <div className="  ml-auto">
          <img className="mx-auto " src={img4} alt="" />
          <p className="font-jost  md:text-xl lg:text-2xl text-center my-5">
            {t("biography.homeTitle")}
          </p>
          <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
            {t("biography.homeCaption")}
          </p>
        </div>
      </div>
      <p className="font-jost  md:text-xl lg:text-2xl mb-5">
        {t("biography.homeDesc1")}
      </p>

      {/* litterature */}
      <div className="lg:w-3/4 mr-auto my-20">
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

      <div className="grid grid-cols-2 gap-10 mb-10 items-center">
        <div className="">
          <img className="rounded-2xl" src={img5} alt="" />
          <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
            {t("biography.cinemaCaption")}
          </p>
        </div>

        <p className=" font-jost  md:text-xl lg:text-2xl ">
          {t("biography.cinemaDesc")}
        </p>
      </div>

      {/* father section*/}

      <div className="grid grid-cols-2 gap-10 items-center">
        <p className="  font-jost  md:text-xl lg:text-2xl">
          {t("biography.bookDesc")}
        </p>
        <img className="ml-auto rounded-2xl " src={img6} alt="" />
      </div>

      <div className="mb-20 mt-5 ">
        <p className="font-jhost text-sm  md:text-lg   italic mb-10">
          {t("biography.caption2")}
        </p>

        <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl mt-20 mb-10">
          {t("biography.novelDesc")}
        </p>
      </div>

      {/*began writing */}
      <div className="my-10">
        <div className="grid items-center grid-cols-2 gap-10 ">
          <img src={img7} alt="" />
          <p className=" font-jost  md:text-xl lg:text-2xl">
            {t("biography.inspiration")}
          </p>
        </div>

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
      <div className="lg:w-4/5 mr-auto my-20">
        <h5 className=" font-jost  md:text-xl lg:text-2xl font-bold  mb-5">
          {t("biography.exitTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.exitDesc1")}
        </p>
      </div>
      <div className="my-20 ">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <img className="ml-auto  rounded-2xl" src={img8} alt="" />
            <p className="font-jhost text-sm  md:text-lg mt-5 text-right italic mb-10">
              {t("biography.caption3")}
            </p>
          </div>

          <p className="font-jost  md:text-xl lg:text-2xl">
            {t("biography.exitDesc2")}
          </p>
        </div>

        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl  mb-10">
          {t("biography.exitDesc3")}
        </p>
      </div>
      {/* Nomad Black sheep */}
      <div className="lg:w-3/4 ml-auto ">
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
      <div className="lg:w-2/3 mr-auto lg:my-20">
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
      <div className=" mx-auto px-4 my-10">
        <div className="flex flex-col md:flex-row gap-15 items-center">
          {/* Text Paragraph */}
          <p
            className={`md:w-1/2 font-jost md:text-xl lg:text-2xl leading-relaxed`}
          >
            {t("biography.endSection")}
          </p>

          {/* Swiper Container */}
          <div className="md:w-1/4 mx-auto">
            <Swiper
              onSwiper={setSwiperInstance} // Get the swiper instance
              onSlideChange={handleSlideChange} // Intercept slide changes
              spaceBetween={30}
              effect={"fade"}
              centeredSlides={true}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Navigation, Pagination]}
              className="rounded-2xl shadow-xl w-full swiper-custom-theme"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="w-full pb-[177.77%] relative">
                      <img
                        src={src}
                        alt={`Tattoo slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slide Name Display */}
            <p className="text-center font-bold text-lg mt-4 text-[#0c331c]">
              {slideNames[activeIndex]}
            </p>
          </div>
        </div>

        {/* Caption */}
        <p
          className={`font-jost text-sm md:text-lg mt-4 italic text-gray-700 text-center`}
        >
          {t("biography.TattooCaption")}
        </p>
      </div>

      {/* --- Nude Content Consent Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
            {/* Title: Use the new theme color for the warning text for contrast */}
            <h3 className="text-2xl font-bold text-[#0c331c] mb-4">
              ⚠️ Content Warning: Next Image
            </h3>

            <p className="text-gray-700 mb-6">
              The next image in the progression is a **full-body photograph**
              intended to display the entirety of the tattoo work. As this image
              contains **nudity**, we require your explicit consent to view it.
            </p>
            <p className="text-gray-700 mb-8 font-semibold">
              Do you wish to proceed and view the "Full Body (Nude)" photograph?
            </p>

            <div className="flex justify-center space-x-4">
              {/* YES Button: Use the new theme color for the primary action */}
              <button
                onClick={() => handleConsent(true)}
                className=" btn px-6 py-3 bg-[#0c331c] text-white font-semibold rounded-lg shadow-md  hover:bg-opacity-90 transition duration-300"
              >
                Yes, Show Me
              </button>

              {/* NO Button: Keep it neutral for the secondary action */}
              <button
                onClick={() => handleConsent(false)}
                className="px-6 py-3 border btn border-gray-300 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
              >
                No, Keep Me Here
              </button>
            </div>
          </div>
        </div>
      )}

      {/* desire for youth */}
      <div className="lg:w-2/3 mr-auto lg:mt-16">
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
      <div className="my-20 grid grid-cols-2 gap-10 ">
        <div>
          <img className=" rounded-2xl" src={img9} alt="" />
          <p className="font-jhost text-sm  md:text-lg mt-5 text-right italic mb-10">
            {t("biography.caption4")}
          </p>
        </div>
        <div>
          <p className=" font-jost  md:text-xl lg:text-2xl  mb-10">
            {t("biography.noraDesc1")}
          </p>
          <p className=" font-jost  md:text-xl lg:text-2xl  mb-10">
            {t("biography.noraDesc2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
