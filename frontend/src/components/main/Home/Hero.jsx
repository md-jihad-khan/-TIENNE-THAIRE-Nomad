import { motion } from "framer-motion";
import img2 from "../../../assets/Home/home1.png";
const Hero = () => {
  return (
    <section className="h-full w-full rounded-2xl bg-gradient-to-t from-transparent p-2 to-gray-100 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
        {/* Title */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl text-black lg:absolute top-3 left-3 font-bold playfair-display max-w-md">
            ÉTIENNE <br /> ÉTHAIRE
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="w-full grayscale-100 mx-auto">
            <img
              src={img2}
              alt=""
              className="h-auto grayscale w-full object-cover mask-gradient rounded-xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-2xl lg:absolute bottom-3 right-3 cormorant-garamond max-w-md text-right leading-snug">
            Auteur, Écrivain, Photographe, Vidéaste, Manager artistique,
            Voyageur…
          </p>
        </motion.div>
      </div>
      {/* Artistic statement */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-10 text-lg md:text-xl cormorant-garamond italic max-w-4xl mx-auto text-gray-700 leading-relaxed"
      >
        “Écrivain de l'intimité.” Tel un slogan de marketing web, la formule
        lapidaire résume la pulsion d'une écriture au "Je narratif", une pulsion
        exploratrice de l'âme et des corps. Derrière des formes belles et
        rebelles, libérées tant des académies que des laboratoires, mes romans
        creusent des galeries souterraines à la psychologie féminine. Je cherche
        une parcelle de vérité, jamais davantage. Mes personnages ne sont pas
        des blocs monolithiques. Et moi non plus…
      </motion.p>
    </section>
  );
};

export default Hero;
