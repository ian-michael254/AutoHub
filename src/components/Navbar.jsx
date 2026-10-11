import { Assets } from "../assets/assets";


const Navbar = () => {
  return (
    <header className="bg-emarald-800 text-slate-700 p-4">
        <nav className="flex justify-between items-center">
            <div>
                <img className="w-16" src="" alt="...." />
            </div>
            <div>
                <ul className="flex items-center gap-5 w-full">
                    <li>
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Home</a>
                    </li>
                     <li> 
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Fleet</a>
                    </li>
                     <li>
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Services</a>
                    </li>
                     <li>
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Garage</a>
                    </li>
                     <li>
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Store</a>
                    </li>
                     <li>
                        <a className=" font-semibold hover:text-gray-400 hover:transition-all delay-200 duration-200" href="http://" target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="px-2 py-1 w-24 border-none rounded-md bg-amber-900 cursor-pointer text-amber-50 font-semibold hover:bg-amber-600 hover" type="button">Sign In</button>
            </div>
        </nav>
        

    </header>
    
        
  )
}

export default Navbar;