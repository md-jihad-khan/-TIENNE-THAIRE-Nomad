import React from "react";
import { useTranslation } from "react-i18next";
// --- Image Imports ---
import Modern1 from "../../assets/Eroticism/ModernDesires1.jpg";
import Modern2 from "../../assets/Eroticism/ModernDesires2.jpg";
import Modern3 from "../../assets/Eroticism/ModernDesires3.jpg";
import Tattoo1 from "../../assets/Eroticism/TATTOO1.jpg";
import Tattoo2 from "../../assets/Eroticism/TATTOO2.jpg";
import Tattoo3 from "../../assets/Eroticism/TATTOO3.jpg";
import Tattoo4 from "../../assets/Eroticism/TATTOO4.jpg";
import Tattoo5 from "../../assets/Eroticism/TATTOO5.jpg";
import Tattoo6 from "../../assets/Eroticism/TATTOO6.jpg";
import Gaze1 from "../../assets/Eroticism/Gaze1.jpg";
import Gaze2 from "../../assets/Eroticism/Gaze2.jpg";
import Gaze3 from "../../assets/Eroticism/Gaze3.jpg";
import Gaze4 from "../../assets/Eroticism/Gaze4.jpg";
import Chattest1 from "../../assets/Eroticism/CHATTES1.jpg";
import Chattest2 from "../../assets/Eroticism/CHATTES2.jpg";
import Legs1 from "../../assets/Eroticism/Legs1.jpg";
import Legs2 from "../../assets/Eroticism/Legs2.jpg";
import Legs3 from "../../assets/Eroticism/Legs3.jpg";
import Bars1 from "../../assets/Eroticism/BARS1.jpg";
import Bars2 from "../../assets/Eroticism/BARS2.jpg";
import Love1 from "../../assets/Eroticism/love1.jpg";
import Love2 from "../../assets/Eroticism/love2.jpg";
import Love3 from "../../assets/Eroticism/love3.jpg";
import Love4 from "../../assets/Eroticism/love4.jpg";
import Love5 from "../../assets/Eroticism/love5.jpg";
import State1 from "../../assets/Eroticism/State1.jpg";
import State2 from "../../assets/Eroticism/State2.jpg";
import State3 from "../../assets/Eroticism/State3.jpg";
import State4 from "../../assets/Eroticism/State4.jpg";
import State5 from "../../assets/Eroticism/State5.jpg";
import State6 from "../../assets/Eroticism/State6.jpg";
import State7 from "../../assets/Eroticism/State7.jpg";
import LazyLoadSection from "../../components/shared/LazyLoadSection";
import rainbow from "../../assets/Home/rainbow.png";
import photoCameraSticker from "../../assets/photo_camera_sticker.png";

// Helper function to render a gallery section
const ImageGallerySection = ({ title, images }) => (
  <div className="mb-20">
    <h3 className="text-2xl md:text-4xl font-eb-garamond text-[#0c331c]  pb-2 mb-8  tracking-wider">
      {title}
    </h3>
    {/* Modern Grid Layout: Responsive columns, gap, and aspect ratio for uniform images */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
      {images.map((imgObj, index) => (
        <LazyLoadSection key={index} minHeight="200px">
          <div className="  rounded-lg shadow-lg ">
            <img
              src={imgObj.src}
              alt={`${title}-${index + 1}`}
              className="w-full h-full object-cover transition duration-500 rounded-lg ease-in-out hover:scale-105"
              loading="lazy"
            />
            <p className="mt-2   text-center text-sm italic">{imgObj.credit}</p>
          </div>
        </LazyLoadSection>
      ))}
    </div>
  </div>
);

const Eroticism = () => {
  const { t } = useTranslation("global");

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

  // Grouping images based on their names (corresponding to the French phrases)
  const galleryData = [
    {
      title: t("photographyEroticism.sections.modernDesires"),
      images: [{ src: Modern1 }, { src: Modern2 }, { src: Modern3 }],
    },
    {
      title: t("photographyEroticism.sections.tattoo"),
      images: [
        { src: Tattoo1 },
        { src: Tattoo2 },
        { src: Tattoo3 },
        { src: Tattoo4 },
        { src: Tattoo5 },
        { src: Tattoo6 },
      ],
    },
    {
      title: t("photographyEroticism.sections.gaze"),
      images: [{ src: Gaze1 }, { src: Gaze2 }, { src: Gaze3 }, { src: Gaze4 }],
    },
    {
      title: t("photographyEroticism.sections.cats"),
      images: [{ src: Chattest1 }, { src: Chattest2 }],
    },
    {
      title: t("photographyEroticism.sections.legs"),
      images: [
        { src: Legs1, credit: " © Émile Savitry" },
        { src: Legs2 },
        { src: Legs3 },
      ],
    },
    {
      title: t("photographyEroticism.sections.bars"),
      images: [
        { src: Bars1, credit: "© Vee Speers" },
        { src: Bars2, credit: "@ Ruben Jacob Fees" },
      ],
    },
    {
      title: t("photographyEroticism.sections.loveThoughts"),
      images: [
        { src: Love1 },
        { src: Love2 },
        { src: Love3 },
        { src: Love4, credit: "© Jean-Pierre Limosin (Novo)" },
        { src: Love5 },
      ],
    },
    {
      title: t("photographyEroticism.sections.grace"),
      images: [
        { src: State1 },
        { src: State2, credit: "Credit: Divine Art" },
        { src: State3 },
        { src: State4 },
        { src: State5 },
        { src: State6 },
        { src: State7 },
      ],
    },
  ];

  return (
    <div className="my-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h2 className="relative inline-block font-eb-garamond text-5xl md:text-7xl text-primary mb-6">
          {t("photographyEroticism.title")}
          <img
            src={photoCameraSticker}
            className="absolute -top-10 -left-12 md:-left-16 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
        </h2>
        <p
          className="font-jost text-md md:text-xl md:text-center italic text-gray-600"
          dangerouslySetInnerHTML={renderHTML(t("photographyEroticism.quote1"))}
        />
        <p className="font-jost text-md md:text-xl md:text-center mt-3 italic text-gray-600 relative">
          <span
            dangerouslySetInnerHTML={renderHTML(
              t("photographyEroticism.quote2")
            )}
          />
          <img
            src={rainbow}
            className="absolute -bottom-8 -right-4 w-12 h-12 md:w-20 md:h-20 mix-blend-multiply opacity-80 pointer-events-none rotate-[20deg]"
            alt=""
          />
        </p>

        <p className="font-jost md:text-xl lg:text-2xl mt-8 text-center text-gray-800 leading-relaxed">
          {t("photographyEroticism.intro")}
        </p>
      </header>

      {/* Gallery Sections */}
      <main>
        {galleryData.map((section, index) => (
          <ImageGallerySection
            key={index}
            title={section.title}
            images={section.images}
          />
        ))}
      </main>
    </div>
  );
};

export default Eroticism;
