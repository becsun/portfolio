import React from 'react'
import { Container, Typography, Grid, Box, makeStyles, responsiveFontSizes } from '@material-ui/core'
import Typed from 'react-typed'

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
    responsiveFontSizes: '50px',
    color: 'white'

  },
  subtitle: {
    marginBottom: '4rem',
    color: 'white'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
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

  )
}



export default Home
