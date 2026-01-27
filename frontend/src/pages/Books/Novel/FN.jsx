import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book3.jpg";
import press1 from "../../../assets/Books/FN Press/1.jpg";
import press2 from "../../../assets/Books/FN Press/2.jpg";
import press3 from "../../../assets/Books/FN Press/3.jpg";
import press4 from "../../../assets/Books/FN Press/4.jpg";
import press5 from "../../../assets/Books/FN Press/5.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Funérarium.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Funérarium.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";

const FN = () => {
  const { t } = useTranslation("global");
  const [lang, setLang] = useState(i18next.language);
  const [activeTab, setActiveTab] = useState("cover");
  const [openNewspapers, setOpenNewspapers] = useState(false);

  const Podcast1 = lang.startsWith("fr") ? podcast1FR : podcast1EN;

  useEffect(() => {
    i18next.on("languageChanged", setLang);
    return () => i18next.off("languageChanged", setLang);
  }, []);

  // ✅ BUTTON CLASS FUNCTION
  const getButtonClass = (tabKey) =>
    `px-6 py-2 rounded-full font-medium transition-all duration-300 w-fit
     ${
       activeTab === tabKey
         ? "bg-primary text-white shadow-xl scale-105 hover:shadow-xl active:scale-95"
         : "border-2 border-green-900 text-primary hover:bg-[#0c331c] hover:!text-white hover:shadow-xl hover:scale-105 active:scale-95"
     }`;

  return (
    <div className="mt-10">
      <div className="flex gap-5">
        <h4 className="font-jost md:text-2xl lg:text-3xl text-primary font-bold uppercase italic ">
          Funérarium <small>(2009)</small>
        </h4>
        <div className="flex flex-wrap gap-3 mb-5">
          <button
            className={getButtonClass("cover")}
            onClick={() => setActiveTab("cover")}
          >
            4ème de couv'
          </button>

          <button
            className={getButtonClass("extrait")}
            onClick={() => setActiveTab("extrait")}
          >
            Extrait
          </button>

          <button
            className={getButtonClass("press")}
            onClick={() => setActiveTab("press")}
          >
            Presse
          </button>

          <button
            className={getButtonClass("interview")}
            onClick={() => setActiveTab("interview")}
          >
            Interview
          </button>

          <button
            className={getButtonClass("podcast")}
            onClick={() => setActiveTab("podcast")}
          >
            Podcast
          </button>

          <button className={getButtonClass("order")}>
            {t("BooksDocumentary.commander")}
          </button>
        </div>
      </div>

      {/* ================= IMAGE + CONTENT ================= */}
      <div className="flex gap-10 items-start">
        {/* ===== LEFT IMAGE ===== */}
        <img
          src={book1}
          alt=""
          className="w-1/4 h-auto sticky top-24  shadow-xl"
        />

        {/* ===== RIGHT CONTENT PANEL ===== */}
        <div className="flex-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* ================= COVER ================= */}
            {activeTab === "cover" && (
              <motion.div
                key="cover"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl"
              >
                <div>
                  <p
                    className="font-jost  md:text-xl lg:text-2xl mb-10"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    {t("books.fDesc1")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ================= EXTRAIT ================= */}
            {activeTab === "extrait" && (
              <motion.div
                key="extrait"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl"
              >
                <div>
                  <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
                    {t("books.fExtraitDesc1")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
                    {t("books.fExtraitDesc2")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
                    {t("books.fExtraitDesc3")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* ================= PRESS ================= */}
            {activeTab === "press" && (
              <motion.div
                key="press"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl"
              >
                <h4 className="font-jost  md:text-2xl  lg:text-3xl font-bold uppercase mb-5">
                  {t("books.Presse")}
                </h4>
                <p
                  className="font-jost  md:text-xl lg:text-2xl mb-10"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("books.Fpress1")}
                </p>

                <button
                  onClick={() => setOpenNewspapers(true)}
                  className="
    bg-white text-black
    px-6 py-2
    rounded-full
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
  "
                >
                  Newspapers reviews
                </button>
              </motion.div>
            )}

            {/* ================= INTERVIEW ================= */}
            {activeTab === "interview" && (
              <motion.div
                key="interview"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl space-y-5"
              >
                <p className="md:text-xl lg:text-3xl mb-5 uppercase ">
                  Interview
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 font-semibold">
                  <Trans i18nKey={t("books.interview3Desc1")} />
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc2")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc3")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc4")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc5")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc6")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 font-semibold">
                  <Trans i18nKey={t("books.interview3Desc7")} />
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc8")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 font-semibold">
                  <Trans i18nKey={t("books.interview3Desc9")} />
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc10")}
                </p>
              </motion.div>
            )}

            {/* ================= PODCAST ================= */}
            {activeTab === "podcast" && (
              <motion.div
                key="podcast"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl text-center"
              >
                <p className="text-xl lg:text-2xl mb-6 uppercase text-center">
                  Podcast
                </p>

                <audio key={Podcast1} controls className="w-full">
                  <source src={Podcast1} type="audio/mpeg" />
                </audio>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* News paper reviews */}
      <AnimatePresence>
        {openNewspapers && (
          <>
            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.8, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="
  bg-primary text-white font-jost
  w-full max-w-5xl

  max-h-[90vh] overflow-y-auto   /* ⭐ FIX */

  rounded-3xl shadow-2xl
  relative
  p-8
"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <div className="sticky top-0 flex justify-end  z-20">
                  <button
                    onClick={() => setOpenNewspapers(false)}
                    className="
        w-9 h-9
        rounded-full
        bg-white/20
        hover:bg-white/40
        transition
        flex items-center justify-center
      "
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <p className="text-xl lg:text-3xl mb-6 uppercase text-center">
                  Newspapers Reviews
                </p>
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                  {[press1, press2, press3, press4, press5].map(
                    (img, index) => (
                      <div
                        key={index}
                        className="relative break-inside-avoid group"
                      >
                        {/* Image */}
                        <img
                          src={img}
                          alt={`Press ${index + 1}`}
                          className="w-full rounded-2xl shadow-lg"
                        />

                        {/* Download button */}
                        <a
                          href={img}
                          download
                          className="
            absolute bottom-3 right-3
            bg-black/60 text-white text-sm
            px-3 py-1 rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "
                        >
                          Download
                        </a>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FN;
