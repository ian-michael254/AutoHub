import { Assets } from "../assets/assets"


const Featured = () => {
  return (
    <section id="#featured" className="px-4 py-2 bg-violet-200 w-full h-auto mt-2">
        <h2 className="text-center font-light text-lg mb-2 tracking-wide">Featured</h2>
        <h3 className="text-center font-bold text-4xl tracking-wider mb-2">Vehicles</h3>
        <p className="text-center font-light text-xl tracking-wider mb-4">Popular cars ready for delivery across Kenya today.</p>
        <div className="w-10/12 h-auto px-4 py-2 mx-auto bg-gray-400 flex justify-between items-center">
        <div className="w-96 bg-green-300 flex flex-col">
        <img src={Assets.Hero} alt="vehicle 1" />
        <h4 className="text-center font-semibold text-lg">Toyota Landcruiser 2025</h4>
        <p className="text-sm font-light wrap-break-word text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quasi natus quo esse, repellendus, sint necessitatibus corporis sapiente ex dolorum fugiat officia eum, unde hic quis fugit. Tenetur, culpa natus.</p>
        <button className="w-auto p-2 bg-red-100 text-center text-sm mt-2 cursor-pointer " type="button">Purchase</button>

        </div>
         <div className="w-96 bg-green-300 flex flex-col">
        <img src={Assets.Hero} alt="vehicle 1" />
        <h4 className="text-center font-semibold text-lg">Toyota Landcruiser 2025</h4>
        <p className="text-sm font-light wrap-break-word text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quasi natus quo esse, repellendus, sint necessitatibus corporis sapiente ex dolorum fugiat officia eum, unde hic quis fugit. Tenetur, culpa natus.</p>
        <button className="w-auto p-2 bg-red-100 text-center text-sm mt-2 cursor-pointer " type="button">Purchase</button>

        </div>
         <div className="w-96 bg-green-300 flex flex-col">
        <img src={Assets.Hero} alt="vehicle 1" />
        <h4 className="text-center font-semibold text-lg">Toyota Landcruiser 2025</h4>
        <p className="text-sm font-light wrap-break-word text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quasi natus quo esse, repellendus, sint necessitatibus corporis sapiente ex dolorum fugiat officia eum, unde hic quis fugit. Tenetur, culpa natus.</p>
        <button className="w-auto p-2 bg-red-100 text-center text-sm mt-2 cursor-pointer " type="button">Purchase</button>

        </div>
            

        </div>
        
    </section>
  )
}

export default Featured