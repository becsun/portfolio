import React from 'react'
import { Box, Card, CardContent } from '@material-ui/core'
import ScrollableAnchor from 'react-scrollable-anchor'
import Homepage from '../styles/images/homepage.gif'
import Goo from '../styles/images/Goo.gif'
import Nalu from '../styles/images/Nalu.png'
import Alcohol from '../styles/images/Alcohol.png'


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)'
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// })

const Projects = () => {
  // const classes = useStyles()
  return (
    <ScrollableAnchor id={'Projects'}>
      <Box display='flex'  flexWrap='nowrap' marginTop={200} width='100%'>
        <Box component='div' display='block' width='25%' boxSizing='20%'>
          <img src={Homepage} className ='project4' alt='project1'/>
        </Box>
      </Box>
    </ScrollableAnchor>
  )
}

export default Projects
