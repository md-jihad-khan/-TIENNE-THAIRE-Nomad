import React, { useState, useMemo } from "react";
import cinemaData from "../cinema_data.json";
import { motion, AnimatePresence } from "motion/react";
import blackSheepSticker from "../assets/black_sheep_sticker.png";
import rainbowSticker from "../assets/rainbow_sticker.png";


const Cinema = () => {
  const categories = useMemo(() => {
    return [...new Set(cinemaData.map((m) => m.category))].filter(Boolean);
  }, []);

  const [activeTab, setActiveTab] = useState(categories[0] || "");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = useMemo(() => {
    return cinemaData.filter((movie) => {
      const matchesTab = movie.category === activeTab;
      const matchesSearch =
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (movie.director && movie.director.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Function to decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="min-h-screen py-6 px-4 md:px-10 bg-white">
      <header className="mb-6 text-center md:text-left border-b border-gray-100 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-eb-garamond text-4xl md:text-6xl text-primary mb-4 tracking-tight"
        >
          Ma Bibliothèque Cinéma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-jost text-lg md:text-xl text-gray-400 italic max-w-3xl leading-relaxed"
        >
          "Le cinéma, c'est l'écriture moderne dont l'encre est la lumière." — Jean Cocteau
        </motion.p>
      </header>

      {/* Tabs and Search Section */}
      <div className="sticky top-16 z-20 bg-white/80 backdrop-blur-md py-6 mb-12 border-b border-gray-100 px-2 md:px-0">
        {/* Tabs - One Line */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 pb-4 mb-4">
          <div className="flex gap-4 md:gap-6 min-w-max px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full font-jost text-sm font-medium transition-all duration-300 ${activeTab === cat
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-50 text-gray-400 hover:bg-gray-100 border border-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar - Below Tabs */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-md group">
            <input
              type="text"
              placeholder="Rechercher un film, réalisateur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-jost transition-all shadow-sm group-hover:shadow-md bg-white"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
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
                      {movie.category}
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
          <p className="font-jost text-xl text-gray-400">Aucun film trouvé pour cette recherche.</p>
        </div>
      )}

      <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
        <p className="font-jost text-sm text-gray-400">
          © {new Date().getFullYear()} – Nomad Black Sheep Cinema Archive
        </p>
      </footer>
    </div>
  );
};

export default Cinema;
