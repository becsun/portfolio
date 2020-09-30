import React from 'react'
import { Typography, Box, makeStyles } from '@material-ui/core'
import Typed from 'react-typed'
import ScrollableAnchor from 'react-scrollable-anchor'

//CSS Styles
const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vh',
    textAlign: 'center'
  },
  title: {
    h1: '70px',
    color: 'white'

  },
  subtitle: {
    marginBottom: '4rem',
    color: 'white',
    fontSize: '50px'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <ScrollableAnchor id={'Home'}>
      <Box className={classes.container}>
        <Typography className={classes.title} variant="h1">
          <Typed strings={['Bec Sun']}
            typeSpeed={100}
          />
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant="h3">
          <Typed strings={['Junior', 'Full Stack', 'Developer']}
            typeSpeed={70}
            backspeed={60}
            loop
          />
        </Typography>
      </Box>
    </ScrollableAnchor>


  )
}



export default Home
