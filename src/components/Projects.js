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
    width: '50%',
    height: '100%'
  }
})

const Projects = () => {
  const classes = useStyles()
  return (
    <ScrollableAnchor id={'Projects'}>
      <Box display='flex' position='relative' marginTop={10} width='100%'>
        <Box >
          <img src={Homepage} className={classes.image} alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>
  )
}

export default Projects
