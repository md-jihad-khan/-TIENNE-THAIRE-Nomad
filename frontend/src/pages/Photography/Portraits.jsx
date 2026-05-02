import React from "react";
import { useTranslation } from "react-i18next";
import portrait1 from "../../assets/Portraits/portrait1.jpg";
import portrait2 from "../../assets/Portraits/portrait2.jpg";
import portrait3 from "../../assets/Portraits/portrait3.jpg";
import portrait4 from "../../assets/Portraits/portrait4.jpg";
import portrait5 from "../../assets/Portraits/portrait5.jpg";
import LazyLoadSection from "../../components/shared/LazyLoadSection";
import photoCameraSticker from "../../assets/photo_camera_sticker.png";

const portraits = [portrait1, portrait2, portrait3, portrait4, portrait5];

const Portraits = () => {
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

  return (
    <div className="my-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h2 className="relative inline-block font-eb-garamond text-5xl md:text-7xl text-primary mb-6">
          {t("photographyPortraits.title")}
          <img
            src={photoCameraSticker}
            className="absolute -top-10 -left-12 md:-left-16 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
        </h2>
        <p
          className="font-jost text-md md:text-xl md:text-center italic"
          dangerouslySetInnerHTML={renderHTML(
            t("photographyPortraits.quote1")
          )}
        />
        <p
          className="font-jost text-md md:text-xl md:text-center mt-3 italic"
          dangerouslySetInnerHTML={renderHTML(
            t("photographyPortraits.quote2")
          )}
        />
      </header>

      {/* Gallery Grid */}
      <main>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
          {portraits.map((src, index) => (
            <LazyLoadSection key={index} minHeight="200px">
              <div className="rounded-lg shadow-lg overflow-hidden aspect-[3/4]">
                <img
                  src={src}
                  alt={`Portrait ${index + 1}`}
                  className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            </LazyLoadSection>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portraits;
