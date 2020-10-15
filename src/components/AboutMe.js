import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ScrollableAnchor from 'react-scrollable-anchor'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'




const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25%',
    color: 'white',
    fontFamily: 'Bungee Shade, cursive',
    fontSize: '50px',
    '@media (max-width:800px)': {
      fontSize: '40px'
    }
  },
  text: {
    color: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
    textJustify: 'justify'
  },
  button: {
    color: 'white',
    marginTop: '10%'
  }
})

const AboutMe = () =>  {

  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>
          About Me
        </Typography>
        <br/>
        <ScrollableAnchor id={'About'}>
          <Typography className={classes.text}>
          Hey! I’m Bec. Software Engineer, Stylist and Supper Club lover.
          Starting my career as a hairdresser 16 years ago, I’ve recently pivoted my career and graduated from the General Assembly Full Stack Immersive course ready to start my journey as a Software Engineer.

            <br/>
            <br/>
            I love working in multicultural and multidisciplinary teams and am ready to hit the ground running (another thing I love to do) in the tech industry.
            I love to chat, so drop me an email so we can get to know each other!
          </Typography>
        </ScrollableAnchor>
        <Typography className={classes.title}>
          Interests
        </Typography>
        <Typography className={classes.text}>
          As an Aussie I’ve grown up exploring the outdoors in the sunshine. Hiking, running and cycling are all ways that I love to get outside and keep active. Love those endorphins!

          Moving over to London, I’ve had the chance to explore even further afield. My goal over the past 2 years was to visit a new city in a different country each month - and I achieved it!

          My favourite thing about travelling is the food. Sights, sounds and smells that show you the true culture of a place.
          I’ve always loved food and cooking. It’s one of the best ways to immerse yourself like a local and taking cooking classes gives you one of the best souvenirs you can find
        </Typography>
      
        <IconButton  className={classes.button} href='#Home'size="large" aria-label="up">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </>
  )
}



export default AboutMe
