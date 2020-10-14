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

        <IconButton  className={classes.button} href='#Home'size="large" aria-label="up">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

    </>
  )
}



export default AboutMe
