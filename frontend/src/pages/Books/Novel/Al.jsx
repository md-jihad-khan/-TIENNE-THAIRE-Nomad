import { Trans, useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book2.jpg";

import podcast1FR from "../../../assets/audio/Podcast français Alissia Lone.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais Alissia Lone.wav";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";

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
          Alissia Lone <small>(2004)</small>
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
                    {t("books.ALDesc1")}
                  </p>
                  <p
                    className="font-jost  md:text-xl lg:text-2xl mb-10"
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
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl"
              >
                <div>
                  <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
                    {t("books.ALextrait1")}
                  </p>
                  <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
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
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl"
              >
                <div>
                  <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
                    {t("books.Presse")}
                  </h4>
                  <p
                    className="font-jost  md:text-xl lg:text-2xl  mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.ALpress"),
                    }}
                  />
                  {/* article September */}
                  <p
                    className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleJully"),
                    }}
                  />
                  {/* article August */}
                  <p
                    className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 mr-auto mb-10"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{ __html: t("books.articleJune") }}
                  />
                  {/* article September2 */}
                  <p
                    className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto"
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: t("books.articleApril"),
                    }}
                  />
                  <div className="my-20">
                    {/* article nov */}
                    <p
                      className="font-jost  md:text-xl lg:text-2xl  mb-10"
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: t("books.articleMay"),
                      }}
                    />

                    {/* article Dec */}
                    <p
                      className="font-jost  md:text-xl lg:text-2xl  mb-10"
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: t("books.articleMarch"),
                      }}
                    />
                    <p
                      className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto"
                      style={{ whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: t("books.articleMay2"),
                      }}
                    />
                  </div>{" "}
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
                className="bg-primary text-white p-8 rounded-3xl shadow-2xl space-y-5"
              >
                <p className="md:text-xl lg:text-3xl mb-5 uppercase">
                  Interview
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc1")} />
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc2")}
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc3")} />
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc4")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc5")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc6")}
                </p>

                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc7")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc8")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc9")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc10")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc11")}
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc12")} />
                </p>

                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc13")}
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc14")} />
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc15")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc16")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc17")}
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc18")} />
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc19")}
                </p>

                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc20")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc21")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc22")}
                </p>
                <p className="md:text-xl lg:text-xl font-semibold mb-5 ">
                  <Trans i18nKey={t("books.interview2Desc23")} />
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc24")}
                </p>

                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc25")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc26")}
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
    </div>
  );
};

export default Al;
