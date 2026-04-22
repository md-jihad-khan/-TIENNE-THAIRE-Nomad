import { useTranslation } from "react-i18next";
import rainbow from "../../assets/Home/rainbow.png";
import typewriterSticker from "../../assets/typewriter_sticker.png";
import quillSticker from "../../assets/quill_sticker.png";

import Book1 from "../../assets/Books/book4.jpg";
import Book2 from "../../assets/Books/book5.jpg";
import Book3 from "../../assets/Books/book6.jpg";

const Documentary = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <h2 className="relative inline-block font-semibold font-eb-garamond text-3xl md:text-7xl text-primary uppercase z-10 w-max">
          {t("BooksDocumentary.title")}
          <img src={typewriterSticker} className="absolute -top-10 -left-12 md:-left-20 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12" alt="" />
          <img src={quillSticker} className="absolute -bottom-8 -right-12 md:-right-20 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12" alt="" />
        </h2>
        <img
          src={rainbow}
          alt=""
          className="w-12 h-12 md:w-20 md:h-20 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-60 pointer-events-none"
        />
      </div>

      <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
        {t("BooksDocumentary.DSTitle")}
      </h4>

      <div className="flex gap-5">
        <img className="w-1/4 h-full" src={Book1} alt="" />

        <div>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("BooksDocumentary.DSDesc")}
          </p>

          <a
            href="http://www.camionblanc.com/index.php?p=addcommande&ID=203"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-jost font-semibold text-white bg-primary shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95focus:outline-none focus:ring-2  focus:ring-offset-2"
          >
            {t("BooksDocumentary.commander")}
          </a>
        </div>
      </div>
      {/* book 2 */}
      <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5 mt-20">
        {t("BooksDocumentary.LTDTitle")}
      </h4>

      <div className="flex gap-5">
        <img className="w-1/4 h-full" src={Book2} alt="" />

        <div>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("BooksDocumentary.LTDDesc1")}
          </p>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: t("BooksDocumentary.LTDDesc2") }}
          />
        </div>
      </div>

      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc3")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc4")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc5")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc6")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc7")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc8")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc9")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc10")}
      </p>
      <p
        className="font-jost  md:text-xl lg:text-2xl mb-10"
        style={{ whiteSpace: "pre-line" }}
      >
        {t("BooksDocumentary.LTDDesc11")}
      </p>

      {/* book3 */}
      <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
        {t("BooksDocumentary.FDRTitle")}
      </h4>

      <div className="flex gap-5">
        <img className="w-1/4 h-full" src={Book3} alt="" />

        <div>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("BooksDocumentary.FDRDesc")}
          </p>

          <a
            href="http://www.camionblanc.com/index.php?p=addcommande&ID=328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-jost font-semibold text-white bg-primary shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95focus:outline-none focus:ring-2  focus:ring-offset-2"
          >
            {t("BooksDocumentary.commander")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documentary;
