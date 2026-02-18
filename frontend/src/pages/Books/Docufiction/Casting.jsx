import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book7.jpg";
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
import press15 from "../../../assets/Books/Casting Press/press15.jpg";
import extract from "../../../assets/Extract/casting.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Casting.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Casting.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";
import rainbow from "../../../assets/Home/rainbow.png";

const Casting = () => {
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
            Casting <small>(2006)</small>
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
                    {t("BooksDocu-fiction.desc1")}
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
                className=" h-full overflow-y-auto p-2"
              >
                <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                  Extrait
                </h4>
                <img className="w-1/2" src={extract} alt="" />

                <div>
                  <p
                    className="font-jost text-right md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 italic font-bold text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc1"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc2"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc3"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc4"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc5"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc6"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc7"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc8"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 text-right [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc9"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc10"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc11"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10 [&_i]:text-primary/60"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.ExtraitDesc12"),
                    }}
                  />
                  <p className="font-jost md:text-xl lg:text-2xl font-bold mt-5 mb-10">
                    Fin d’insert
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
                className="  h-full overflow-y-auto"
              >
                <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-5">
                  {t("books.Presse")}
                </h4>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("BooksDocu-fiction.PresseDesc1")}
                </p>

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
                    press9,
                    press10,
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
                    src="https://www.youtube.com/embed/FjuY0gPLZy4"
                    title="YouTube video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* article September */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mt-5 mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseSept"),
                  }}
                />

                {/* article August */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 mr-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseJune"),
                  }}
                />

                {/* article September2 */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseMarch"),
                  }}
                />

                <div className="my-20">
                  {/* article nov */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.PresseMarch2"),
                    }}
                  />

                  {/* article Dec */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.PresseApril"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.PresseApril2"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.PresseMarch3"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("BooksDocu-fiction.PresseMarch4"),
                    }}
                  />
                </div>
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseMarch5"),
                  }}
                />
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseMarch6"),
                  }}
                />
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("BooksDocu-fiction.PresseApril3"),
                  }}
                />
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
                <div className="flex flex-col gap-5">
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc1")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc2")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc3")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc4")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc5")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc6")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc7")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc8")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc9")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc10")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc11")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc12")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc13")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc14")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc15")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc16")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc17")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc18")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc19")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc20")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc21")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc22")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc23")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc24")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("BooksDocu-fiction.interviewDesc25")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc26")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("BooksDocu-fiction.interviewDesc27")}
                  </p>
                </div>
                <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                  {t("BooksDocu-fiction.interviewDesc28")}
                </p>
                <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                  {t("BooksDocu-fiction.interviewDesc29")}
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
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10 uppercase text-center">
                    Podcast
                  </p>
                </div>

                <audio key={Podcast1} controls className="w-full">
                  <source src={Podcast1} type="audio/mpeg" />
                </audio>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Casting;
