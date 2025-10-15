import { motion } from "framer-motion";
import imgGroup from "../../../assets/Home/0.webp";

const Escape = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 px-6 py-16">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={imgGroup}
          alt="Étienne Éthaire talking with people"
          className="w-full h-auto rounded-2xl grayscale object-cover"
        />
      </motion.div>

      {/* Right - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center  text-lg md:text-xl cormorant-garamond italic max-w-4xl mx-auto text-gray-700 leading-relaxed">
          S’échapper de la littérature, de sa prison schizophrénique (entre mon
          "Je" réel et mon "Je" imaginaire) est dès lors devenu une question de
          survie. J’ai d’abord trouvé un exutoire dans des écrits de type
          documentaire, y abordant quelques thèmes de prédilection tels que le
          cinéma, le rock, le sport… L’horizon s'étend toutefois au-delà des
          histoires racontées à l’encre de clavier…
        </p>
      </motion.div>
    </section>
  );
};

export default Escape;
