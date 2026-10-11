import { Assets } from "../assets/assets";

const Hero = () => {
  return (
    <section id="#hero" className=" px-4 py-2 h-11/12">
      <div className="w-3/4  px-4 py-2 mx-auto">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-6xl mb-2 font-semibold tracking-wide text-center">Find your next vehicle with confidence in Kenya</h1>
          <p className="text-xl mt-4 mb-2 font-light text-center w-1/2">
            Discover, compare, and purchase verified vehicles from trusted
            dealers. Every car is inspected and priced fairly in KES.
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="bg-rose-800 text-white font-semibold mt-2 px-4 py-2 border-none rounded-md" type="button">Explore</button>
          <button className="bg-slate-800 text-white font-semibold mt-2 px-4 py-2 border-none rounded-md" type="button">Contact Us</button>
        </div>
       
      </div>
       <div className="w-full h-1/2 object-cover bg-pink-400 mx-auto mt-4">
       <img className="w-full h-full object-cover" src={Assets.Hero} alt="Toyota Landcruiser 2025" />
           
        </div>
    </section>
  );
};

export default Hero;
