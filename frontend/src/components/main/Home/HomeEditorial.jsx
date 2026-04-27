import { useTranslation } from "react-i18next";
import img1 from "../../../assets/Home/2.webp";
import img2 from "../../../assets/Home/3.webp";

const HomeEditorial = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mb-8 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-4">
        {/* Left Image Section */}
        <div className="md:col-span-3">
          <div className="relative group">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
              <p className="font-jost text-[8px] md:text-[10px] opacity-40 group-hover:opacity-100 hover:text-xs transition-all duration-300 text-[#0c331c]">
                © Ana Serafim
              </p>
            </div>
            <img
              className="rounded-xl w-full object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
              src={img1}
              alt=""
            />
            <p className="font-jost text-[10px] md:text-xs opacity-60 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic mt-2 text-left leading-tight">
              {t("home.heroCaption")}
            </p>
          </div>
        </div>

        {/* Content Section with Integrated Image */}
        <div className="md:col-span-9">
          <div className="font-jost  ml-auto md:text-xl lg:text-2xl">
            <p className="mb-6">
              {t("home.carouselDescription")}
            </p>

            <div className="clearfix">
              {/* Image 2 floated right within the second paragraph */}
              <div className="float-right w-1/2 md:w-1/3 ml-6 mb-4  relative group">
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                  <p className="font-jost text-[8px] md:text-[10px] opacity-40 group-hover:opacity-100 hover:text-xs transition-all duration-300 text-[#0c331c]">
                    © Ana Serafim
                  </p>
                </div>
                <img
                  className="rounded-xl w-full object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
                  src={img2}
                  alt=""
                />
                <p className="font-jost text-[10px] md:text-xs opacity-60 hover:opacity-100 hover:text-sm md:hover:text-base transition-all duration-300 italic mt-2 text-left leading-tight">
                  {t("home.lastSectionCaption")}
                </p>
              </div>

              <p className="font-jost  ml-auto md:text-xl lg:text-2xl">
                {t("home.lastSectionDescription")} {t("home.finalDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEditorial;
