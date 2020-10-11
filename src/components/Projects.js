import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Icon } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import ScrollableAnchor from 'react-scrollable-anchor'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import IconButton from '@material-ui/core/IconButton'




const useStyles = makeStyles({
  title: {
    fontSize: '50px',
    fontFamily: 'Bungee Shade, cursive',
    paddingBottom: '10%'
  },
  image2: {
    position: 'relative',
    display: 'flex',
    width: '50%',
    height: '40%',
    paddingBottom: '10%',
    marginRight: '10%'
  },
  image: {
    position: 'relative',
    display: 'flex',
    width: '50%',
    height: '40%',
    marginLeft: '10%',
    '@media (max-width:800px)': {
      marginLeft: '-10%'
    }
  },
  mainContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '10%',
    color: 'white'
  },
  smallContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width:800px)': {
      flexDirection: 'column-reverse',
      marginLeft: '0%',
      alignItems: 'center'
    },
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: '5%'
  },
  icon: {
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'relative',
    fontSize: '25px',
    '@media (max-width:800px)': {
      fontSize: '10px',
      flexDirection: 'column-reverse',
      marginLeft: '0%',
      alignItems: 'center'
    },
    marginBottom: '5%'
  },
  iconPosition: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: '5%',
    marginBottom: '10%',
    marginRight: '10%',
    textJustify: 'justify'
  },
  iconPosition2: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: '10%',
    fontSize: '25px',
    '@media (max-width:800px)': {
      fontSize: '10px',
      marginLeft: '0%'
    },
    marginLeft: '10%',
    textJustify: 'justify'
  },
  textBox: {
    display: 'flex',
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    '@media (max-width:800px)': {
      fontSize: '10px'
    },
    textJustify: 'justify'
  },
  textBox2: {
    display: 'flex',
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    fontFamily: 'Montserrat, sans-serif',
    textJustify: 'justify',
    fontSize: '18px',
    '@media (max-width:800px)': {
      fontSize: '10px'
    }
  },
  links: {
    color: 'white',
    paddingRight: '1%'
  },
  centerLink: {
    paddingLeft: '20%'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    marginBottom: '5%'
  },
  media: {
    fontSize: '25px',
    '@media (max-width:800px)': {
      fontSize: '10px'
    }
  }
})


const Projects = () => {
  const classes = useStyles()
  return (
    <>
      <ScrollableAnchor id={'Projects'}>
        <Box className={classes.mainContainer}>
          <Typography className={classes.title}>
            Projects
          </Typography>
          <Box className={classes.icon}>
            <Box className={classes.iconPosition}>
              <Box className={classes.centerLink}>
                <a className={classes.links} href="https://pimps-pinups.herokuapp.com/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link" /></a>
                <a className={classes.links} href="https://github.com/becsun/pimps-site" target="_blank" rel='noopener  noreferrer'>
                  <Icon aria-label="github">
                    <GitHubIcon className={classes.media}/>
                  </Icon>
                </a>
              </Box >

              <Typography className={classes.textBox}>
                HTML5 | SCSS | JavaScript | React | Python |  Django | PostgreSQL
              </Typography>
              <Typography className={classes.textBox2}>
                I developed the website for a salon in Shoreditch in London called Pimps and Pinups. Users are able to find the suitable stylists and products according to their needs. 
              </Typography>
        
            </Box >
            <img src='https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_668,w_1169/v1602412094/Screenshot_2020-10-11_at_11.20.46_yxjsjo.png' className={classes.image} alt='project4' />
          </Box>
          <Box className={classes.smallContainer}>
            <Box className={classes.iconPosition2}>
              <Box className={classes.centerLink}>
                <a className={classes.links} href="https://naluwave.herokuapp.com/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link" /></a>
                <a className={classes.links} href="https://github.com/Zarathustrah/SEI-Project-3" target="_blank" rel='noopener  noreferrer'>
                  <Icon aria-label="github">
                    <GitHubIcon className={classes.media}/>
                  </Icon>
                </a>
              </Box>
              <Typography className={classes.textBox}>
                HTML5 | SCSS | JavaScript | React | MongoDB & Mongoose | Bcrypt & JWT
              </Typography>
              <Typography className={classes.textBox2}>
                Nalu is an application for users to explore the best surfing spots around the world. The user will have the ability to search any surfing spots by location which will then display more information on the surfing location.
              </Typography>
            </Box >
            <img src='https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_668,w_1000/v1602286000/Nalu_nzzm1j.png' className={classes.image2} alt='project3' />
          </Box>
          <Box className={classes.icon}>
            <Box className={classes.iconPosition}>
              <Box className={classes.centerLink}>
                <a className={classes.links} href="https://a-drink-to-suit-your-mood.netlify.app/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link" /></a>
                <a className={classes.links} href="https://github.com/becsun/SEI-PROJECT2-COCKTAILS-" target="_blank" rel='noopener  noreferrer'>
                  <Icon aria-label="github">
                    <GitHubIcon className={classes.media}/>
                  </Icon>
                </a>
              </Box>
              <Typography className={classes.textBox}>
                HTML | SCSS | JavaScript | React | node.js |  TheCocktailDB API |
              </Typography>
              <Typography className={classes.textBox2}>
                This application is designed for users to 
                choose a cocktail they would like to make themselves. By clicking on the tick the instructions and ingredients with be displayed.
              </Typography>
            </Box >
            <img src='https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_668,w_1000/v1602285994/Alcohol_dnb4q2.png' className={classes.image} alt='project2' />
          </Box>
          <Box className={classes.smallContainer}>
            <Box className={classes.iconPosition2}>
              <Box className={classes.centerLink}>
                <a className={classes.links} href="https://becsun.github.io/SEI-project-one/" target="_blank" rel='noopener  noreferrer'><i className="fas fa-link" /></a>
                <a className={classes.links} href="https://github.com/becsun/SEI-project-one" target="_blank" rel='noopener  noreferrer'>
                  <Icon aria-label="github">
                    <GitHubIcon className={classes.media}/>
                  </Icon>
                </a>
              </Box>
              <Typography className={classes.textBox}>
                HTML | CSS | JavaScript
              </Typography>
              <Typography className={classes.textBox2}>
                This game is a twist on space invaders.
                The aim of the game is to fire hair 'goo' at the the on coming people before they reach the other side. 
              </Typography>
            </Box >
            <img src='https://res.cloudinary.com/do68wjft3/image/upload/c_scale,h_668,w_1169/v1602412053/hair-gooHomepage_akgvhd.png' className={classes.image2} alt='project1' />
          </Box>
        </Box>
      </ScrollableAnchor>
      <IconButton className={classes.button} href='#Home' size="large" aria-label="up">
        <ArrowUpwardIcon />
      </IconButton>
    </>

  )
}

export default Projects
