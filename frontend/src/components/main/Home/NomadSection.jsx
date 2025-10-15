import { motion } from "framer-motion";
import portrait from "../../../assets/Home/2.webp";

const NomadSection = () => {
  return (
    <section className="grid md:grid-cols-2  items-center gap-8 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative order-1 md:order-2"
      >
        <img
          src={portrait}
          alt="Étienne Éthaire portrait"
          className="w-full  rounded-2xl grayscale object-cover brightness-95"
        />
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-800 order-2 md:order-1"
      >
        <p className="text-center  text-lg md:text-xl cormorant-garamond italic max-w-4xl mx-auto text-gray-700 leading-relaxed">
          En réalité, je me perçois en schizophrène égaré dans cet asile appelé
          ‘Planète Terre’. Mon délire, c’est la quête de l’impossible
          immortalité. J’ai l’obsession de vivre plusieurs vies puisqu’une seule
          ne suffit pas (sincèrement, je pose la question : comment peut-on se
          résoudre à ne vivre qu’une vie, et si courte, de surcroît ?). Alors
          voilà, l’écrivain de l’intimité est devenu un explorateur au long
          cours. Grâce aux voyages, je renais tantôt photographe, tantôt
          vidéaste, tantôt manager artistique… Bien caché sous la laine épaisse
          d’un mouton noir nomade qui vous invite à venir gambader avec lui sur
          les vertes prairies de ce site internet…
        </p>
      </motion.div>
    </section>
  );
};

export default NomadSection;
