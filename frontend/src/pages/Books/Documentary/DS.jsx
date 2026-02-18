import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book4.jpg";
import press1 from "../../../assets/Books/Casting Press/press1.jpg";
import press2 from "../../../assets/Books/Casting Press/press2.jpg";
import press3 from "../../../assets/Books/Casting Press/press3.jpg";
import press4 from "../../../assets/Books/Casting Press/press4.jpg";
import press5 from "../../../assets/Books/Casting Press/press5.jpg";
import press6 from "../../../assets/Books/Casting Press/press6.jpg";
import press7 from "../../../assets/Books/Casting Press/press7.jpg";
import press8 from "../../../assets/Books/Casting Press/press8.jpg";
import press9 from "../../../assets/Books/Casting Press/press9.jpg";
import press10 from "../../../assets/Books/Casting Press/press10.jpg";
import press11 from "../../../assets/Books/Casting Press/press11.jpg";
import press12 from "../../../assets/Books/Casting Press/press12.jpg";
import press13 from "../../../assets/Books/Casting Press/press13.jpg";
import press14 from "../../../assets/Books/Casting Press/press14.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Casting.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Casting.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";
import rainbow from "../../../assets/Home/rainbow.png";

const DS = () => {
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
     ${activeTab === tabKey
      ? "bg-primary text-white shadow-xl scale-105 hover:shadow-xl active:scale-95"
      : "border-2 border-green-900 text-primary hover:bg-[#0c331c] hover:!text-white hover:shadow-xl hover:scale-105 active:scale-95"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-10 flex gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col gap-5 w-1/3"
      >
        <div className="relative">
          <h4 className="font-jost md:text-2xl lg:text-3xl text-primary font-bold uppercase italic relative z-10">
            Diva Siouxsie <small>(2007)</small>
          </h4>
          <img
            src={rainbow}
            alt=""
            className="absolute -top-6 -left-6 w-20 opacity-40 z-0 pointer-events-none"
          />
        </div>
        {/* ===== LEFT IMAGE ===== */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src={book1}
          alt=""
          className="   shadow-xl "
        />
      </motion.div>

      {/* ================= IMAGE + CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" items-start w-3/4"
      >
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

        {/* ===== RIGHT CONTENT PANEL ===== */}
        <div className="flex-1 h-[450px]">
          <AnimatePresence mode="wait">
            {/* ================= COVER ================= */}
            {activeTab === "cover" && (
              <motion.div
                key="cover"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="  h-full overflow-y-auto"
              >
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    4ème de couv'
                  </h4>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {t("BooksDocumentary.DSDesc")}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "extrait" && (
              <motion.div
                key="extrait"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.3 }}
                className="  h-full overflow-y-auto"
              >
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    Extrait
                  </h4>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocumentary.DSExtrait"),
                    }}
                  />
                </div>
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
                className="  h-full overflow-y-auto"
              >
                <div className="flex flex-col gap-5">
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    Interview
                  </h4>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview1")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview2")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview3")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview4")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview5")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview6")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview7")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview8")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview9")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview10")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview11")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview12")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview13")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview14")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("BooksDocumentary.DSInterview15")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocumentary.DSInterview16")}
                  </p>
                </div>
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
                className="  h-full overflow-y-auto"
              >
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    Podcast
                  </h4>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10 uppercase">
                    Podcast
                  </p>
                </div>
                {/* <audio key={Podcast1} controls className="w-full">
                  <source src={Podcast1} type="audio/mpeg" />
                </audio> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      {/* news paper reviews */}
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
                  {[
                    press1,
                    press2,
                    press3,
                    press4,
                    press5,
                    press6,
                    press7,
                    press8,
                    press9,
                    press10,
                    press11,
                    press12,
                    press13,
                    press14,
                  ].map((img, index) => (
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
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DS;
