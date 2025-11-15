import { useTranslation } from "react-i18next";
import img1 from "../assets/Biography/img1.png";
import img2 from "../assets/Biography/img2.png";
import img3 from "../assets/Biography/img3.png";
import img4 from "../assets/Biography/img4.png";
import img5 from "../assets/Biography/img5.png";
import img6 from "../assets/Biography/img6.png";
import img7 from "../assets/Biography/img7.png";
import img8 from "../assets/Biography/img8.png";
import img9 from "../assets/Biography/img9.png";

const Biography = () => {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 ">
      <h2 className="font-semibold font-eb-garamond text-3xl md:text-7xl text-primary text-right  uppercase mb-10">
        Biography
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <p className="font-jost  md:text-xl lg:text-2xl w-2/3">
          {" "}
          {t("biography.introDescription")}
        </p>

        <div className="lg:w-4/5 lg:ml-auto mt-20">
          <div className="grid grid-cols-2 md:flex justify-end items-center ">
            <img className="" src={img1} alt="" />
            <img src={img2} alt="" />
          </div>

          <p className="font-jhost text-sm  md:text-lg italic mt-5">
            {" "}
            {t("biography.caption1")}
          </p>

          <div className="bg-primary ml-auto w-1/6 mt-3 h-2"></div>
        </div>
      </div>

      {/* adolescence */}
      <p className="font-jost  md:text-xl lg:text-2xl lg:w-1/3 my-20 leading-7">
        {" "}
        {t("biography.adolescence")}
      </p>

      <div className="font-jost  md:text-xl lg:text-2xl  ml-auto lg:w-10/12 ">
        <p className="mb-5">{t("biography.studies")}</p>
        <p>{t("biography.salvage")}</p>
      </div>
      {/* cinema */}
      <p className="font-jost  md:text-xl lg:text-2xl lg:w-1/3 my-20 leading-7">
        {" "}
        {t("biography.cinema")}
      </p>

      <div className="font-jost  md:text-xl lg:text-2xl  ml-auto lg:w-10/12 ">
        <p className="mb-5">{t("biography.litterature")}</p>
        <p>{t("biography.cinema2")}</p>
      </div>

      {/* youth */}
      <div className="lg:w-4/5 mr-auto mt-20">
        <img src={img3} alt="" />
        <p className="font-jhost text-sm  md:text-lg italic mt-5">
          {" "}
          {t("biography.youthCaption")}
        </p>
        <div className="bg-primary mr-auto w-1/6 my-10 h-2"></div>

        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthTitle")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc2")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.experimentYouthDesc3")}
        </p>
      </div>
      {/* adult hood */}
      <div className="lg:w-4/5 ml-auto mt-30">
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.adultTitle")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.adultDescription1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.adultDescription2")}
        </p>
      </div>

      {/* Home */}

      <div className="lg:w-3/5 my-20 ml-auto">
        <img className="ml-auto " src={img4} alt="" />
        <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
          {t("biography.homeCaption")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc2")}
        </p>
      </div>

      <div className="lg:w-3/5 mr-auto my-30">
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc3")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc4")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl mb-5">
          {t("biography.homeDesc5")}
        </p>
      </div>
      {/* cinema books */}
      <div className="lg:w-3/5 mr-auto">
        <img src={img5} alt="" />
        <p className="font-jhost text-sm  md:text-lg italic mt-5 mb-10">
          {t("biography.cinemaCaption")}
        </p>
      </div>

      <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl my-20">
        {t("biography.cinemaDesc")}
      </p>
      <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl">
        {t("biography.bookDesc")}
      </p>

      {/* father section*/}

      <div className="my-32 ">
        <img className="ml-auto" src={img6} alt="" />
        <p className="font-jhost text-sm  md:text-lg text-right  italic mb-10">
          {t("biography.cinemaCaption")}
        </p>

        <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl mt-20 mb-10">
          {t("biography.novelDesc")}
        </p>
        <p className="lg:w-4/5 mr-auto font-jost  md:text-xl lg:text-2xl">
          {t("biography.inspiration")}
        </p>
      </div>

      {/*began writing */}
      <div className="my-32">
        <img src={img7} alt="" />
        <p className="font-jhost text-sm  md:text-lg mt-5  italic mb-10">
          {t("biography.cinemaCaption")}
        </p>

        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl mt-20 mb-10">
          {t("biography.writingDesc1")}
        </p>
        <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl">
          {t("biography.writingDesc2")}
        </p>
      </div>

      {/* exit leterature */}
      <div className="lg:w-4/5 mr-auto my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.exitTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.exitDesc1")}
        </p>
        <p className="font-jost  md:text-xl lg:text-2xl">
          {t("biography.exitDesc2")}
        </p>
      </div>
      {/* Nomad Black sheep */}
      <div className="lg:w-5/12 ml-auto my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.NBSTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.NBSDesc")}
        </p>
      </div>
      {/* return Literature */}
      <div className="lg:w-5/12 mr-auto lg:my-32">
        <h5 className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.RLTitle")}
        </h5>

        <p className=" font-jost  md:text-xl lg:text-2xl  mb-5">
          {t("biography.RLDesc")}
        </p>
      </div>
      {/* Tatto Image */}
      <div className="lg:flex ">
        <img src={img8} alt="" />
        <img src={img9} alt="" />
      </div>
      <p className="font-jhost text-sm  md:text-lg mt-5  italic mb-10">
        {t("biography.TattooCaption")}
      </p>
      <p className="lg:w-4/5 ml-auto font-jost  md:text-xl lg:text-2xl  ">
        {" "}
        {t("biography.endSection")}
      </p>
    </div>
  );
};

export default Biography;
