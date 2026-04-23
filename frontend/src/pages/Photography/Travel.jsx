import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../assets/Travel/image1.jpg";
import twemoji from "twemoji";
import { useTranslation } from "react-i18next";
import LazyLoadSection from "../../components/shared/LazyLoadSection";
import rainbow from "../../assets/Home/rainbow.png";
import globeSticker from "../../assets/globe_sticker.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Travel = () => {
  const { t } = useTranslation("global");
  const travelData = t("TravelData", { returnObjects: true }) || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPhotos, setModalPhotos] = useState([]);
  const [initialSlide, setInitialSlide] = useState(0);
  const [currentCountry, setCurrentCountry] = useState("");
  const [currentFlag, setCurrentFlag] = useState("");

  const openModal = (photos, index, countryName, flag) => {
    setModalPhotos(photos);
    setInitialSlide(index);
    setCurrentCountry(countryName);
    setCurrentFlag(flag);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // Hide navbar if present
    const navbar = document.querySelector(".fixed.w-full.z-\\[1001\\]");
    if (navbar) navbar.style.display = "none";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";

    // Show navbar again
    const navbar = document.querySelector(".fixed.w-full.z-\\[1001\\]");
    if (navbar) navbar.style.display = "block";
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      // Ensure navbar is restored if component unmounts
      const navbar = document.querySelector(".fixed.w-full.z-\\[1001\\]");
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  // Helper function to render flag emojis as Twemoji images
  const renderFlag = (flag) => {
    if (!flag) return "";
    try {
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

  // Helper for rendering HTML correctly
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  return (
    <div className="my-10 mt-20 px-4 md:px-0">
      <div className="md:text-center mb-10">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-6xl text-primary">
          {t("photographyTravel.title")}
          <img
            src={globeSticker}
            className="absolute -top-10 -right-12 md:-right-16 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12"
            alt=""
          />
        </h2>
      </div>
      <p
        className="font-jost text-md md:text-xl md:text-center mt-5 italic relative"
        dangerouslySetInnerHTML={renderHTML(t("photographyTravel.quote"))}
      />


      <div className="flex gap-2 mt-10 items-center justify-center lg:w-10/12 mx-auto">
        <p className="font-jhost text-sm  md:text-lg mx-auto italic ">
          {t("photographyTravel.intro")}
        </p>
        <div>
          <img className="" src={img1} alt="" />
        </div>
      </div>

      {/* travel carousel */}
      <div className="grid grid-cols-4 gap-5 mt-20">
        {travelData.map((country, index) => (
          <LazyLoadSection key={index} minHeight="300px">
            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {country.country} <span dangerouslySetInnerHTML={{ __html: renderFlag(country.flag) }} />
              </h2>

              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                modules={[Navigation, Pagination]}
                className="w-full swiper-custom-theme"
              >
                {country.photos.map((photo, pIndex) => (
                  <SwiperSlide key={pIndex}>
                    <div className="flex flex-col overflow-hidden">
                      {/* Image */}
                      <img
                        src={photo.src}
                        alt={photo.caption || `${country.country} photo`}
                        className="w-full object-cover aspect-video rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                        loading="lazy"
                        onClick={() => openModal(country.photos, pIndex, country.country, country.flag)}
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
          </LazyLoadSection>
        ))}
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-white flex flex-col items-center backdrop-blur-xl"
          >
            {/* Close Button - Extreme Corner */}
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-primary/40 hover:text-primary transition-all cursor-pointer z-[10010] p-2 hover:bg-gray-100 rounded-full"
              title="Close Gallery"
            >
              <IoClose size={42} />
            </button>

            {/* Header Info - Simplified and Centered at top */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-[10005] pointer-events-none text-center w-full">
              <h3 className="font-eb-garamond text-2xl md:text-4xl font-bold text-primary uppercase tracking-[0.2em] flex items-center justify-center gap-4">
                {currentCountry}
                <span dangerouslySetInnerHTML={{ __html: renderFlag(currentFlag) }} className="w-8 h-8 md:w-10 md:h-10" />
              </h3>
            </div>

            {/* Gallery Wrapper - Accounting for Navbar Height (h-16) + breathing room */}
            <div className="w-full h-full flex flex-col items-center justify-center pt-32 pb-10">
              <Swiper
                initialSlide={initialSlide}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                modules={[Navigation, Pagination]}
                className="w-full h-full modal-swiper shadow-none"
              >
                {modalPhotos.map((photo, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center h-full px-4 md:px-24 select-none">
                      {/* Image Container with max height constraint to leave space for caption */}
                      <div className="flex-1 w-full flex items-center justify-center min-h-0">
                        <img
                          src={photo.src}
                          alt={photo.caption || "Gallery"}
                          className="max-w-full max-h-full object-contain shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm"
                        />
                      </div>

                      {/* Caption - Now below the photo */}
                      <AnimatePresence>
                        {photo.caption && (
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="w-full py-6 flex justify-center"
                          >
                            <p className="text-primary font-jost text-sm md:text-lg bg-white/90 px-8 py-3 rounded-full shadow-lg border border-gray-100 backdrop-blur-md max-w-[90vw] text-center">
                              {photo.caption}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Travel;
