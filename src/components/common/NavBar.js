import React from 'react'
import {  Box, makeStyles } from '@material-ui/core'


//CSS Styles

const useStyles = makeStyles({
  leftLink: {
    color: 'white'
  },
  rightLink: {
    color: 'white'
  }
})


const Navbar = () => {
  const classes = useStyles()
  return (

    <div>
      <Box>
        <a className={classes.leftLink} href='#About'> About </a>
      </Box>
      <Box>
        <a className={classes.leftLink} href='#Projects'> Projects </a>
      </Box>
      <Box>
        <a className={classes.rightLink} href='#Technologies'> Technologies </a>
      </Box>
      <Box>
        <a className={classes.rightLink} href='#Contact'> Contact </a>
      </Box>




    </div>

  )
}


export default Navbar
