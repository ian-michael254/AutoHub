import Navbar from "./components/Navbar"
import Featured from "./pages/Featured"
import Hero from "./pages/Hero"


const App = () => {
  return (
   <div className="bg-slate-100 h-screen">
    <Navbar />
    <Hero />
    <Featured />

   </div>
  )
}

export default App