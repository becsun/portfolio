import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import Typed from 'react-typed'


const useStyles = makeStyles(theme => ({
  container: {
    position: 'absolute',
    top: '150%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    color: 'white'
  },
  text: {
    color: 'white'
  }
}))



const AboutMe = () => {

  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>
          <Typed strings={['About Me']}
            typeSpeed={100}
          />
        </Typography>
        <Typography className={classes.text}>
        After a great experience of 16 years as a hairdresser, I’m ready to take a leap into an exciting career as a Software Engineer.
While hairdressing, compelled by my eternal love for food, I started a side hustle in the food industry, called House of Hong. This showed me that I am able to work in diverse ways and that many of my everyday skills were transferable and could ultimately lead to success.

My interest in the tech industry was inspired by my friends who are developers as well as my clients, when speaking passionately about projects they were working on. Enrolling into GA’s Immersive programme was the next step into breaking into industry.

With this change in career I know I can bring skills I’ve learnt managing salons and the food stall into the tech industry. I’m looking forward to being challenged and continually learning new skills that will help me thrive.
        </Typography>


      </Box>

    </>
  )
}

export default AboutMe
