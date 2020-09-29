import React from 'react'
import { Box , Link , makeStyles , Typography ,ThemeProvider, createMuiTheme } from '@material-ui/core'
import ScrollableAnchor from 'react-scrollable-anchor'


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
  // const classes = useStyles()
  return (

    <div>
      <a href='#About'> About </a>
      <a href='#Projects'> Projects </a>

      <ScrollableAnchor id={'About'}>
        <div> Hello World </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'Projects'}>
        <div> How are you world? </div>
      </ScrollableAnchor>
    </div>
      
  )
}

export default Navbar
