import { Trans, useTranslation } from "react-i18next";
import rainbow from "../../../assets/Home/rainbow.png";
import book1 from "../../../assets/Books/Book1.jpg";
import press1 from "../../../assets/Books/LA Press/Langoureuse-Alissia.Antipode.jpg";
import press2 from "../../../assets/Books/LA Press/Langoureuse-Carnet.jpg";
import press3 from "../../../assets/Books/LA Press/Langoureuse.Biblio.jpg";
import press4 from "../../../assets/Books/LA Press/Langoureuse.ClassementCarnet.jpg";
import press5 from "../../../assets/Books/LA Press/Langoureuse.D'uneCertaineGaieté.jpg";
import press6 from "../../../assets/Books/LA Press/Langoureuse.DH.jpg";
import press7 from "../../../assets/Books/LA Press/Langoureuse.LeVif.jpg";
import press8 from "../../../assets/Books/LA Press/Langoureuse.Vers l'Avenir.jpg";
import press9 from "../../../assets/Books/LA Press/press1.jpg";
import podcast1FR from "../../../assets/audio/Podcast français La Langoureuse.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais La Langoureuse.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";

const La = () => {
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
            La Langoureuse <small>(2003)</small>
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
                    {t("books.LLDesc")}
                  </p>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    {t("books.LLDesc1")}
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
                className="  h-full overflow-y-auto"
              >
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    Extrait
                  </h4>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 w-full ">
                    {t("books.LLDesc2")}
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
                <div>
                  <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                    {t("books.Presse")}
                  </h4>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    Ce récit suit le parcours tragique de Maleea, une jeune femme
                    hantée par la disparition prématurée de sa mère, Esther
                    Figiel, et par une malédiction familiale. À travers ses
                    souvenirs, elle décrit une adolescence tumultueuse marquée par
                    une sexualité compulsive et des rapports conflictuels avec son
                    père, qu'elle finit par accuser d'avoir assassiné sa mère.
                    Malgré des retrouvailles fusionnelles et incestueuses avec
                    cette dernière, le cycle de la fatalité reprend ses droits
                    lors du décès brutal d'Esther. Sombrant dans une anorexie
                    sévère et des séjours répétés en milieu psychiatrique,
                    l'héroïne se laisse dépérir physiquement. Après l'échec d'un
                    procès retentissant et le suicide final de son père, Maleea
                    livre ses dernières pensées, oscillant entre le dédain de la
                    vie et l'espoir d'une libération par l'écriture.
                  </p>
                </div>

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

                {/* article September */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.articleSep"),
                  }}
                />
                {/* article August */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 mr-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.articleAug"),
                  }}
                />
                {/* article September2 */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.articleSep2"),
                  }}
                />
                <div className="my-20">
                  {/* article nov */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleNov"),
                    }}
                  />

                  {/* article Dec */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed "
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleDec"),
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
                <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                  Interview
                </h4>
                <div className="flex flex-col gap-5">
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc1")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc2")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc3")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc4")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc5")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc6")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc7")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc8")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc9")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc10")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc11")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc12")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc13")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc14")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc15")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc16")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc17")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc18")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc19")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc20")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview1Desc21")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc22")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview1Desc23")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview1Desc24")}
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

export default La;
