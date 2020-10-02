import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Icon  } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import ScrollableAnchor from 'react-scrollable-anchor'
import Homepage from '../styles/images/homepage.gif'
import Goo from '../styles/images/Goo.gif'
import Nalu from '../styles/images/Nalu.png'
import Alcohol from '../styles/images/Alcohol.png'



const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  image: {
    // display: 'relative',
    display: 'flex',
    width: '60%',
    height: '100%',
    paddingBottom: '10%'
  },
  mainContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '10%'
  },
  smallContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }

})

const Projects = () => {
  const classes = useStyles()
  return (

    <ScrollableAnchor id={'Projects'}>
      <Box className={classes.mainContainer}>
        <Typography>
          Projects
        </Typography>
        <Box className={classes.smallContainer}>
          <i className="fas fa-link"/>
          <Icon size="large" aria-label="github">
            <GitHubIcon />
          </Icon>
          <img src={Homepage} className={classes.image} alt='project4'/>

        </Box>


        <Box className={classes.smallContainer}>
          <i className="fas fa-link"/>
          <Icon size="large" aria-label="github">
            <GitHubIcon />
          </Icon>
          <img src={Nalu} className={classes.image} alt='project3'/>
        </Box>

        <Box className={classes.smallContainer}>
          <i className="fas fa-link"/>
          <Icon size="large" aria-label="github">
            <GitHubIcon />
          </Icon>
          <img src={Alcohol} className={classes.image} alt='project2'/>
        </Box>

        <Box className={classes.smallContainer}>
          <i className="fas fa-link"/>
          <Icon size="large" aria-label="github">
            <GitHubIcon />
          </Icon>
          <img src={Goo} className={classes.image} alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>

  )
}

export default Projects
