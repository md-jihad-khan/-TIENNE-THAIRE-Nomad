import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book2.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Alissia Lone.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Alissia Lone.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";
import rainbow from "../../../assets/Home/rainbow.png";

const Al = () => {
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
    `px-6 py-2 rounded-full text-sm transition-all duration-300 w-fit
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
            Alissia Lone <small>(2004)</small>
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
                    {t("books.ALDesc1")}
                  </p>
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {" "}
                    {t("books.ALDesc2")}
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
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed w-full ">
                    {t("books.ALextrait1")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 w-full ">
                    {t("books.ALextrait2")}
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
                    <i className="italic">Alissia Lone d</i>'Etienne Ethaire
                    relate le traumatisme d'une présentatrice de télévision
                    victime d'un viol par trois mâles en rut. Ce récit explore
                    la dualité entre l'image publique parfaite de l'héroïne et
                    sa détresse intérieure profonde.
                  </p>
                </div>
                {/* article September */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.articleJully"),
                  }}
                />
                {/* article August */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 mr-auto mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: t("books.articleJune") }}
                />
                {/* article September2 */}
                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.articleApril"),
                  }}
                />
                <div className="my-20">
                  {/* article nov */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleMay"),
                    }}
                  />

                  {/* article Dec */}
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleMarch"),
                    }}
                  />
                  <p
                    className="font-jost md:text-xl lg:text-2xl leading-relaxed lg:w-3/4 ml-auto"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleMay2"),
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
                    <Trans i18nKey={t("books.interview2Desc1")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc2")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview2Desc3")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc4")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc5")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc6")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc7")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc8")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc9")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc10")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc11")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview2Desc12")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc13")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview2Desc14")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc15")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc16")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc17")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview2Desc18")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc19")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc20")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc21")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc22")}
                  </p>

                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    <Trans i18nKey={t("books.interview2Desc23")} />
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8">
                    {t("books.interview2Desc24")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl font-bold italic mb-2">
                    {t("books.interview2Desc25")}
                  </p>
                </div>

                <p
                  className="font-jost md:text-xl lg:text-2xl leading-relaxed ml-auto mt-5 mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{
                    __html: t("books.interview2Desc26"),
                  }}
                />
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

                <audio key={Podcast1} controls className="w-full">
                  <source src={Podcast1} type="audio/mpeg" />
                </audio>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div >
  );
};

export default Al;
