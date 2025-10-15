import img1 from "../assets/Home/2.webp";
import img2 from "../assets/Home/Home1.png";

const Home = () => {
  return (
    <section className=" h-full w-full rounded-2xl bg-gradient-to-t from-transparent to-gray-100 ">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center justify-center ">
        <div className="relative">
          <h1 className="text-6xl text-black lg:absolute top-3 left-3 font-bold playfair-display max-w-md">
            ÉTIENNE <br /> ÉTHAIRE
          </h1>
        </div>
        <div className="relative">
          <div className=" h-full  grayscale-100 mx-auto w-fit">
            <img
              src={img2}
              alt=""
              className="h-80  grayscale w-full object-cover mask-gradient"
            />
          </div>
        </div>
        <div className="relative">
          <p className="text-2xl  lg:absolute top-3 right-3 cormorant-garamond max-w-md text-right leading-snug">
            Auteur, Écrivain, Photographe, Vidéaste, Manager artistique,
            Voyageur…
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
