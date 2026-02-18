import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book5.jpg";
import press1 from "../../../assets/Books/LTD Press/press1.jpg";
import press2 from "../../../assets/Books/LTD Press/press2.jpg";
import press3 from "../../../assets/Books/LTD Press/press3.jpg";
import press4 from "../../../assets/Books/LTD Press/press4.jpg";
import press5 from "../../../assets/Books/LTD Press/press5.jpg";
import press6 from "../../../assets/Books/LTD Press/press6.jpg";
import press7 from "../../../assets/Books/LTD Press/press7.jpg";
import press8 from "../../../assets/Books/LTD Press/press8.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Casting.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Casting.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";
import rainbow from "../../../assets/Home/rainbow.png";

const LT = () => {
  const { t } = useTranslation("global");
  const [lang, setLang] = useState(i18next.language);
  const [activeTab, setActiveTab] = useState("cover");

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
            La Tribu des Rouches <small>(2008)</small>
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
                    {t("BooksDocumentary.LTDDesc1")}
                  </p>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocumentary.LTDDesc2"),
                    }}
                  />
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
                className="  h-full overflow-y-auto"
              >
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    Extrait
                  </h4>
                  {/* <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5  w-full ">
                    {t("books.LLDesc2")}
                  </p> */}
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
                className="  h-full overflow-y-auto"
              >
                <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                  {t("books.Presse")}
                </h4>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocumentary.LTDpresse"),
                  }}
                />

                <div className="columns-2 sm:columns-3 lg:columns-4 gap-5">
                  {[
                    press1,
                    press2,
                    press3,
                    press4,
                    press5,
                    press6,
                    press7,
                    press8,
                  ].map((img, index) => (
                    <div
                      key={index}
                      className="mb-5 break-inside-avoid relative group rounded-xl overflow-hidden shadow-md"
                    >
                      <img
                        src={img}
                        loading="lazy"
                        alt={`Press ${index + 1}`}
                        className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
                      />

                      <a
                        href={img}
                        download
                        className="
                          absolute bottom-2 right-2
                          bg-black/70 text-white text-xs
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
                {/* Video 1 */}
                <div className="w-full mb-8 aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/5hv6P0Co7ZA"
                    title="YouTube video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video 2 */}
                <div className="w-full mb-8 aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/pNSA0nq2m48"
                    title="YouTube video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                  Interview
                </h4>
                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2 [&_i]:text-primary/60"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocumentary.LTDDesc3"),
                  }}
                />

                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc4")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc5")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocumentary.LTDDesc6"),
                  }}
                />

                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocumentary.LTDDesc7"),
                  }}
                />

                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc8")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc9")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc10")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc11")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc12")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc13")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc14")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc15")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc16")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc17")}
                </p>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocumentary.LTDDesc18")}
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
    </motion.div>
  );
};

export default LT;
