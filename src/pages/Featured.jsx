import { Assets } from "../assets/assets"
import { Vehicle } from "../assets/assets"


const Featured = () => {
  return (
    <section id="#featured" className="px-4 py-2  w-full h-screen">
      <h2 className="text-center font-light text-xl mt-2 lowercase">FEATURED</h2>
      <h3 className="text-center mt-2 font-semibold text-4xl uppercase tracking-widest">Vehicles</h3>
      <p className="font-light text-lg text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, assumenda suscipit. Doloribus omnis cumque, sunt impedit.</p>

      <div className="w-10/12 h-auto px-4 py-2  mx-auto mt-4 flex  justify-between bg-pink-300 items-center gap-2">
        {Vehicle.map((vehicle) => (
          <div key={vehicle.id} className=" w-3/4 bg-pink-100 px-4 py-2 rounded-md relative  hover:bg-slate-500/10 transition-all delay-100 duration-[2500ms]">
            <img className="w-full object-fill" src= {vehicle.img} alt={vehicle.name} />
            <h2 className="text-2xl font-bold mt-2">{vehicle.name}</h2>
            <p className="font-light tracking-wide mt-1 mb-2">{vehicle.description}</p>
            <div>
              <button className="p-1 bg-green-200 w-full rounded-md font-semibold text-lg">View Details</button>
            </div>
            <div className="bg-slate-100/60 rounded-md w-3/4 h-auto absolute bottom-52 my-4 left-20 p-2 flex items-center justify-center gap-6 ">
              <img className="w-6 " src={Assets.Dashboard} alt="" />
              <p className="">{vehicle.mileage}</p>
              <img className="w-6" src={vehicle.fuel} alt="" />
              <p>{vehicle.cosumption}</p>
            </div>

            

          </div>
        ))};
        

      </div>
       

        
        
    </section>
  )
}

export default Featured