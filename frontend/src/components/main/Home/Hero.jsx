import { motion } from "framer-motion";
// import img2 from "../../../assets/Home/home1.png";
import img1 from "../../../assets/Home/2.webp";
import img2 from "../../../assets/Home/0.webp";
import img3 from "../../../assets/Home/1.webp";
import img4 from "../../../assets/Home/et.png";
import plane from "../../../assets/Home/plane.png";
import pen from "../../../assets/Home/pen.png";
import video from "../../../assets/Home/video.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b  ">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Side: Image Section */}
          <div className="w-full lg:w-1/2 ">
            <div className="w-full h-full px-4">
              <div className="flex justify-between items-center gap-0 -mx-3 sm:-mx-4">
                <motion.div
                  className="relative "
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  {/* <div className="py-3 sm:py-4">
                    <img
                      src={img2}
                      alt=""
                      className="w-full drop-shadow-xl rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={img3} alt="" className="w-full rounded-2xl" />
                  </div> */}
                  <motion.img src={img4} alt="" className="" />
                  <motion.img
                    src={plane}
                    alt=""
                    className="absolute top-0"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, -2, 0],
                    }}
                    transition={{
                      duration: 5, // total bounce time
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut", // smooth motion
                    }}
                  />
                  <motion.img
                    src={pen}
                    alt=""
                    className="absolute top-0"
                    animate={{
                      x: [0, 2, 0],
                      rotate: [0, -1, 0],
                    }}
                    transition={{
                      duration: 2, // speed of writing motion
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img
                    src={video}
                    alt=""
                    className="absolute top-0"
                    animate={{
                      x: [0, 2, -2, 1, 0], // tiny horizontal shakes
                      y: [0, -2, 2, -1, 0], // tiny vertical shakes
                      rotate: [0, 0.5, -0.5, 0.3, 0], // slight angle adjustments
                    }}
                    transition={{
                      duration: 10, // slow, natural motion
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  {/* <h1 className="-rotate-90 -left-20   absolute text-4xl  font-bold playfair-display whitespace-nowrap bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    ÉTIENNE ÉTHAIRE
                  </h1> */}
                  <p className="text-xs text-gray-400 w-1/2 text-center absolute -bottom-3 left-1/2 transform -translate-x-1/2 ">
                    <span className="text-primary">Légende :</span>
                    Il faut vivre le plus d’expériences possibles. Le tatouage
                    fait indiscutablement partie de la liste. Photo: © Ana
                    Serafim
                  </p>
                </motion.div>
                {/* <div className="w-2/3 px-3  sm:px-4">
                  <div className="relative z-10 my-4">
                    <img
                      src={img1}
                      alt=""
                      className="w-full drop-shadow-2xl "
                    />
                    <span className="absolute -right-3 -bottom-3 z-[-1] bg-primary h-32 w-32 "></span>
                    <span className="absolute -left-3 -top-3 z-[-1] bg-primary h-32 w-32 "></span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Il faut vivre le plus d’expériences possibles. Le tatouage
                    fait indiscutablement partie de la liste. Photo: © Ana
                    Serafim
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="playfair-display flex items-center text-4xl gap-2 mb-2">
              Hi
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="inline-block origin-bottom "
              >
                👋
              </motion.span>
              I'm,
            </p>
            <h1 className="text-4xl font-bold playfair-display mb-3 text-primary">
              ÉTIENNE ÉTHAIRE
            </h1>
            <h2 className="text-2xl cormorant-garamond font-semibold">
              Auteur, Écrivain, Photographe, Vidéaste, Manager artistique,
              Voyageur…
            </h2>
            <p className=" mt-6 playfair-display text-white  bg-[#5858fc] p-6 rounded-2xl shadow-sm border border-gray-100">
              “Écrivain de l'intimité.” Tel un slogan de marketing web, la
              formule lapidaire résume la pulsion d'une écriture au "Je
              narratif", une pulsion exploratrice de l'âme et des corps.
              Derrière des formes belles et rebelles, libérées tant des
              académies que des laboratoires, mes romans creusent des galeries
              souterraines à la psychologie féminine. Je cherche une parcelle de
              vérité, jamais davantage. Mes personnages ne sont pas des blocs
              monolithiques. Et moi non plus…
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
