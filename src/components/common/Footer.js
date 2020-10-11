import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Icon , Typography , makeStyles, Box } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'


const useStyles = makeStyles({
  contact: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Bungee Shade, cursive',
    fontSize: '25px'
  },
  box: {
    display: 'flex',
    position: 'relative',
    color: 'white',
    textDecoration: 'none'
  },
  links: {
    display: 'flex',
    position: 'relative',
    fontFamily: 'Montserrat, sans-serif',
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px'

  },
  linkbox: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    width: '100%',
    color: 'white',
    marginBottom: '5%'
  },
  individualbox: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row'
  }
})


const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.box}>

        <ScrollableAnchor id={'Contact'}>
          <Typography className={classes.contact}>
            <h1>Contact</h1>
          </Typography>
        </ScrollableAnchor>

      </Box>
      <Box className={classes.linkbox}>

        <Box className={classes.individualbox}>
          <Icon size="large" aria-label="github">
            <GitHubIcon />
          </Icon>
          <Typography>
            <a className={classes.links} href="https://github.com/becsun" target="_blank" rel='noopener  noreferrer'> github.com/becsun</a>
          </Typography>
        </Box>


        <Box className={classes.individualbox}>
          <Icon size="large" aria-label="email">
            <EmailIcon />
          </Icon>
          <Typography>
            <a className={classes.links} href="mailto:becsun@icloud.com" target="_blank" rel='noopener noreferrer' >becsun@icloud.com</a>
          </Typography>
        </Box>

        <Box className={classes.individualbox}>
          <Icon size="large" aria-label="linkedIn">
            <LinkedInIcon />
          </Icon>
          <Typography>
            <a className={classes.links} href="https://www.linkedin.com/in/bec-sun/" target="_blank" rel='noopener  noreferrer'>bec-sun</a>
          </Typography>
        </Box>

      </Box>






    </div>


  )
}

export default Footer
