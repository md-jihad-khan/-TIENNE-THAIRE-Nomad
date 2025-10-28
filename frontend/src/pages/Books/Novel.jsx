import { useTranslation } from "react-i18next";

const Novel = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 ">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary   uppercase mb-10">
        {t("books.novelTitle")}
      </h2>
      {/* LA 2003 */}

      <div className="lg:w-3/4 ">
        <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
          {" "}
          {t("books.LLTitle")}{" "}
        </h4>

        <p
          className="font-jost  md:text-xl lg:text-2xl mb-10"
          style={{ whiteSpace: "pre-line" }}
        >
          {" "}
          {t("books.LLDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl ">
          {" "}
          {t("books.LLDesc2")}
        </p>
      </div>

      <div className="my-20">
        {/* article September */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto mb-10"
          style={{ whiteSpace: "pre-line" }}
        >
          {" "}
          {t("books.articleSep")}
        </p>
        {/* article August */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 mr-auto mb-10"
          style={{ whiteSpace: "pre-line" }}
        >
          {" "}
          {t("books.articleAug")}
        </p>
        {/* article September2 */}
        <p
          className="font-jost  md:text-xl lg:text-2xl lg:w-3/4 ml-auto"
          style={{ whiteSpace: "pre-line" }}
        >
          {" "}
          {t("books.articleSep2")}
        </p>

        <div className="my-20">
          {/* article nov */}
          <p
            className="font-jost  md:text-xl lg:text-2xl  mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            {t("books.articleNov")}
          </p>
          {/* article Dec */}
          <p
            className="font-jost  md:text-xl lg:text-2xl  mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            {t("books.articleDec")}
          </p>
        </div>
      </div>

      {/* interview 1  green background*/}

      <div className="relative left-[50%] right-[50%] -mx-[50vw] w-screen bg-primary text-white font-jost my-10 py-10 px-4 sm:px-6">
        <div className="container lg:px-12 px-2 mx-auto ">
          {/* right-side section */}
          <div className="lg:w-3/4 ml-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 uppercase">Interview</p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc1")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc2")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc3")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc4")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc5")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc6")}
            </p>
          </div>
          {/* left-side section */}
          <div className="lg:w-3/4 mr-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc7")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc8")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc9")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc10")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-11 ">
              {" "}
              {t("books.interview1Desc11")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-12 ">
              {" "}
              {t("books.interview1Desc12")}
            </p>
          </div>
          {/* right-side section */}
          <div className="lg:w-3/4 ml-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc13")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc14")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc15")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc16")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc17")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc18")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc19")}
            </p>
          </div>
          {/* left-side section */}
          <div className="lg:w-3/4 mr-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc20")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc21")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc22")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview1Desc23")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-11 ">
              {" "}
              {t("books.interview1Desc24")}
            </p>
          </div>
        </div>
      </div>
      {/* order */}
      <div className="lg:w-2/3 ">
        <p className="md:text-xl lg:text-2xl mb-10 uppercase">Podcast</p>
        <p className="md:text-xl lg:text-2xl mb-10 ">{t("books.orderDesc")}</p>
        <p className="md:text-xl lg:text-2xl mb-10 uppercase">
          {t("books.order")}
        </p>
      </div>
      {/* AL 2004 */}
      <div className="lg:w-2/3 ml-auto">
        <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
          {" "}
          {t("books.LLTitle2")}{" "}
        </h4>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {" "}
          {t("books.LL2Desc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {" "}
          {t("books.LL2Desc2")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl ">
          {" "}
          {t("books.LL2Desc3")}
        </p>
      </div>
      {/* Interview2 */}
      <div className="relative left-[50%] right-[50%] -mx-[50vw] w-screen bg-primary text-white font-jost my-10 py-10 px-4 sm:px-6">
        <div className="container lg:px-12 px-2 mx-auto ">
          {/* left-side section */}
          <div className="lg:w-3/4 mr-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 uppercase">Interview</p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc1")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc2")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc3")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc4")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc5")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc6")}
            </p>
          </div>
          {/* right-side section */}
          <div className="lg:w-3/4 ml-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc7")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc8")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc9")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc10")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-11 ">
              {" "}
              {t("books.interview2Desc11")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-12 ">
              {" "}
              {t("books.interview2Desc12")}
            </p>
          </div>
          {/* left-side section */}
          <div className="lg:w-3/4 mr-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc13")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc14")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc15")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc16")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc17")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc18")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc19")}
            </p>
          </div>
          {/* right-side section */}
          <div className="lg:w-3/4 ml-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc20")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc21")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc22")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc23")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-11 ">
              {" "}
              {t("books.interview2Desc24")}
            </p>
          </div>
          {/* left-side section */}
          <div className="lg:w-3/4 mr-auto pt-10">
            <p className="md:text-xl lg:text-2xl mb-10 ">
              {" "}
              {t("books.interview2Desc25")}
            </p>
            <p className="md:text-xl lg:text-2xl mb-10 ">
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
      <p className="md:text-xl lg:text-2xl mb-10 uppercase">
        {" "}
        {t("books.interview2commander")}
      </p>
    </div>
  );
};

export default Novel;
