import React from "react";
// --- Image Imports ---
import Modern1 from "../../assets/Eroticism/ModernDesires1.jpg";
import Modern2 from "../../assets/Eroticism/ModernDesires2.jpg";
import Modern3 from "../../assets/Eroticism/ModernDesires3.jpg";
import Tattoo1 from "../../assets/Eroticism/TATTOO1.jpg";
import Tattoo2 from "../../assets/Eroticism/TATTOO2.jpg";
import Tattoo3 from "../../assets/Eroticism/TATTOO3.jpg";
import Tattoo4 from "../../assets/Eroticism/TATTOO4.jpg";
import Tattoo5 from "../../assets/Eroticism/TATTOO5.jpg";
import Tattoo6 from "../../assets/Eroticism/TATTOO6.jpg";
import Gaze1 from "../../assets/Eroticism/Gaze1.jpg";
import Gaze2 from "../../assets/Eroticism/Gaze2.jpg";
import Gaze3 from "../../assets/Eroticism/Gaze3.jpg";
import Gaze4 from "../../assets/Eroticism/Gaze4.jpg";
import Chattest1 from "../../assets/Eroticism/CHATTES1.jpg";
import Chattest2 from "../../assets/Eroticism/CHATTES2.jpg";
import Legs1 from "../../assets/Eroticism/Legs1.jpg";
import Legs2 from "../../assets/Eroticism/Legs2.jpg";
import Legs3 from "../../assets/Eroticism/Legs3.jpg";
import Bars1 from "../../assets/Eroticism/BARS1.jpg";
import Bars2 from "../../assets/Eroticism/BARS2.jpg";
import Love1 from "../../assets/Eroticism/love1.jpg";
import Love2 from "../../assets/Eroticism/love2.jpg";
import Love3 from "../../assets/Eroticism/love3.jpg";
import Love4 from "../../assets/Eroticism/love4.jpg";
import Love5 from "../../assets/Eroticism/love5.jpg";
import State1 from "../../assets/Eroticism/State1.jpg";
import State2 from "../../assets/Eroticism/State2.jpg";
import State3 from "../../assets/Eroticism/State3.jpg";
import State4 from "../../assets/Eroticism/State4.jpg";
import State5 from "../../assets/Eroticism/State5.jpg";
import State6 from "../../assets/Eroticism/State6.jpg";
import State7 from "../../assets/Eroticism/State7.jpg";

// Helper function to render a gallery section
const ImageGallerySection = ({ title, images }) => (
  <div className="mb-20">
    <h3 className="text-2xl md:text-4xl font-eb-garamond text-[#0c331c] border-b-2 border-[#0c331c] pb-2 mb-8  tracking-wider">
      {title}
    </h3>
    {/* Modern Grid Layout: Responsive columns, gap, and aspect ratio for uniform images */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {images.map((imgSrc, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg "
        >
          <img
            src={imgSrc}
            alt={`${title}-${index + 1}`}
            className="w-full h-full object-cover transition duration-500 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

const Eroticism = () => {
  // Grouping images based on their names (corresponding to the French phrases)
  const galleryData = [
    {
      title: "DÉSIRS MODERNES", // Modern Desires
      images: [Modern1, Modern2, Modern3],
    },
    {
      title: "TATOUAGE", // Tattoo (Added based on image names)
      images: [Tattoo1, Tattoo2, Tattoo3, Tattoo4, Tattoo5, Tattoo6],
    },
    {
      title: "L’ÉROTIQUE DU REGARD", // The Eroticism of the Gaze
      images: [Gaze1, Gaze2, Gaze3, Gaze4],
    },
    {
      title: "CHATTES", // Female Cats / Slang
      images: [Chattest1, Chattest2],
    },
    {
      title: "JAMBES EN L’AIR", // Legs in the Air
      images: [Legs1, Legs2, Legs3],
    },
    {
      title: "BARS", // Assuming BARS1 refers to a topic like "Bars"
      images: [Bars1, Bars2],
    },
    {
      title: "CERTAINES PENSÉES À PROPOS DE L’AMOUR", // Thoughts about Love
      images: [Love1, Love2, Love3, Love4, Love5],
    },
    {
      title: "L’ÉTAT DE GRÂCE", // The State of Grace
      images: [State1, State2, State3, State4, State5, State6, State7],
    },
  ];

  return (
    <div className="my-10 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <h2 className="font-eb-garamond text-5xl md:text-7xl md:text-center text-primary mb-6">
          Érotisme
        </h2>
        <p className="font-jost text-md md:text-xl md:text-center italic text-gray-600">
          “L’érotisme réside dans la possibilité d’un geste. Il appartient au
          domaine du rêve.” <b>Jean-François Somain</b>
        </p>
        <p className="font-jost text-md md:text-xl md:text-center mt-3 italic text-gray-600">
          “L’érotisme, ce triomphe du rêve sur la nature, est le haut refuge de
          l’esprit de poésie.” <b>Emmanuelle Arsan</b>
        </p>

        <p className="font-jost md:text-xl lg:text-2xl mt-8 text-center text-gray-800 leading-relaxed">
          Autant, je hais la pornographie, reflet répugnant de notre société,
          grossière et vulgaire, autant je vénère l’érotisme, sa délicatesse,
          son invitation à la fête de la vie. Puisque d’admirer la beauté,
          jamais on ne peut se lasser, je vous présente quelques pièces
          maîtresses de ma collection privée.
        </p>
      </header>

      {/* Gallery Sections */}
      <main>
        {galleryData.map((section, index) => (
          <ImageGallerySection
            key={index}
            title={section.title}
            images={section.images}
          />
        ))}
      </main>
    </div>
  );
};

export default Eroticism;
