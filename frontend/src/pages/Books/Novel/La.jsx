import { useTranslation } from "react-i18next";
import book1 from "../../../assets/Books/Book1.jpg";
import podcast1FR from "../../../assets/audio/Podcast français La Langoureuse.m4a";
import podcast1EN from "../../../assets/audio/Podcast anglais La Langoureuse.wav";
import { motion, AnimatePresence } from "framer-motion";
import press1 from "../../../assets/Books/LA Press/Langoureuse-Alissia.Antipode.jpg";
import press2 from "../../../assets/Books/LA Press/Langoureuse-Carnet.jpg";
import press3 from "../../../assets/Books/LA Press/Langoureuse.Biblio.jpg";
import press4 from "../../../assets/Books/LA Press/Langoureuse.ClassementCarnet.jpg";
import press5 from "../../../assets/Books/LA Press/Langoureuse.D'uneCertaineGaieté.jpg";
import press6 from "../../../assets/Books/LA Press/Langoureuse.DH.jpg";
import press7 from "../../../assets/Books/LA Press/Langoureuse.LeVif.jpg";
import press8 from "../../../assets/Books/LA Press/Langoureuse.Vers l'Avenir.jpg";

import i18next from "i18next";
import { useEffect, useState } from "react";

const La = () => {
  const { t } = useTranslation("global");
  const [lang, setLang] = useState(i18next.language);
  const [openInterview, setOpenInterview] = useState(false);
  const [openPodcast, setOpenPodcast] = useState(false);
  const [openNewspapers, setOpenNewspapers] = useState(false);
  const Podcast1 = lang.startsWith("fr") ? podcast1FR : podcast1EN;
  useEffect(() => {
    i18next.on("languageChanged", setLang);
    return () => i18next.off("languageChanged", setLang);
  }, []);
  return (
    <div className="mt-10">
      <div className="flex gap-5 items-center justify-evenly my-10">
        <h4 className="font-jost  md:text-2xl lg:text-4xl text-primary font-bold uppercase mb-5">
          {t("books.LLTitle")}
        </h4>
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setOpenInterview(true)}
            className="
    bg-primary text-white
    px-6 py-2
    rounded-full
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
  "
          >
            Interview
          </button>{" "}
          <button
            onClick={() => setOpenPodcast(true)}
            className="
    bg-primary text-white
    px-6 py-2
    rounded-full
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
  "
          >
            Podcast
          </button>
          <button
            className="bg-primary text-white
    px-6 py-2
    rounded-full
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95"
          >
            {t("BooksDocumentary.commander")}
          </button>
        </div>
      </div>

      <div className="flex gap-5">
        <img className="w-1/4 h-full" src={book1} alt="" />

        <div>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("books.LLDesc")}
          </p>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            {t("books.LLDesc1")}
          </p>
        </div>
      </div>

      <p className="font-jost md:text-xl lg:text-2xl mt-5  w-full ">
        {t("books.LLDesc2")}
      </p>

      <div className="my-10">
        <h4 className="font-jost  md:text-2xl  lg:text-5xl font-bold text-primary uppercase mb-5">
          {t("books.Presse")}
        </h4>
        <p
          className="font-jost  md:text-xl lg:text-2xl mb-10"
          style={{ whiteSpace: "pre-line" }}
        >
          Ce récit suit le parcours tragique de Maleea, une jeune femme hantée
          par la disparition prématurée de sa mère, Esther Figiel, et par une
          malédiction familiale. À travers ses souvenirs, elle décrit une
          adolescence tumultueuse marquée par une sexualité compulsive et des
          rapports conflictuels avec son père, qu'elle finit par accuser d'avoir
          assassiné sa mère. Malgré des retrouvailles fusionnelles et
          incestueuses avec cette dernière, le cycle de la fatalité reprend ses
          droits lors du décès brutal d'Esther. Sombrant dans une anorexie
          sévère et des séjours répétés en milieu psychiatrique, l'héroïne se
          laisse dépérir physiquement. Après l'échec d'un procès retentissant et
          le suicide final de son père, Maleea livre ses dernières pensées,
          oscillant entre le dédain de la vie et l'espoir d'une libération par
          l'écriture.
        </p>

        <button
          onClick={() => setOpenNewspapers(true)}
          className="
    bg-primary text-white
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

        {/* article September */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto mb-10"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: t("books.articleSep") }}
        />
        {/* article August */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 mr-auto mb-10"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: t("books.articleAug") }}
        />
        {/* article September2 */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: t("books.articleSep2") }}
        />
        <div className="my-20">
          {/* article nov */}
          <p
            className="font-jost  md:text-xl lg:text-2xl  mb-10"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: t("books.articleNov") }}
          />

          {/* article Dec */}
          <p
            className="font-jost  md:text-xl lg:text-2xl  mb-10"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: t("books.articleDec") }}
          />
        </div>
      </div>

      {/* interview 1  green background*/}
      <AnimatePresence>
        {openInterview && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenInterview(false)}
            />

            {/* Modal */}
            <motion.div
              className="
          fixed inset-0 z-50
          flex items-center justify-center
          p-4
        "
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
            w-full max-w-6xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            shadow-2xl
            relative
            p-6 sm:p-10
          "
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setOpenInterview(false)}
                  className="
              absolute top-4 right-4
              w-9 h-9
              rounded-full
              bg-white/20
              hover:bg-white/40
              transition
            "
                >
                  ✕
                </button>

                {/* ========= YOUR ORIGINAL CONTENT (UNCHANGED) ========= */}

                <div className="container lg:px-12 px-2 mx-auto">
                  <div className="container lg:px-12 px-2 mx-auto ">
                    {/* right-side section */}
                    <div className="lg:w-3/4 ml-auto pt-5">
                      <p className="md:text-xl lg:text-3xl mb-5 uppercase ">
                        Interview
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc1")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc2")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc3")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc4")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc5")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc6")}
                      </p>
                    </div>
                    {/* left-side section */}
                    <div className="lg:w-3/4 mr-auto pt-10">
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc7")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc8")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc9")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc10")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc11")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc12")}
                      </p>
                    </div>
                    {/* right-side section */}
                    <div className="lg:w-3/4 ml-auto pt-10">
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc13")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc14")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc15")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc16")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc17")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc18")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc19")}
                      </p>
                    </div>
                    {/* left-side section */}
                    <div className="lg:w-3/4 mr-auto pt-10 pb-5">
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc20")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc21")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc22")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc23")}
                      </p>
                      <p className="md:text-xl lg:text-xl mb-5 ">
                        {" "}
                        {t("books.interview1Desc24")}
                      </p>
                    </div>
                  </div>

                  {/* keep the rest EXACTLY same as your code */}
                </div>

                {/* ===================================================== */}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* podcast */}
      <AnimatePresence>
        {openPodcast && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPodcast(false)}
            />

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
            w-full max-w-2xl
            rounded-3xl
            shadow-2xl
            relative
            p-8
          "
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setOpenPodcast(false)}
                  className="
              absolute top-4 right-4
              w-9 h-9
              rounded-full
              bg-white/20
              hover:bg-white/40
              transition
            "
                >
                  ✕
                </button>

                {/* Content */}
                <p className="text-xl lg:text-2xl mb-6 uppercase text-center">
                  Podcast
                </p>

                <audio key={Podcast1} controls className="w-full">
                  <source src={Podcast1} type="audio/mpeg" />
                </audio>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* News paper reviews */}
      <AnimatePresence>
        {openNewspapers && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenPodcast(false)}
            />

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
                <button
                  onClick={() => setOpenNewspapers(false)}
                  className="
              absolute top-4 right-4
              w-9 h-9
              rounded-full
              bg-white/20
              hover:bg-white/40
              transition
            "
                >
                  ✕
                </button>

                {/* Content */}
                <p className="text-xl lg:text-2xl mb-6 uppercase text-center">
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

      <div className=" ">
        {/* <p className="md:text-xl lg:text-2xl mb-10 ">{t("books.orderDesc")}</p>
          <p className="md:text-xl lg:text-2xl mb-10 uppercase">
            {t("books.order")}
          </p> */}
      </div>
    </div>
  );
};

export default La;
