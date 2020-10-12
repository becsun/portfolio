import React from 'react'
import { Typography, Box, makeStyles } from '@material-ui/core'
import Typed from 'react-typed'
import ScrollableAnchor from 'react-scrollable-anchor'

//CSS Styles
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    height: '100vh'
  },
  title: {
    display: 'flex',
    fontFamily: 'Bungee Shade, cursive',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontSize: '150px',
    color: 'white',
    width: '100%'
  },
  subtitle: {
    color: 'white',
    fontSize: '75px',
    fontFamily: 'Bungee Shade, cursive',
    width: '100%'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <ScrollableAnchor id={'Home'}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h1">
          <Typed  strings={['Bec Sun']}
            typeSpeed={100}
          />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h3">
          <Typed strings={['Junior', 'Full Stack', 'Developer']}
            typeSpeed={100}
            backspeed={50}
            loop
          />
        </Typography>
      </Box>
    </ScrollableAnchor>

  )
}



export default Home
