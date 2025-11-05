import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbFidgetSpinner } from "react-icons/tb";

const Footer = () => {
  const { t } = useTranslation("global");
  const [loading, setLoading] = useState(false);

  return (
    <footer className="">
      <div className="footer lg:container mx-auto  px-4  py-10  lg:px-12  sm:footer-horizontal bg-neutral text-neutral-content items-center  w-full">
        <aside className=" w-full">
          <div className=" w-full">
            <p className="font-jhost font-light text-2xl mb-4 ">
              {t("footer.subtitle")}:
            </p>

            <form className=" flex  flex-col gap-2">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("footer.input.name")}
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 text-black border-none bg-white border rounded-lg focus:outline-none focus:ring-2  focus:ring-stone-500"
                  placeholder={t("footer.input.namePlaceholder")}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("footer.input.email")}
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 text-black border-none bg-white border rounded-lg focus:outline-none focus:ring-2  focus:ring-stone-500"
                  placeholder={t("footer.input.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  {t("footer.input.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-2 text-black border-none bg-white border rounded-lg focus:outline-none focus:ring-2  focus:ring-stone-500"
                  placeholder={t("footer.input.messagePlaceholder")}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-6  border text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                {loading ? (
                  <TbFidgetSpinner className="text-xl text-white animate-spin m-auto" />
                ) : (
                  t("footer.input.submit")
                )}
              </button>
            </form>
          </div>
        </aside>
        <nav className=" gap-10 items-center text-center md:justify-self-end  md:text-left w-full md:w-auto">
          {/* Subscribe */}
          <div className="flex flex-col items-center w-full md:items-start">
            <h3 className="text-xl font-semibold mb-4 tracking-wide  text-white">
              {t("footer.subscribe.title")}
            </h3>

            {/* YouTube Subscribe Button */}
            <a
              href="https://www.youtube.com/@NomadBlackSheep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-white/90 text-black font-medium hover:bg-white transition-all duration-300 hover:scale-105 shadow-md border border-transparent hover:border-primary"
            >
              <img
                src="https://yt3.googleusercontent.com/WMyL7etEwqMaDQxsA2BWc9lpvm4hUjpsvRPDFWOGSa3D_QrAYwrnThDuzavd8rBwO3bXl972vA=s160-c-k-c0x00ffffff-no-rj"
                alt="YouTube"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-base font-semibold">Nomad Black Sheep</span>
            </a>

            {/* Merchandise Button */}
            <a
              href="/merchandise"
              className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-white text-black font-medium  transition-all duration-300 hover:scale-105 shadow-md"
            >
              🛍️ {t("footer.subscribe.merchandise")}
            </a>
          </div>

          {/* Partners */}
          <div className="flex flex-col items-center w-full ">
            <h3 className="text-xl font-semibold mb-4 tracking-wide text-white">
              {t("footer.partners.title")}
            </h3>
            <ul className="text-stone-300 text-center space-y-2 text-sm">
              <li className="hover:text-white transition-colors duration-300">
                Éditions Lola Valérie Stein
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Étienne Éthaire
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
