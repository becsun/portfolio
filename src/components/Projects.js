import React from 'react'
import { Box, makeStyles, CardContent } from '@material-ui/core'
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
    display: 'block',
    width: '30%',
    height: '100%',
    paddingBottom: '5%'
  }
})

const Projects = () => {
  const classes = useStyles()
  return (
    <ScrollableAnchor id={'Projects'}>
      <Box display='flex' flexDirection='column' marginTop={10} width='100%' position="relative">
        <Box >
          <img src={Homepage} className={classes.image} alt='project4'/>
        </Box>
        <Box >
          <img src={Nalu} className={classes.image} alt='project3'/>
        </Box>

        <Box >
          <img src={Alcohol} className={classes.image} alt='project2'/>
        </Box>
        <Box >
          <img src={Goo} className={classes.image} alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>

  )
}

export default Projects
