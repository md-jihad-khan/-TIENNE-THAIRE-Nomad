import img1 from "../assets/NBS/image1.jpg";
import img2 from "../assets/NBS/image2.jpg";
import img3 from "../assets/NBS/image3.png";
import img4 from "../assets/NBS/image4.jpg";
import img5 from "../assets/NBS/image5.jpg";

const NBS = () => {
  return (
    <div className="my-10">
      <h2 className="font-eb-garamond text-3xl md:text-5xl md:text-center text-primary mb-10">
        NOMAD BLACK SHEEP PRODUCTIONS
      </h2>

      <p className="font-jost text-md md:text-xl md:text-center mt-5 italic">
        “La pire des lâchetés, c’est la conformité. Même un poisson mort peut
        suivre le courant.”
        <b>Jim Hightowe</b>
      </p>
      <p className="font-jost  md:text-center md:text-md lg:text-xl my-5 italic ">
        “Invente-toi et réinvente-toi et reste en dehors du piège de la
        médiocrité... Change de ton et de formes si souvent qu’ils ne pourront
        jamais te mettre dans des cases.”
        <b> Charles Bukowski</b>
      </p>
      <p className="font-jost  md:text-center md:text-md lg:text-xl italic mb-10">
        “J’aime l’art. Et par art, j’entends littérature, musique, peinture…
        mais aussi la cuisine, le sexe, le corps humain… Tout ce qui est beau et
        bon est de l’art pour moi”
        <b> Jean Cocteau</b>
      </p>

      <div className="grid grid-cols-2 gap-10 items-center">
        <p className="font-jost  md:text-xl lg:text-2xl">
          Comme expliqué dans la biographie, le pseudonyme Étienne Éthaire
          laisse désormais progressivement la place au surnom Nomad Black Sheep
          qui a jailli hors d’une peinture miniature d’Ana Serafim et qui s’est
          finalement imposé comme une marque à part entière.
        </p>
        <div>
          <img className="w-1/2 mx-auto" src={img4} alt="" />
          <p className="font-jhost text-sm md:text-lg ml-auto italic mt-5">
            Cette peinture est devenue le premier logo de ma chaîne Youtube
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center mt-20">
        <div>
          <img className=" mx-auto" src={img3} alt="" />
        </div>
        <p className="font-jost  md:text-xl lg:text-2xl col-span-2">
          Au départ, j’ai fondé la chaîne Youtube Nomad Black Sheep avec Colombe
          Akimana, une monteuse vidéo particulièrement douée. Nous étions deux
          monteurs… Mais, dès les premiers clips musicaux, nos goûts et nos
          talents respectifs ont façonné nos missions. Colombe s’est
          naturellement spécialisée dans le montage où sa technique excelle. Et,
          de mon côté, j’ai naturellement pris le contrôle du management
          artistique où mon sens critique, mon degré d’exigence et ma culture
          générale servent de guidance. Enfin, bref, je ne vais pas retracer ici
          l’historique de ce qui est vite devenu une maison de production à part
          entière. Ma biographie évoque déjà la genèse et l’évolution d’un
          projet qui est de toute façon présenté en détail sur le site Nomad
          Black Sheep.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center mt-20">
        <p className="font-jost  md:text-xl lg:text-2xl ">
          Au départ, j’ai fondé la chaîne Youtube Nomad Black Sheep avec Colombe
          Akimana, une monteuse vidéo particulièrement douée. Nous étions deux
          monteurs… Mais, dès les premiers clips musicaux, nos goûts et nos
          talents respectifs ont façonné nos missions. Colombe s’est
          naturellement spécialisée dans le montage où sa technique excelle.{" "}
          <br /> Et, de mon côté, j’ai naturellement pris le contrôle du
          management artistique où mon sens critique, mon degré d’exigence et ma
          culture générale servent de guidance.
        </p>
        <div>
          <img className="w-2/3 mx-auto" src={img1} alt="" />
        </div>
      </div>
      <p className="font-jost  md:text-xl lg:text-2xl mt-10 ">
        Enfin, bref, je ne vais pas retracer ici l’historique de ce qui est vite
        devenu une maison de production à part entière. Ma biographie évoque
        déjà la genèse et l’évolution d’un projet qui est de toute façon
        présenté en détail sur le site Nomad Black Sheep.
      </p>
      <p className="font-jost  md:text-xl lg:text-2xl mt-10 ">
        Ce préambule étant clarifié, je voudrais présenter mon objectif
        personnel à travers Nomad Black Sheep. Après des années d’intense
        créativité et de voyages à travers le monde, mon souhait est désormais
        de devenir davantage producteur qu’artiste. Mon plaisir se nourrit de la
        volonté d’offrir une plate-forme d’expression à de jeunes créateurs que
        ceux-ci soient écrivains (le projet Éditions Lola Valérie Stein),
        vidéastes, photographes, designers ou webmasters.
      </p>
      <div className="grid grid-cols-3 gap-10 items-center mt-20">
        <div>
          <img className=" mx-auto" src={img2} alt="" />
          <p className="font-jhost text-sm  ml-auto italic mt-5">
            Les autoritarismes démontrent la faiblesse de gens aux idées aussi
            étroites que leurs cerveaux. Voilà en somme ce que clame cette image
            qui correspond à l’état d’esprit des Nomad Black Sheeps.
          </p>
        </div>
        <div className="col-span-2">
          <p className="font-jost  md:text-xl lg:text-2xl col-span-2 mb-5 ">
            Dans l’idéal, j’aimerais même étendre ces activités de production au
            cinéma et à la musique, mais à ce stade, il faut rester réaliste:
            Nomad Black Sheep ne dispose pas des moyens nécessaires pour assumer
            une production de qualité dans ces domaines. L’exigence de qualité
            est la priorité absolue et ne permet actuellement pas de se
            disperser davantage.
          </p>
          <p className="font-jost  md:text-xl lg:text-2xl col-span-2 mb-5 ">
            Ensuite, un second objectif dépasse mon ambition personnelle et
            rejoint celle d’une collectivité d’artistes désormais regroupés sous
            le label Nomad Black Sheep. Il s’agit d’un objectif sociétal qui
            représente des valeurs et illustre des combats de plus en plus
            nécessaires dans une société où les frontières, les nationalismes,
            les revendications identitaires et les abus de pouvoir font
            davantage que nous effrayer.
          </p>
        </div>
      </div>
      <p className="font-jost  md:text-xl lg:text-2xl mt-10 ">
        Que ce soit clair: Nomad Black Sheep ne fait pas de politique. Ni de
        droite, ni de gauche, un mouton noir déteste autant les fascismes, les
        communismes, les intégrismes, tous les autoritarismes volontairement
        cités ici au pluriel. Il ne marche jamais au pas, il ne souscrit à
        aucune idéologie. Il traverse le monde, à sa guise et à son rythme, en
        luttant pour toutes les libertés d’expression, pour l’égalité des genres
        et pour un art débarrassé des volontés de censure qui sévissent au
        détour de ses vertes prairies..
      </p>
      <div className="grid grid-cols-2 gap-10 items-center mt-0">
        <p className="font-jost  md:text-xl lg:text-2xl ">
          Il y a des dizaines de façons d’être un mouton noir. Si l’état
          d’esprit affiché sur cette page vous touche, si “liberté”, “tolérance”
          et “générosité” figurent parmi vos mots préférés du dictionnaire,
          alors, nous pouvons travailler ensemble et construire des passerelles.
          De notre côté, notre promesse sera de maintenir un standard de qualité
          professionnelle et de pratiquer des prix accessibles. À vous de jouer
          pour le début d’une collaboration.
        </p>
        <div>
          <img className="w-2/3 mx-auto" src={img5} alt="" />
          <p className="font-jhost text-sm md:text-sm ml-auto italic mt-2">
            Nous vivons dans une société de plus en plus normée, où il faut
            lisser toutes les aspérités, tout ce qui dépasse. Nous faisons face
            à la bien-pensance et au politiquement correct. Nous faisons face au
            manque de gentillesse, au manque de solidarité, au manque de
            générosité. À ces constats terrifiants, nous opposons ce “Fuck
            normality” comme un slogan amusant et iconoclaste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NBS;
