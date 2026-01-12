import { useTranslation } from "react-i18next";
import book1 from "../../assets/Books/Book1.jpg";
import book2 from "../../assets/Books/Book2.jpg";
import book3 from "../../assets/Books/book3.jpg";
import press1 from "../../assets/Books/press1.jpg";
import press2 from "../../assets/Books/press2.jpg";

const Novel = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 ">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary   uppercase mb-10">
        {t("books.novelTitle")}
      </h2>
      {/* LA 2003 */}

      <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
        {t("books.LLTitle")}
      </h4>
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

      <p className="font-jost md:text-xl lg:text-2xl mt-5 whitespace-pre-line w-full">
        {t("books.LLDesc2")}
      </p>

      <div className="my-20">
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
        {/* <p className="md:text-xl lg:text-2xl mb-10 ">{t("books.orderDesc")}</p>
        <p className="md:text-xl lg:text-2xl mb-10 uppercase">
          {t("books.order")}
        </p> */}
      </div>
      {/* AL 2004 */}
      <div className=" ml-auto">
        <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
          {" "}
          {t("books.LLTitle2")}{" "}
        </h4>

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

      <h4 className="font-jost  md:text-2xl lg:text-4xl uppercase mb-5">
        {t("books.fTitle")}
      </h4>
      <div className="flex gap-5 mx-auto items-center">
        <img className="w-1/4 h-full" src={book3} alt="" />
        <div>
          <p
            className="font-jost  md:text-xl lg:text-2xl mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            {t("books.fDesc1")}
          </p>

          <p className="md:text-xl lg:text-2xl mb-10 uppercase">Interview</p>
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
    </div>
  );
};

export default Novel;
