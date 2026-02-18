import { useTranslation } from "react-i18next";
import rainbow from "../../assets/Home/rainbow.png";

import Book1 from "../../assets/Books/book4.jpg";
import Book2 from "../../assets/Books/book5.jpg";
import Book3 from "../../assets/Books/book6.jpg";

const Documentary = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 relative">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary uppercase mb-10 relative z-10">
        {t("BooksDocumentary.title")}
      </h2>
      <img
        src={rainbow}
        alt=""
        className="absolute -top-10 -left-10 w-32 md:w-48 opacity-40 -z-0 pointer-events-none"
      />

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
