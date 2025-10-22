import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer lg:container mx-auto  px-4  pb-2  lg:px-12  sm:footer-horizontal bg-neutral text-neutral-content pt-10">
        <aside className="grid-flow-row gap-9 items-center">
          <h3 className="font-semibold text-lg md:text-3xl tracking-widest font-jomhuria ">
            ÉTIENNE ÉTHAIRE
          </h3>

          <div className=" ">
            <p className="font-jhost font-light text-2xl mb-4 ">CONTACT ME:</p>

            <div className="max-w-6xl mx-auto flex flex-col  justify-between   gap-2">
              {/* Address */}
              <div className="flex items-center gap-3 text-lg">
                <FaMapMarkerAlt />
                <span>41 Pilgrm Avenue, California, US</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-lg">
                <FaPhone />
                <span>+01234 567 890</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-lg">
                <FaEnvelope />
                <span>info@agency.com</span>
              </div>
            </div>
          </div>
        </aside>
        <nav className="grid-flow-row   md:justify-self-end">
          <p className="font-jhost font-light text-2xl mb-3 ">VISIT MY:</p>

          <div className="grid grid-cols-2 gap-2 font-eb-garamond relative">
            <a
              className="py-1 px-6 rounded-4xl border-[1px] border-white "
              rel="stylesheet"
              href=""
            >
              YOUTUBE
            </a>
            <a
              className="py-1 px-6 rounded-4xl border border-white relative -bottom-2 right-0"
              rel="stylesheet"
              href=""
            >
              INSTAGRAM
            </a>
            <a
              className="py-1 px-6 rounded-4xl border border-white"
              rel="stylesheet"
              href=""
            >
              FACEBOOK
            </a>
            <a
              className="py-1 px-6 rounded-4xl border border-white relative -bottom-2 right-0 text-center"
              rel="stylesheet"
              href=""
            >
              X
            </a>
          </div>
        </nav>
      </div>
      <div className=" text-white flex justify-center items-center p-0 overflow-hidden relative mt-3 lg:mt-0">
        <h1
          className="font-eb-garamond font-bold text-center uppercase  relative lg:-bottom-9"
          style={{
            fontSize: "10.5vw", // makes the text width scale with viewport
            whiteSpace: "nowrap", // prevent wrapping to next line
          }}
        >
          ÉTIENNE ÉTHAIRE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
