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
    fontSize: 30
  },
  pos: {
    marginBottom: 12
  },
  image: {
    position: 'relative',
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
    paddingTop: '10%',
    color: 'white',
    fontSize: '30px'
  },
  smallContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'

  },
  icon: {
    display: 'flex',
    position: 'relative',
    fontSize: '25px'
  },
  iconPosition: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: '61%'
  }
})

const Projects = () => {
  const classes = useStyles()
  return (

    <ScrollableAnchor id={'Projects'}>
      <Box className={classes.mainContainer}>
        <Typography className={classes.title}>
          Projects
        </Typography>

        <Box className={classes.icon}>
          <Box className={classes.iconPosition}>
            <a className={classes.links} href="https://pimps-pinups.herokuapp.com/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>

            <a className={classes.links} href="https://github.com/becsun/pimps-site" target="_blank" rel='noopener  noreferrer'>
              <Icon aria-label="github">
                <GitHubIcon />
              </Icon>
            </a>
          </Box >

          <img  src={Homepage} className={classes.image} alt='project4'/>

        </Box>


        <Box className={classes.smallContainer}>
          <Box>
            <a className={classes.links} href="" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
            <a className={classes.links} href="https://github.com/becsun" target="_blank" rel='noopener  noreferrer'>
              <Icon aria-label="github">
                <GitHubIcon />
              </Icon>
            </a>
          </Box >

          <img src={Nalu} className={classes.image} alt='project3'/>
        </Box>

        <Box className={classes.icon}>
          <Box className={classes.iconPosition}>
            <a className={classes.links} href="https://a-drink-to-suit-your-mood.netlify.app/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
            <a className={classes.links} href="https://github.com/becsun/SEI-PROJECT2-COCKTAILS-" target="_blank" rel='noopener  noreferrer'>
              <Icon aria-label="github">
                <GitHubIcon />
              </Icon>
            </a>
          </Box >
          <img src={Alcohol} className={classes.image} alt='project2'/>


        </Box>

        <Box className={classes.smallContainer}>
          <Box>
            <a className={classes.links} href="https://becsun.github.io/SEI-project-one/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
            <a className={classes.links} href="https://github.com/becsun/SEI-project-one" target="_blank" rel='noopener  noreferrer'>
              <Icon aria-label="github">
                <GitHubIcon />
              </Icon>
            </a>
          </Box >

          <img src={Goo} className={classes.image} alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>

  )
}

export default Projects
