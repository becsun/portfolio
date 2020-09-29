import React from 'react'
import { Box } from '@material-ui/core'
import Homepage from '../styles/images/homepage.gif'

const Projects = () => {

  return (
    <div>
      <Box component="div" display="block">
        <img src={Homepage} className ="project1" alt="project1"/>
      </Box>
      {/* <Box>
        <img src={Homepage} className ="project1" alt="project1"/>
      </Box>
      <Box>
        <img src={Homepage} className ="project1" alt="project1"/>
      </Box>
      <Box>
        <img src={Homepage} className ="project1" alt="project1"/>
      </Box> */}
    </div>

  )
}

export default Projects
