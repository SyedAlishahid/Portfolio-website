import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx'
import Projects from './Projects.jsx';
import Contact from './Contact.jsx'
function App() {

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Projects/>
     <Contact />
    </>
  )
}

export default App
