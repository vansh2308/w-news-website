import Navbar from "./components/Navbar"
import GridWrapper from "./components/GridWrapper"
import Footer from "./components/Footer"
import { useState } from "react"
import MobileMenu from "./components/MobileMenu"


function App() {
  const [mobileMenuDisplay, setMobileMenuDisplay] = useState(false)
  function handleMobileMenuDisplay(newVal){
    setMobileMenuDisplay(newVal)
  }

  return (
    
    <div className="h-fit w-screen px-24 py-14 max-[850px]:p-5 max-[850px]:pb-20">
      { mobileMenuDisplay && <MobileMenu setMobileMenuDisplay={handleMobileMenuDisplay}/> }

      <Navbar setMobileMenuDisplay={handleMobileMenuDisplay} />
      <GridWrapper />
      <Footer />

    </div>
  )
}

export default App
