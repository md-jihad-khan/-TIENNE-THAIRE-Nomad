import { Trans, useTranslation } from "react-i18next";
import rainbow from "../../../assets/Home/rainbow.png";
import bookCover from "../../../assets/Books/LaMuse.jpg";
import authorImage from "../../../assets/Books/LaMuse_Author.jpg";
import { motion, AnimatePresence } from "framer-motion";
import i18next from "i18next";
import { useEffect, useState } from "react";

const LaMuse = () => {
    // Note: Translations are hardcoded as per plan to ensure exact match with request
    const { t } = useTranslation("global");
    const [lang, setLang] = useState(i18next.language);
    const [activeTab, setActiveTab] = useState("auteurs");

    useEffect(() => {
        i18next.on("languageChanged", setLang);
        return () => i18next.off("languageChanged", setLang);
    }, []);

    const getButtonClass = (tabKey) =>
        `px-6 py-2 rounded-full font-medium transition-all duration-300 w-fit
     ${activeTab === tabKey
            ? "bg-primary text-white shadow-xl scale-105 hover:shadow-xl active:scale-95"
            : "border-2 border-green-900 text-primary hover:bg-[#0c331c] hover:!text-white hover:shadow-xl hover:scale-105 active:scale-95"
        }`;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col md:flex-row gap-10"
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-5 w-1/3"
            >
                <div className="relative">
                    <h4 className="font-jost md:text-2xl lg:text-3xl text-primary font-bold uppercase italic relative z-10">
                        La Muse
                    </h4>
                    <img
                        src={rainbow}
                        alt=""
                        className="absolute -top-6 -left-6 w-20 opacity-40 z-0 pointer-events-none"
                    />
                </div>
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    src={bookCover}
                    alt="La Muse Book Cover"
                    className="shadow-xl"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className=" items-start w-3/4"
            >
                <div className="flex flex-wrap gap-3 mb-5">
                    <button
                        className={getButtonClass("auteurs")}
                        onClick={() => setActiveTab("auteurs")}
                    >
                        Les Auteurs
                    </button>

                    <button
                        className={getButtonClass("roman")}
                        onClick={() => setActiveTab("roman")}
                    >
                        Le Roman
                    </button>

                    <button
                        className={getButtonClass("extrait")}
                        onClick={() => setActiveTab("extrait")}
                    >
                        Extrait
                    </button>

                    <button
                        className={getButtonClass("conclusion")}
                        onClick={() => setActiveTab("conclusion")}
                    >
                        Conclusion
                    </button>

                    <button className={getButtonClass("commander")}>
                        Commander
                    </button>
                </div>

                <div className="flex-1 h-[450px]">
                    <AnimatePresence mode="wait">
                        {/* ================= AUTEURS ================= */}
                        {activeTab === "auteurs" && (
                            <motion.div
                                key="auteurs"
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 80 }}
                                transition={{ duration: 0.3 }}
                                className="h-full overflow-y-auto"
                            >
                                <div>
                                    <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                                        Alexandra Apperce
                                    </h4>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-4">LES AUTEURS ET LEUR BIBLIOGRAPHIE</h5>
                                    <p className="font-jost text-lg font-bold mb-4">Étienne Éthaire - Ana Serafim</p>
                                    <img
                                        src={authorImage}
                                        alt="Étienne Éthaire - Ana Serafim"
                                        className="rounded-xl shadow-lg my-6 w-1/3"
                                    />

                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        En vrac, Étienne Éthaire aime les muses et les gourgandines, le cinéma d’auteur et le Standard de Liège, les musiques de sa jeunesse rock et les sons rap ou électro d’aujourd’hui, les plats épicés et les caresses de peau. Plus spécifiquement au niveau littéraire, il cite avec délectation Elfriede Jelinek, Chloé Delaume et bien sûr Marguerite Duras.
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10" style={{ whiteSpace: "pre-line" }}>
                                        En vrac, Ana Serafim aime les voyages et les soirées casanières, le hip hop gangsta et la douceur de vivre, les nénuphars et les couchers de soleil. Plus spécifiquement au niveau pictural, elle cite avec délectation Frida Kahlo et Alexandra Da Fonseca.
                                    </p>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-4">Place de La Muse dans les œuvres d’Étienne Éthaire et d’Ana Serafim</h5>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Étienne Éthaire avait habitué son public à des courts romans écrits au “Je féminin”. Après une absence de treize ans, loin de la littérature, il revient avec un long roman écrit au “Je masculin”. Il prétend que c’est son dernier livre, celui où il dit tout…
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Au début de cette histoire, Ana Serafim était une artiste en devenir qui n’avait pas encore exploité son potentiel. Le roman suit pas à pas son apprentissage et sa transformation progressive en une tatoueuse affirmée.
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-10" style={{ whiteSpace: "pre-line" }}>
                                        La Muse serait donc un croisement: celui d’une carrière qui s’estompe et celui d’une carrière qui démarre… Comme une transmission de témoin.
                                    </p>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-4">Bibliographie</h5>
                                    <ul className="font-jost md:text-xl lg:text-2xl leading-relaxed space-y-2 list-none">
                                        <li>La Langoureuse, Éd. Somnambule Équivoque, 2003</li>
                                        <li>Alissa Lone, Éd. Somnambule Équivoque, 2003</li>
                                        <li>Casting, Éd. Somnambule Équivoque, 2006</li>
                                        <li>Diva Siouxsie, Éd. Camion Blanc, 2007</li>
                                        <li>La Tribu des Rouches, Éd. Luc Pire, 2008</li>
                                        <li>Funérarium, Éd. Somnambule Équivoque, 2009</li>
                                        <li>Patti Smith, la fille de Rimbaud, Éd. Camion Blanc, 2013</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}

                        {/* ================= ROMAN ================= */}
                        {activeTab === "roman" && (
                            <motion.div
                                key="roman"
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 80 }}
                                transition={{ duration: 0.3 }}
                                className="h-full overflow-y-auto"
                            >
                                <div>
                                    <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                                        LE ROMAN
                                    </h4>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-2">Le sujet</h5>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8" style={{ whiteSpace: "pre-line" }}>
                                        Un homme et une femme jouent à cache cache, se cherchent et se fuient, entre amitié, séduction et amour impossible ou interdit. Au travers de la relation forte qui se noue entre eux, naît un questionnement sur l’art et sur le sens de la vie.
                                    </p>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-2">Les thèmes</h5>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8" style={{ whiteSpace: "pre-line" }}>
                                        La Muse descend dans les profondeurs d’une relation entre un homme et une femme qui ont des âges différents, des origines différentes, des passés différents et qui, pourtant, sentent une force les poussant à s’épanouir côte à côte. C’est un livre qui clame un certain bonheur de vivre dans une société aux contours sombres.
                                    </p>

                                    <h5 className="font-jost text-xl font-bold uppercase mb-2">Le ton, le style</h5>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Étienne Éthaire garde sa marque de fabrique avec de percutantes associations de substantifs qui avaient été perçus comme une innovation à la parution de Funérarium. Sans circonvolutions, son phrasé reste donc direct, parfois coupant, parfois lapidaire. Dans ce roman nettement moins dramatique que ses œuvres précédentes, il innove cependant en parsemant sa prose d’éclats de poésie qu’une muse inspirante lui glisse sous la plume. Et parfois, jaillissent de drôles de scènes où l’ironie et l'autodérision de l’auteur font même place à de la pure comédie.
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Au sein du roman, des numéros renvoient à un carnet de dessins dont l’objectif est de montrer le parcours de Florina Soare jusqu’à son premier tatouage professionnel.
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-8" style={{ whiteSpace: "pre-line" }}>
                                        Enfin, une bande-son musicale accompagne leurs voyages incessants.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* ================= EXTRAIT ================= */}
                        {activeTab === "extrait" && (
                            <motion.div
                                key="extrait"
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 80 }}
                                transition={{ duration: 0.3 }}
                                className="h-full overflow-y-auto"
                            >
                                <div>
                                    <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                                        L’extrait
                                    </h4>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mt-5 w-full ">
                                        C’est désarmant de beauté. Je parle du bouquet que Flori est en train de composer. Mais je parle surtout de ce corps longue tige, tout entier capturé par la volonté de bien faire. Pendant qu’elle dessine, elle se situe hors de la gravité terrestre. En apesanteur.
                                        J’atteins la grâce de l’état d’apesanteur aussi, rien qu’à la regarder. L’artiste semble satisfaite de la touche finale, voilà pourquoi elle se permet désormais de relever la tête, de m’adresser un sourire décoché du fond des yeux. Nous partageons un délicieux moment de feeling good. Cette sensation n’est pas un mirage, ce regard si pénétrant le confirme. N’importe quel humain peut forcer un sourire avec la bouche. Avec les yeux, c’est impossible. Un regard, ça ne trompe pas.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* ================= CONCLUSION ================= */}
                        {activeTab === "conclusion" && (
                            <motion.div
                                key="conclusion"
                                initial={{ opacity: 0, x: 80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 80 }}
                                transition={{ duration: 0.3 }}
                                className="h-full overflow-y-auto"
                            >
                                <div>
                                    <h4 className="font-jost md:text-3xl lg:text-4xl text-primary font-bold uppercase italic tracking-wider mb-8">
                                        POUR QUELQUES MOTS DE CONCLUSION
                                    </h4>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Étienne Éthaire a connu ses heures de gloire dans les années 2000. Il a disparu des radars en cherchant, tel un mouton noir nomade, des vertes prairies moins exposées au regard d’autrui. Si on en croit ses paroles, c’est une réapparition éphémère. Si on en croit les méandres de la vie, il y a parfois des surprises…
                                    </p>
                                    <p className="font-jost md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ whiteSpace: "pre-line" }}>
                                        Un jour, Ana Serafim connaîtra inévitablement ses heures de gloire. C’est un peu la promesse de ce roman qui, au-delà d’un talent de dessinatrice, permet de découvrir une personnalité complexe, et toujours attachante.
                                    </p>
                                </div>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LaMuse;
