import React from 'react'

import Projects from './components/Projects'
import AboutMe from  './components/AboutMe'
import Home from './components/common/Home'
import Particle from './components/common/Particle'
import Technologies from './components/common/Technologies'
import Footer from './components/common/Footer'


const App = () => {

  return (

    <div>
      <Particle/>
      <Home />
      <AboutMe />
      <Projects />
      <Technologies />
      <Footer />
    </div>
  )
}
export default App

