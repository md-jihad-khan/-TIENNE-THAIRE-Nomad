import { useTranslation } from "react-i18next";
import book1 from "../../assets/Books/Book1.jpg";
import book2 from "../../assets/Books/Book2.jpg";
import book3 from "../../assets/Books/book3.jpg";
import press1 from "../../assets/Books/press1.jpg";
import press2 from "../../assets/Books/press2.jpg";
import podcast1FR from "../../assets/audio/Podcast français La Langoureuse.m4a";
import podcast1EN from "../../assets/audio/Podcast anglais La Langoureuse.wav";
import podcast2FR from "../../assets/audio/Podcast français Alissia Lone.m4a";
import podcast2EN from "../../assets/audio/Podcast anglais Alissia Lone.wav";
import podcast3FR from "../../assets/audio/Podcast français Funérarium.m4a";
import podcast3EN from "../../assets/audio/Podcast anglais Funérarium.wav";

import i18next from "i18next";
import { useEffect, useState } from "react";
import rainbow from "../../assets/Home/rainbow.png";
import typewriterSticker from "../../assets/typewriter_sticker.png";
import quillSticker from "../../assets/quill_sticker.png";
import LaMuse from "./Novel/LaMuse";

const Novel = () => {
  const { t } = useTranslation("global");
  const [lang, setLang] = useState(i18next.language);
  const [activeBook, setActiveBook] = useState(0); // first book default

  useEffect(() => {
    i18next.on("languageChanged", setLang);
    return () => i18next.off("languageChanged", setLang);
  }, []);

  const Podcast1 = lang.startsWith("fr") ? podcast1FR : podcast1EN;

  const Podcast2 = lang.startsWith("fr") ? podcast2FR : podcast2EN;
  const Podcast3 = lang.startsWith("fr") ? podcast3FR : podcast3EN;
  return (
    <div className="my-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <h2 className="relative inline-block font-semibold font-eb-garamond text-3xl md:text-7xl text-primary uppercase z-10 w-max">
          {t("books.novelTitle")}
          <img src={typewriterSticker} className="absolute -top-12 -left-12 md:-left-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-[15deg]" alt="" />
          <img src={quillSticker} className="absolute -bottom-8 -right-12 md:-right-20 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-[25deg]" alt="" />
        </h2>
        <img
          src={rainbow}
          alt=""
          className="w-12 h-12 md:w-20 md:h-20 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-60 pointer-events-none"
        />
      </div>

      <div className="flex gap-6 mb-10">
        <button
          onClick={() => setActiveBook(0)}
          className={`btn text-xl rounded-full p-5
    transition-all duration-100 ease-in-out
    hover:scale-105 
    active:scale-95
    ${activeBook === 0 ? "text-white bg-primary " : "text-primary"}
  `}
        >
          La Langoureuse (2003)
        </button>
        <button
          onClick={() => setActiveBook(1)}
          className={`btn text-xl rounded-full  p-5
    transition-all duration-100 ease-in-out
    hover:scale-105 
    active:scale-95
    ${activeBook === 1 ? "text-white bg-primary " : "text-primary"}
  `}
        >
          Alissia Lone (2004)
        </button>
        <button
          onClick={() => setActiveBook(2)}
          className={`btn text-xl rounded-full p-5
    transition-all duration-100 ease-in-out
    hover:scale-105 
    active:scale-95
    ${activeBook === 2 ? "text-white bg-primary " : "text-primary"}
  `}
        >
          Funérarium (2009)
        </button>
        <button
          onClick={() => setActiveBook(3)}
          className={`btn text-xl rounded-full p-5
    transition-all duration-100 ease-in-out
    hover:scale-105 
    active:scale-95
    ${activeBook === 3 ? "text-white bg-primary " : "text-primary"}
  `}
        >
          La Muse
        </button>
      </div>

      {/* LA 2003 */}
      {activeBook === 0 && (
        <div>
          <div className="flex items-center gap-4 mb-5">
            <h4 className="font-jost md:text-2xl lg:text-4xl uppercase relative z-10">
              {t("books.LLTitle")}
            </h4>
            <img
              src={rainbow}
              alt=""
              className="w-10 h-10 md:w-14 md:h-14 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-50 pointer-events-none rotate-12"
            />
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
            <h4 className="font-jost  md:text-2xl lg:w-3/4 ml-auto lg:text-4xl uppercase mb-5">
              {t("books.Presse")}
            </h4>
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

          <div className="relative left-[50%] right-[50%] -mx-[50vw] w-screen bg-primary text-white font-jost my-10  px-4 sm:px-6">
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
          </div>
          {/* order */}
          <div className=" ">
            <p className="md:text-xl lg:text-2xl mb-10 uppercase">Podcast</p>
            <audio key={Podcast1} controls className=" w-full mb-10">
              <source src={Podcast1} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            {/* <p className="md:text-xl lg:text-2xl mb-10 ">{t("books.orderDesc")}</p>
        <p className="md:text-xl lg:text-2xl mb-10 uppercase">
          {t("books.order")}
        </p> */}
          </div>
        </div>
      )}

      {/* AL 2004 */}
      {activeBook === 1 && (
        <div>
          <div className=" ml-auto">
            <div className="flex items-center gap-4 mb-5">
              <h4 className="font-jost md:text-2xl lg:text-4xl uppercase relative z-10">
                {t("books.LLTitle2")}
              </h4>
              <img
                src={rainbow}
                alt=""
                className="w-10 h-10 md:w-14 md:h-14 mix-blend-multiply opacity-50 pointer-events-none -rotate-12"
              />
            </div>

            <div className="flex gap-5">
              <img className="w-1/4 h-full" src={book2} alt="" />
              <div>
                <p className="font-jost  md:text-xl lg:text-2xl mb-5">
                  {" "}
                  {t("books.LL2Desc1")}
                </p>
                <p className="font-jost  md:text-xl lg:text-2xl mb-5">
                  {" "}
                  {t("books.LL2Desc2")}
                </p>
              </div>
            </div>
            <p className="md:text-xl lg:text-2xl mt-10 uppercase font-semibold">
              {" "}
              {t("books.LLextrait")}
            </p>
            <p className="font-jost  md:text-xl lg:text-2xl my-5 ">
              {" "}
              {t("books.LLextraitDesc1")}
            </p>
            <p className="font-jost  md:text-xl lg:text-2xl my-5 ">
              {" "}
              {t("books.LLextraitDesc2")}
            </p>

            {/* Presse */}
            <div className="my-20">
              <h4 className="font-jost  md:text-2xl lg:w-3/4 ml-auto lg:text-4xl uppercase mb-5">
                {t("books.Presse")}
              </h4>
              {/* article September */}
              <p
                className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto mb-10"
                style={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: t("books.articleJully") }}
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
                dangerouslySetInnerHTML={{ __html: t("books.articleApril") }}
              />

              <div className="my-20">
                {/* article nov */}
                <p
                  className="font-jost  md:text-xl lg:text-2xl  mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: t("books.articleMay") }}
                />

                {/* article Dec */}
                <p
                  className="font-jost  md:text-xl lg:text-2xl  mb-10"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: t("books.articleMarch") }}
                />
                <p
                  className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: t("books.articleMay2") }}
                />
              </div>
            </div>
          </div>
          {/* Interview2 */}
          <div className="relative left-[50%] right-[50%] -mx-[50vw] w-screen bg-primary text-white font-jost my-10 py-10 px-4 sm:px-6">
            <div className="container lg:px-12 px-2 mx-auto ">
              {/* left-side section */}
              <div className="lg:w-3/4 mr-auto ">
                <p className="md:text-xl lg:text-3xl mb-5 uppercase">
                  Interview
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc1")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc2")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc3")}
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
              </div>
              {/* right-side section */}
              <div className="lg:w-3/4 ml-auto pt-10">
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
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc12")}
                </p>
              </div>
              {/* left-side section */}
              <div className="lg:w-3/4 mr-auto pt-10">
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc13")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc14")}
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
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc18")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc19")}
                </p>
              </div>
              {/* right-side section */}
              <div className="lg:w-3/4 ml-auto pt-10">
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
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc23")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc24")}
                </p>
              </div>
              {/* left-side section */}
              <div className="lg:w-3/4 mr-auto pt-10">
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc25")}
                </p>
                <p className="md:text-xl lg:text-xl mb-5 ">
                  {" "}
                  {t("books.interview2Desc26")}
                </p>
              </div>
            </div>
          </div>

          <p className="md:text-xl lg:text-2xl mb-10 uppercase">
            {" "}
            {t("books.interview2podcast")}
          </p>
          <audio key={Podcast2} controls className=" w-full mb-10">
            <source src={Podcast2} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="md:text-xl lg:text-2xl mb-10 uppercase">
            {" "}
            {t("books.interview2commander")}
          </p>
        </div>
      )}
      {/* FR 2009 */}
      {activeBook === 2 && (
        <div>
          <div className="flex items-center gap-4 mb-5">
            <h4 className="font-jost md:text-2xl lg:text-4xl uppercase relative z-10">
              {t("books.fTitle")}
            </h4>
            <img
              src={rainbow}
              alt=""
              className="w-10 h-10 md:w-14 md:h-14 mix-blend-multiply opacity-50 pointer-events-none rotate-[30deg]"
            />
          </div>
          <div className="flex gap-5 mx-auto items-center">
            <img className="w-1/4 h-full" src={book3} alt="" />
            <div>
              <p
                className="font-jost  md:text-xl lg:text-2xl mb-10"
                style={{ whiteSpace: "pre-line" }}
              >
                {t("books.fDesc1")}
              </p>

              <p className="md:text-xl lg:text-2xl mb-10 uppercase">
                Interview
              </p>
              <p className="md:text-xl lg:text-2xl mb-10 ">
                {" "}
                {t("books.interview3Desc1")}
              </p>
            </div>
          </div>

          <div className="relative left-[50%] right-[50%] -mx-[50vw] w-screen bg-primary text-white font-jost my-10 py-10 px-4 sm:px-6">
            <div className="container lg:px-12 px-2 mx-auto ">
              {/* right-side section */}
              <div className="lg:w-3/4 ml-auto pt-10">
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
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc7")}
                </p>
              </div>
              {/* left-side section */}
              <div className="lg:w-3/4 mr-auto pt-10">
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc8")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc9")}
                </p>
                <p className="md:text-xl lg:text-2xl mb-10 ">
                  {" "}
                  {t("books.interview3Desc10")}
                </p>
              </div>
            </div>
          </div>
          {/* press */}
          <div className="flex justify-evenly">
            <img className="w-1/2 h-full" src={press1} alt="" />
            <img className="w-1/4 h-full" src={press2} alt="" />
          </div>

          <p className="md:text-xl lg:text-2xl mt-10 uppercase font-semibold">
            {" "}
            {t("books.fExtrait")}
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl my-5 ">
            {" "}
            {t("books.fExtraitDesc1")}
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl my-5 ">
            {" "}
            {t("books.fExtraitDesc2")}
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl my-5 ">
            {" "}
            {t("books.fExtraitDesc3")}
          </p>
          <p className="md:text-xl lg:text-2xl mb-10 uppercase">Podcast</p>
          <audio key={Podcast3} controls className=" w-full mb-10">
            <source src={Podcast3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      {/* La Muse */}
      {activeBook === 3 && <LaMuse />}
    </div>
  );
};

export default Novel;
