import React from 'react'
import { Box , Link , makeStyles , Typography ,ThemeProvider, createMuiTheme } from '@material-ui/core'



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
    <>

      <Box display="flex" m={7} marginLeft={15} marginBottom={0} >


        <Box flexGrow={.3} >
          <Link href="/"  >
            <ThemeProvider theme={theme}>
              <Typography >
              ABOUT
              </Typography>
            </ThemeProvider>
          </Link>
        </Box>

        <Box flexGrow={1}>
          <Link href="/" >
            PROJECTS
          </Link>
        </Box>
        <Box flexGrow={.3}>
          <Link href="/" >
            {/* onClick={handleClick} */}
              TECHNOLOGIES
          </Link>
        </Box>
        <Box flexGrow={.2}>
          <Link href="/" >
            {/* onClick={handleClick} */}
              CONTACT
          </Link>
        </Box>

      </Box>



    </>
  )
}

export default Navbar
