import { useTranslation } from "react-i18next";
import img1 from "../../assets/Intro/image1.jpg";
import rainbow from "../../assets/Home/rainbow.png";
import photoCameraSticker from "../../assets/photo_camera_sticker.png";

const Introduction = () => {
  const { t } = useTranslation("global");

  // Helper for rendering HTML correctly
  const renderHTML = (text) => {
    if (!text) return { __html: "" };
    const html = text
      .replace(/<bold>/g, '<strong class="font-bold">')
      .replace(/<\/bold>/g, "</strong>")
      .replace(/<italic>/g, '<em class="italic">')
      .replace(/<\/italic>/g, "</em>");
    return { __html: html };
  };

  return (
    <div className="my-10 px-4 max-w-6xl mx-auto">
      <div className="md:text-center mb-10">
        <h2 className="relative inline-block font-eb-garamond text-3xl md:text-6xl text-primary">
          {t("photographyIntro.title")}
          <img
            src={photoCameraSticker}
            className="absolute -top-10 -left-12 md:-left-16 w-16 h-16 md:w-20 md:h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12"
            alt=""
          />
        </h2>
      </div>

      <div className="clearfix">
        <div className="float-right w-1/2 md:w-1/3 lg:w-1/4 ml-6 mb-4 mt-2">
          <img
            className="w-full rounded-2xl shadow-xl"
            src={img1}
            alt="Introduction"
          />
        </div>

        <p
          className="font-jost text-md md:text-xl md:text-center mt-2 mb-6 italic"
          dangerouslySetInnerHTML={renderHTML(t("photographyIntro.quote"))}
        />

        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("photographyIntro.p1")}
        </p>

        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("photographyIntro.p2")}
        </p>

        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("photographyIntro.p3")}
        </p>

        <p className="font-jost md:text-xl lg:text-2xl mb-5">
          {t("photographyIntro.p4")}
        </p>
      </div>

      <p className="font-jost md:text-xl lg:text-2xl mb-5">
        {t("photographyIntro.p5")}
      </p>

      <p className="font-jost md:text-xl lg:text-2xl mb-5">
        {t("photographyIntro.p6")}
        <img
          src={rainbow}
          className="inline-block align-middle ml-4 w-10 h-10 md:w-12 md:h-12 mix-blend-multiply contrast-[1.1] brightness-[1.1] opacity-70 pointer-events-none rotate-45"
          alt=""
        />
      </p>
    </div>
  );
};

export default Introduction;
