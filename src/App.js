import React from 'react'
import { Link, Typography } from '@material-ui/core'

import Projects from './components/Projects'
import AboutMe from  './components/AboutMe'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import Particle from './components/common/Particle'
import Footer from './components/common/Footer'


const App = () => {

  return (

    <div>
      <NavBar/>
      <Particle/>
      <Home />
      <AboutMe />
      <Projects />
      <Footer />


    </div>

  )
}
export default App

