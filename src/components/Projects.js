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
    minWidth: '275'
  },
  title: {
    fontSize: '50px',
    fontFamily: 'Bungee Shade, cursive',
    paddingBottom: '5%'
  },
  pos: {
    marginBottom: '12'
  },
  image2: {
    position: 'relative',
    display: 'flex',
    width: '60%',
    height: '100%',
    paddingBottom: '10%',
    marginLeft: '30%'
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
    marginLeft: '60%',
    marginTop: '5%'
  },
  iconPosition2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: '10%',
    marginRight: '62%',
    marginBottom: '30%',
    fontSize: '25px'
  },
  textBox: {
    display: 'flex',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '21px'
  },
  textBox2: {
    display: 'flex',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'Montserrat, sans-serif'
  },
  links: {
    color: 'white'
  },
  centerLink: {
    paddingLeft: '20%'
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
            <Box className={classes.centerLink}>
              <a className={classes.links} href="https://pimps-pinups.herokuapp.com/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>

              <a className={classes.links} href="https://github.com/becsun/pimps-site" target="_blank" rel='noopener  noreferrer'>
                <Icon aria-label="github">
                  <GitHubIcon />
                </Icon>
              </a>
            </Box>    
            <Typography className={classes.textBox}>
            HTML5 | SCSS | JavaScript | React | Python |  Django | PostgreSQL
            </Typography>
            <Typography className={classes.textBox2}>
            I developed the website for Pimps and Pinups, a hair salon located in the heart of Shoreditch, London. 
            </Typography>
          </Box >

          <img  src={Homepage} className={classes.image} alt='project4'/>

        </Box>


        <Box className={classes.smallContainer}>
          <Box className={classes.iconPosition2}>
            <Box className={classes.centerLink}>
              <a className={classes.links} href="https://naluwave.herokuapp.com/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
              <a className={classes.links} href="https://github.com/Zarathustrah/SEI-Project-3" target="_blank" rel='noopener  noreferrer'>
                <Icon aria-label="github">
                  <GitHubIcon />
                </Icon>
              </a>
            </Box>
          
            <Typography className={classes.textBox}>
            HTML5 | SCSS | JavaScript | React | MongoDB & Mongoose | Bcrypt & JWT
            </Typography>
            <Typography className={classes.textBox2}>
            product aims to give users all current information related to the best surfing spots around the world. The user will have the ability to search any surfing spots by location which will display all detailed cards.
            </Typography>
          </Box >

          <img src={Nalu} className={classes.image2} alt='project3'/>
        </Box>

        <Box className={classes.icon}>
          <Box className={classes.iconPosition}>
            <Box className={classes.centerLink}>
              <a className={classes.links} href="https://a-drink-to-suit-your-mood.netlify.app/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
              <a className={classes.links} href="https://github.com/becsun/SEI-PROJECT2-COCKTAILS-" target="_blank" rel='noopener  noreferrer'>
                <Icon aria-label="github">
                  <GitHubIcon />
                </Icon>
              </a>
            </Box>       
            <Typography className={classes.textBox}>
            HTML | SCSS | JavaScript | React | node.js |  TheCocktailDB API |
            </Typography>
            <Typography className={classes.textBox2}>
            Choose a cocktail they would like to make themselves. By clicking on the tick you will see the instructions and ingredients.
            </Typography>

          </Box >
          <img src={Alcohol} className={classes.image} alt='project2'/>

        </Box>

        <Box className={classes.smallContainer}>
          <Box className={classes.iconPosition2}>
            <Box className={classes.centerLink}>
              <a className={classes.links} href="https://becsun.github.io/SEI-project-one/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link"/></a>
              <a className={classes.links} href="https://github.com/becsun/SEI-project-one" target="_blank" rel='noopener  noreferrer'>
                <Icon aria-label="github">
                  <GitHubIcon />
                </Icon>
              </a>
            </Box>
            <Typography className={classes.textBox}>
              HTML | CSS | JavaScript
            </Typography>
            <Typography className={classes.textBox2}>
            The aim of the game is to shoot the hair 'goo' at the the on coming clients before they reach the other side or into the hand of 'goo.' Be careful to not get hit my their tears otherwise the game will be over.
            </Typography>
          </Box >

          <img src={Goo} className={classes.image2} alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>

  )
}

export default Projects
