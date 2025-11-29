import img1 from "../../assets/Intro/image1.jpg";

const Introduction = () => {
  return (
    <div className="my-10 ">
      {" "}
      <h2 className="font-eb-garamond text-3xl md:text-6xl md:text-center text-primary  mb-10">
        Introduction
      </h2>
      <p className="font-jost text-md md:text-xl md:text-center mt-5 italic">
        ‘La photographie est une image peinte par le soleil sans instruction
        artistique’, <b>Ambrose Bierce</b>
      </p>
      <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
        Autant le dire d’emblée, je ne suis pas photographe professionnel, loin
        de là. Dans ma jeunesse, je voyageais même sans caméra, j’achetais de
        temps en temps un Kodak jetable dans un kiosque à souvenirs, et cette
        merde en carton me suffisait puisqu’importaient seulement le Cinéma et
        la Littérature, avec un grand C et un grand L. Je n’accordais pas le
        statut de la majuscule à la photographie, je ne comprenais même pas
        qu’une image fixe, au-delà de sa possible esthétique, raconte aussi une
        histoire. Quel idiot! Aujourd’hui, je me corrige: la Photographie mérite
        un P immense. Elle fixe le temps, ce qui est pure magie pour un rêveur
        qui voudrait vivre éternellement.
      </p>
      <div className="grid mt-5 items-center grid-cols-4 gap-10">
        <div className="col-span-3">
          <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
            Avec l’expérience, avec l’accessibilité d’un matériel performant, je
            me suis progressivement amélioré en cadrage et en technique.
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
            Et quand j’ai découvert les logiciels de retouches numériques, ce
            fut un game changer, l’intervention divine qui, soudain, rendait “au
            moins presque belles” toutes mes anciennes photos ratées.
            Aujourd’hui, le miracle se poursuit grâce à l’intelligence
            artificielle.
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
            Ainsi, la photographie est devenue mon arme de globe-trotter. Je ne
            me sépare plus de ma caméra dernier cri, intégrée au téléphone,
            glissée dans la poche pour plus d’aisance.
          </p>
        </div>
        <img className="rounded-2xl" src={img1} alt="" />
      </div>
      <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
        Les nouveaux portables sont devenus tellement performants qu’il est
        possible de voyager léger, en traînant une valise à roulettes, bref “on
        the road again”, mais selon le slogan beatnik ressuscité à la mode
        bourgeoise du XXIe siècle. La caméra numérique et Photoshop ont ainsi
        remplacé le cahier à spirales dans la poche. Derrière, la philosophie
        reste la même: celle d’un mouton noir nomade qui cherche la rencontre
        avec d'autres gens, d'autres cultures, d'autres paysages…
      </p>
      <p className="font-jost  md:text-xl lg:text-2xl mt-5 ">
        Et la photographie est devenue le cordon ombilical entre mes racines et
        mes traces d’exil. Car il y a une multitude d’ailleurs, mais il y a
        aussi Liège, home sweet home, case natale aimée.
      </p>
    </div>
  );
};

export default Introduction;
