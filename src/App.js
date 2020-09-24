import React from 'react'
// import Button from '@material-ui/core/Button'
import Projects from './components/Projects'
import AboutMe from  './components/AboutMe'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import Footer from './components/common/Footer'


const App = () => {
  return (
    <NavBar>
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </NavBar>
  )
}
export default App

