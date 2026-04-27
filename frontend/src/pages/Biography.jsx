import { Trans, useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import img1 from "../assets/Biography/img1.png";
import img2 from "../assets/Biography/img2.png";
import img3 from "../assets/Biography/img3.png";
import img4 from "../assets/Biography/img4.png";
import img5 from "../assets/Biography/img5.png";
import img6 from "../assets/Biography/img6.png";
import img7 from "../assets/Biography/img7.png";
import img8 from "../assets/Biography/img10.jpg";
import img9 from "../assets/Biography/img11.jpg";
import sheepSticker from "../assets/black_sheep_sticker.png";
import caruselImg1 from "../assets/Biography/image1.jpg";
import caruselImg4 from "../assets/Biography/image2.jpg";
import caruselImg3 from "../assets/Biography/image3.jpg";
import caruselImg2 from "../assets/Biography/image4.jpg";
import caruselImg5 from "../assets/Biography/image5.jpg";
import caruselImg6 from "../assets/Biography/Leg tattoo 1.jpg";
import caruselImg7 from "../assets/Biography/Leg Tattoo 2.jpg";
import caruselImg8 from "../assets/Biography/Leg Tattoo 3.jpg";

import caruselImg9 from "../assets/Biography/image6.jpg";
import rainbow from "../assets/Home/rainbow.png";
import typewriterSticker from "../assets/typewriter_sticker.png";
import quillSticker from "../assets/quill_sticker.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";
const images = [
  caruselImg1,
  caruselImg2,
  caruselImg3,
  caruselImg4,
  caruselImg5,
  caruselImg6,
  caruselImg7,
  caruselImg8,
  caruselImg9,
];


// Define constants for better readability
const NUDE_SLIDE_INDEX = images.length - 1;

const Biography = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    document.title = `${t("nav.biography")} - Étienne Éthaire`;
  }, [t]);

  // Helper for rendering HTML correctly
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold italic">')
      .replace(/<\/bold>/g, '</strong>')
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, '</em>');
    return { __html: html };
  };

  // State for the carousel's active index and modal status
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Define names for the slides corresponding to the images array
  const slideNames = [
    t("biography.slides.rightArm"),
    t("biography.slides.leftArm"),
    t("biography.slides.sideView"),
    t("biography.slides.upperBack"),
    t("biography.slides.sideView"),
    t("biography.slides.leg"),
    t("biography.slides.leg"),
    t("biography.slides.leg"),
    t("biography.slides.fullBodyNude"),
  ];

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
    <div className="my-10 space-y-4 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="md:text-center mb-10">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-6xl text-primary">
          {t("nav.biography")}
          <img src={typewriterSticker} className="absolute -top-6 -left-18 md:-left-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12" alt="" />
          <img src={quillSticker} className="absolute -bottom-8 -right-18 md:-right-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12" alt="" />
        </h2>
      </div>

      <p className="font-jost text-md md:text-xl md:text-center mt-2 italic" dangerouslySetInnerHTML={renderHTML(t("biography.quote1"))} />
      <p className="font-jost md:text-center md:text-md lg:text-xl my-2 italic mb-6" dangerouslySetInnerHTML={renderHTML(t("biography.quote2"))} />

      {/* Intro section */}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/4 ml-6 mb-4">
          <div className="flex">
            <img src={img2} alt="" className="w-1/2 object-cover" />
            <img src={img1} alt="" className="w-1/2 object-cover" />
          </div>
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic mt-1 text-left" dangerouslySetInnerHTML={renderHTML(t("biography.caption1"))} />
          <div className="relative mt-5">
            <div className="bg-[#0E7D3A] ml-auto w-full h-2 rounded-full"></div>
            <img
              src={sheepSticker}
              className="absolute -top-10 -left-2 w-16 h-16 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -scale-x-100"
              alt=""
            />
          </div>
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.introDescription"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.introDescription2"))} />
      </div>

      {/* adolescence */}
      <p className="font-jost md:text-xl lg:text-2xl mb-6" dangerouslySetInnerHTML={renderHTML(t("biography.adolescence"))} />

      <div className="font-jost md:text-xl lg:text-2xl mb-6">
        <p className="mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.studies"))} />
        <p dangerouslySetInnerHTML={renderHTML(t("biography.salvage"))} />
      </div>

      <p className="font-jost md:text-xl lg:text-2xl mt-6 mb-4 font-bold italic flex items-center flex-wrap gap-3">
        <span dangerouslySetInnerHTML={renderHTML(t("biography.experiment"))}></span>
        <img src={rainbow} className="inline-block align-middle w-12 h-12 md:w-16 md:h-16 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-90 pointer-events-none" alt="" />
      </p>

      {/* cinema */}
      <p className="font-jost md:text-xl lg:text-2xl mb-6" dangerouslySetInnerHTML={renderHTML(t("biography.cinema"))} />

      {/* img 3 */}
      <div className="clearfix mb-6">
        <div className="float-left w-1/2 md:w-1/4 mr-6 mb-4 mt-2">
          <img className="w-full" src={img3} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-left mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.youthCaption"))} />
          <div className="bg-[#22c55e] mr-auto w-1/3 mt-2 h-1 rounded-full"></div>
        </div>
        <div className="font-jost md:text-xl lg:text-2xl">
          <p className="mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.litterature"))} />
          <p className="mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.cinema2"))} />
        </div>
      </div>

      {/* youth */}
      <div className="mb-6">
        <p className="font-jost md:text-xl lg:text-2xl mb-4 font-bold italic" dangerouslySetInnerHTML={renderHTML(t("biography.experimentYouthTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.experimentYouthDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.experimentYouthDesc2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.experimentYouthDesc3"))} />
      </div>

      {/* adult hood */}
      <div className="mb-6">
        <p className="font-jost md:text-xl lg:text-2xl mb-2 font-bold italic" dangerouslySetInnerHTML={renderHTML(t("biography.adultTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2 font-bold italic" dangerouslySetInnerHTML={renderHTML(t("biography.adultTitle2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.adultDescription1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.adultDescription2"))} />
      </div>

      {/* Home */}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/4 ml-6 mb-4 mt-2">
          <div className="flex flex-col w-fit max-w-full">
            <img className="rounded-2xl" src={img4} alt="" />
            <p className="font-jost md:text-lg lg:text-xl text-left font-bold mt-2 italic">
              {t("biography.homeTitle")}
            </p>
            <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-left mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.homeCaption"))} />
          </div>
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-2 font-bold italic" dangerouslySetInnerHTML={renderHTML(t("biography.adultTitle3"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.adultDescription3"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.homeDesc1"))} />
      </div>

      {/* litterature */}
      <div className="mb-6">
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic flex items-center flex-wrap gap-3">
          <span dangerouslySetInnerHTML={renderHTML(t("biography.litteratureTitle"))} />
          <img src={typewriterSticker} className="inline-block align-middle w-12 h-12 md:w-16 md:h-16 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none" alt="" />
        </h5>
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.litteratureDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.litteratureDesc2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.litteratureDesc3"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.litteratureDesc4"))} />
      </div>

      {/* cinema books */}
      <div className="clearfix mb-6">
        <div className="float-left w-1/2 md:w-1/4 mr-6 mb-4 mt-2">
          <img className="w-full rounded-2xl" src={img5} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-left mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.cinemaCaption"))} />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.cinemaDesc"))} />
      </div>

      {/* father section*/}
      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/4 ml-6 mb-4 mt-2">
          <img className="w-full rounded-2xl" src={img6} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 text-left italic mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.caption2"))} />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.bookDesc"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.novelDesc"))} />
      </div>

      {/*began writing */}
      <div className="clearfix mb-6">
        <div className="float-left w-1/2 md:w-1/4 mr-6 mb-4 mt-2">
          <img className="w-full rounded-2xl" src={img7} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-left mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.writingCaption"))} />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.inspiration"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.writingDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.writingDesc2"))} />
      </div>

      {/* exit leterature */}
      <div className="mb-6">
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic" dangerouslySetInnerHTML={renderHTML(t("biography.exitTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.exitDesc1"))} />
      </div>

      <div className="clearfix mb-6">
        <div className="float-right w-1/2 md:w-1/4 ml-6 mb-4 mt-2">
          <img className="w-full rounded-2xl" src={img8} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 text-left italic mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.caption3"))} />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.exitDesc2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.exitDesc3"))} />
      </div>

      {/* Nomad Black sheep */}
      <div className="mb-6">
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic flex items-center flex-wrap gap-3">
          <span dangerouslySetInnerHTML={renderHTML(t("biography.NBSTitle"))} />
          <img src={sheepSticker} className="inline-block align-middle w-12 h-12 md:w-16 md:h-16 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none" alt="" />
        </h5>
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.NBSDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.NBSDesc2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.NBSDesc3"))} />
      </div>

      {/* return Literature */}
      <div className="mb-6">
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic" dangerouslySetInnerHTML={renderHTML(t("biography.RLTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.RLDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.RLDesc2"))} />
      </div>

      {/* Tatto Image */}
      <div className="clearfix mb-6">
        <div className="float-right w-full md:w-1/4 ml-0 md:ml-6 mb-4">
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
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
          <p className="text-center font-bold text-lg mt-2 text-[#0c331c] italic">
            {slideNames[activeIndex]}
          </p>
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic text-left mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.TattooCaption"))} />
        </div>
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.endSection"))} />
      </div>

      {/* --- Nude Content Consent Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
            <h3 className="text-2xl font-bold text-[#0c331c] mb-4 italic">
              {t("biography.modalTitle")}
            </h3>
            <div className="text-gray-700 mb-6">
              <span dangerouslySetInnerHTML={renderHTML(t("biography.modalDescription"))} />
            </div>
            <p className="text-gray-700 mb-8 font-semibold">
              {t("biography.modalConsent")}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleConsent(true)}
                className="btn px-6 py-3 bg-[#0c331c] text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition duration-300"
              >
                {t("biography.modalYes")}
              </button>
              <button
                onClick={() => handleConsent(false)}
                className="px-6 py-3 border btn border-gray-300 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
              >
                {t("biography.modalNo")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* desire for youth */}
      <div className="mb-6">
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic" dangerouslySetInnerHTML={renderHTML(t("biography.desireTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.desireDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.desireDesc2"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-2" dangerouslySetInnerHTML={renderHTML(t("biography.desireDesc3"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.desireDesc4"))} />
      </div>

      {/* pure love & Nora */}
      <div className="clearfix mb-6">
        <div className="float-left w-1/2 md:w-1/4 mr-6 mb-4 mt-2">
          <img className="w-full rounded-2xl" src={img9} alt="" />
          <p className="font-jost text-[10px] md:text-xs opacity-50 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 text-left italic mt-1" dangerouslySetInnerHTML={renderHTML(t("biography.caption4"))} />
        </div>
        <h5 className="font-jost md:text-xl lg:text-2xl font-bold mb-2 italic" dangerouslySetInnerHTML={renderHTML(t("biography.loveTitle"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.loveDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.noraDesc1"))} />
        <p className="font-jost md:text-xl lg:text-2xl mb-4" dangerouslySetInnerHTML={renderHTML(t("biography.noraDesc2"))} />
      </div>
    </div>
  );
};

export default Biography;
