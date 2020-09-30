import React from 'react'
import {  createMuiTheme } from '@material-ui/core'


//CSS Styles

const theme = createMuiTheme({
  typography: {
    fontFamily: 'BlinkMacSystemFont',
    fontSize: 20,
    fontWeightMedium: 800

  },
  palette: {
    primary: {
      main: '#fbffff'
    }
  }
})


const Navbar = () => {
  return (

    <div>
      <a  href='#About'> About </a>
      <a href='#Projects'> Projects </a>
      <a href='#Technologies'> Technologies </a>
      <a href='#Contact'> Contact </a>
    </div>

  )
}


export default Navbar
