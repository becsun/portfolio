import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import Typed from 'react-typed'
import IconButton from '@material-ui/core/IconButton'
import ScrollableAnchor from 'react-scrollable-anchor'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'




const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30%',
    color: 'white',
    fontFamily: 'Bungee Shade, cursive',
    fontSize: '50px'
  },
  text: {
    color: 'white',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
    textJustify: 'justify'
  }
}))

const AboutMe = () =>  {

  const classes = useStyles()
  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>
          <Typed  strings={['About Me']}
            typeSpeed={100}
          />
        </Typography>
        <br/>
        <ScrollableAnchor id={'About'}>
          <Typography className={classes.text}>
          After a great experience of 16 years as a hairdresser, I’m ready to take a leap into an exciting career as a Software Engineer.
            <br/>
            <br/>
          I was exposed to this industry through friends and clients and was always facinated by how applications were developed and also the way development kept evolving. 
          After doing a bit of self teaching i decided to challenge myself with the 12 week Full Stack Immersive course at General Assembly.
            <br/>
            <br/>
          Despite being at the beginning of my career, I believe I can bring a huge amount to this industry. I’m committed fully to becoming the best developer I can be. I’m a tenacious hard worker, and not one to give up. I have sought out mentors and am excited to see where this journey will take me.
      
          </Typography>
        </ScrollableAnchor>

        <IconButton href='#Home'size="large" aria-label="up">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>

    </>
  )
}



export default AboutMe
