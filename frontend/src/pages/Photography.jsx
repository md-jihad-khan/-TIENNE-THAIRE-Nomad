import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/Travel/image1.jpg";
import photoCameraSticker from "../assets/photo_camera_sticker.png";
import globeSticker from "../assets/globe_sticker.png";
import twemoji from "twemoji";
import { useTranslation } from "react-i18next";

const Photography = () => {
  const { t } = useTranslation("global");
  const travelData = t("TravelData", { returnObjects: true }) || [];

  // Helper function to render flag emojis as Twemoji images
  const renderFlag = (flag) => {
    if (!flag) return "";
    try {
      // Handle both default and property-based export
      const parse = twemoji.parse || twemoji;
      return parse(flag, {
        folder: "svg",
        ext: ".svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/",
      });
    } catch (e) {
      return flag;
    }
  };

  return (
    <div className=" py-10">
      <div className="text-center mb-10">
        <h2 className="relative inline-block font-semibold font-eb-garamond text-3xl md:text-7xl text-primary uppercase">
          Photographie et Voyages
          <img src={photoCameraSticker} className="absolute -top-6 -left-16 w-20 h-20 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none -rotate-12" alt="" />
          <img src={globeSticker} className="absolute -top-10 -right-20 w-24 h-24 mix-blend-multiply contrast-125 brightness-[1.15] opacity-90 pointer-events-none rotate-12" alt="" />
        </h2>
      </div>
      <div className="font-jost  md:text-xl lg:text-2xl   lg:w-10/12 ">
        <p className="mb-5 ">
          Autant le dire d’emblée, je ne suis pas photographe professionnel,
          loin de là. Dans ma jeunesse, je voyageais même sans caméra,
          j’achetais de temps en temps un Kodak jetable dans un kiosque à
          souvenirs, et cette merde en carton me suffisait puisqu’importaient
          seulement le Cinéma et la Littérature, avec un grand C et un grand L.
          Je n’accordais pas le statut de la majuscule à la photographie, je ne
          comprenais même pas qu’une image fixe, au-delà de sa possible
          esthétique, raconte aussi une histoire. Quel idiot! Aujourd’hui, je me
          corrige: la Photographie mérite un P immense. Elle fixe le temps, ce
          qui est pure magie pour un rêveur qui voudrait vivre éternellement.
        </p>
        <p className="mb-5 ">
          Avec l’expérience, avec l’accessibilité d’un matériel performant, je
          me suis progressivement amélioré en cadrage et en technique. Et quand
          j’ai découvert les logiciels de retouches numériques, ce fut un game
          changer, l’intervention divine qui, soudain, rendait “au moins presque
          belles” toutes mes anciennes photos ratées. Aujourd’hui, le miracle se
          poursuit grâce à l’intelligence artificielle.
        </p>
        <p className="mb-5 ">
          Ainsi, la photographie est devenue mon arme de globe-trotter. Je ne me
          sépare plus de ma caméra dernier cri, intégrée au téléphone, glissée
          dans la poche pour plus d’aisance. Les nouveaux portables sont devenus
          tellement performants qu’il est possible de voyager léger, en traînant
          une valise à roulettes, bref “on the road again”, mais selon le slogan
          beatnik ressuscité à la mode bourgeoise du XXIe siècle. La caméra
          numérique et Photoshop ont ainsi remplacé le cahier à spirales dans la
          poche. Derrière, la philosophie reste la même: celle d’un mouton noir
          nomade qui cherche la rencontre avec d'autres gens, d'autres cultures,
          d'autres paysages…
        </p>
        <p className="mb-5 ">
          Et la photographie est devenue le cordon ombilical entre mes racines
          et mes traces d’exil. Car il y a une multitude d’ailleurs, mais il y a
          aussi Liège, home sweet home, case natale aimée.
        </p>
      </div>

      <div className=" my-20 grid grid-cols-2 gap-10 items-center">
        <div>
          <img className="  " src={img1} alt="" />
          <p className="w-full  font-jhost text-lg italic">
            J’aimerais épingler les pays visités. En attendant, je propose de
            faire un recensement photographique, pays par pays, dans l’ordre
            alphabétique
          </p>
        </div>

        <div className=" text-center ">
          <p className="mb-5 font-bold uppercase text-primary font-jhost md:text-xl lg:text-2xl">
            Citations
          </p>
          <p className="w-full  font-jhost text-lg italic md:text-xl lg:text-xl mb-3">
            "Comme tout ce qui compte dans la vie, un beau voyage est une œuvre
            d'art" <b>André Suarès in Le Voyage de Condottiere.</b>
          </p>
          <p className="w-full  font-jhost text-lg italic md:text-xl lg:text-xl">
            ‘La photographie est une image peinte par le soleil sans instruction
            artistique’ <b> Ambrose Bierce</b>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {travelData.map((country, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              {country.country} <span dangerouslySetInnerHTML={{ __html: renderFlag(country.flag) }} />
            </h2>

            <Swiper
              spaceBetween={20}
              slidesPerView={1} // Mobile default
              navigation
              modules={[Navigation, Pagination]}
              className=" w-full swiper-custom-theme"
            >
              {country.photos.map((photo, pIndex) => (
                <SwiperSlide key={pIndex}>
                  <div className="flex flex-col  overflow-hidden">
                    {/* Image */}
                    <img
                      src={photo.src}
                      alt={photo.caption || `${country.country} photo`}
                      className="w-full  object-cover aspect-video rounded-xl"
                    />

                    {/* Caption below image */}
                    {photo.caption && (
                      <p className="mt-3 text-center text-gray-700 text-[9px] font-medium ">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
