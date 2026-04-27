import React, { useState, useMemo, useEffect } from "react";
import cinemaData from "../cinema_data.json";
import { motion, AnimatePresence } from "motion/react";
import blackSheepSticker from "../assets/black_sheep_sticker.png";
import rainbowSticker from "../assets/rainbow_sticker.png";
import filmCameraSticker from "../assets/film_camera_sticker.png";
import filmReelSticker from "../assets/film_reel_sticker.png";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate, Link } from "react-router";

const categorySlugMap = {
  "cinema-muet": "Cinéma Muet",
  "cinema-americain": "Cinéma Américain",
  "canada-anglophone": "Canada anglophone",
  "canada-francophone": "Canada francophone",
  "cinema-francais": "Cinéma français",
  "cinema-latino-americain": "Cinéma latino-américain",
  "asie": "Asie",
  "oceanie": "Océanie",
  "animation": "ANIMATION",
};

const slugToCategory = (slug) => categorySlugMap[slug] || null;
const categoryToSlug = (category) =>
  Object.keys(categorySlugMap).find((key) => categorySlugMap[key] === category);

const Cinema = () => {
  const { t } = useTranslation("global");
  const { category: categorySlug } = useParams();
  const navigate = useNavigate();

  const categories = useMemo(() => {
    return [...new Set(cinemaData.map((m) => m.category))].filter(Boolean);
  }, []);

  const activeTab = useMemo(() => {
    return slugToCategory(categorySlug) || categories[0] || "";
  }, [categorySlug, categories]);

  useEffect(() => {
    if (!categorySlug && categories.length > 0) {
      const firstSlug = categoryToSlug(categories[0]);
      if (firstSlug) {
        navigate(`/cinema/${firstSlug}`, { replace: true });
      }
    }
  }, [categorySlug, categories, navigate]);

  const filteredMovies = useMemo(() => {
    return cinemaData.filter((movie) => movie.category === activeTab);
  }, [activeTab]);

  // Helper for rendering HTML correctly
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold italic">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<b>/g, '<strong class="font-bold italic">')
      .replace(/<\/b>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  // Function to decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="min-h-screen py-6 px-4 md:px-10 bg-white">
      <div className="md:text-center mb-10">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-6xl text-primary ">
          {t("cinema.title")}
          <img
            src={filmReelSticker}
            className="absolute -top-6 -left-18 md:-left-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
          <img
            src={filmCameraSticker}
            className="absolute -bottom-8 -right-18 md:-right-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12"
            alt=""
          />
        </h2>
      </div>

      <p
        className="font-jost text-md md:text-xl md:text-center mt-2 italic mb-10"
        dangerouslySetInnerHTML={renderHTML(t("cinema.quote"))}
      />
      <div className="text-center mb-12">
        <h3 className="font-eb-garamond text-2xl md:text-4xl text-primary ">
          {t(`cinema.categories.${activeTab}`, activeTab)}
        </h3>
        <div className="w-24 h-1 bg-[#0E7D3A] mx-auto mt-4 rounded-full "></div>
      </div>

      {/* Movies Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredMovies.map((movie, index) => (
            <motion.div
              layout
              key={`${movie.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group"
            >
              <div
                className="relative aspect-[2/3] shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 bg-[#161616] flex items-center justify-center rounded-[4px] border border-[#2a2a2a]"
              >
                {/* CSS Film Holes - Left */}
                <div
                  className="absolute left-[4px] sm:left-[6px] top-2 bottom-2 w-[4px] sm:w-[6px]"
                  style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 8px, #fff 8px, #fff 16px)' }}
                ></div>

                {/* CSS Film Holes - Right */}
                <div
                  className="absolute right-[4px] sm:right-[6px] top-2 bottom-2 w-[4px] sm:w-[6px]"
                  style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 8px, #fff 8px, #fff 16px)' }}
                ></div>

                <div className="relative w-[calc(100%-24px)] sm:w-[calc(100%-36px)] h-[calc(100%-12px)] overflow-hidden rounded-[2px] bg-gray-900 border border-[#222] p-1.5 sm:p-2">
                  {movie.image ? (
                    <img
                      src={`/cinema/images/${movie.image}`}
                      alt={decodeHTML(movie.title)}
                      className="h-full w-full object-cover rounded-[1px] transition-transform duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-50 text-gray-300">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                    </div>
                  )}

                  {/* Text Overlay on hover */}
                  <div className="absolute z-20 inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 text-white transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] uppercase tracking-widest mb-2 w-fit">
                      {t(`cinema.categories.${movie.category}`, movie.category)}
                    </span>
                    <p className="font-jost text-[10px] uppercase tracking-widest text-gray-300 mb-1 opacity-80">
                      {decodeHTML(movie.director)}
                    </p>
                    <p className="font-eb-garamond text-base leading-tight font-bold italic line-clamp-2">
                      {decodeHTML(movie.title)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-jost text-xs text-primary-light font-bold">
                        {movie.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-1 px-1">
                <h3 className="font-eb-garamond text-lg font-bold text-primary leading-snug group-hover:text-black transition-colors">
                  {decodeHTML(movie.title)}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="font-jost text-xs text-gray-400 uppercase tracking-tighter">
                    {decodeHTML(movie.director)}
                  </p>
                  <span className="text-[10px] font-bold text-gray-300 font-jost">{movie.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredMovies.length === 0 && (
        <div className="text-center py-20">
          <p className="font-jost text-xl text-gray-400">{t("cinema.noMovies")}</p>
        </div>
      )}

    </div>
  );
};

export default Cinema;
