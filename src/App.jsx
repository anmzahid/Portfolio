import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import PortFolio from "./Components/PortFolio"
import Footer from "./Components/Footer"
import Experiance from "./Components/Experience"
import Contact from "./Components/Contact"
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    
    <>
     <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
   
    </>
  )
}