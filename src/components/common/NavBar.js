import React from 'react'
import {  Box, makeStyles } from '@material-ui/core'


//CSS Styles

const useStyles = makeStyles({
  mainBox: {
    display: 'flex',
    justifyContent: 'space-evenly'

  },
  leftLink: {
    color: 'white',
    fontSize: '40px',
    textDecoration: 'none'


  },
  rightLink: {
    color: 'white',
    fontSize: '40px',
    textDecoration: 'none'
  },
  rightBox: {
    display: 'flex-inline'
  },
  leftBox: {
    display: 'flex-inline'
  }
})


const Navbar = () => {
  const classes = useStyles()
  return (

    <div>
      <Box className={classes.mainBox}>
        <Box className={classes.leftBox} >
          <a className={classes.leftLink} href='#About'> About </a>
        </Box>
        <Box className={classes.leftBox}>
          <a className={classes.leftLink} href='#Projects'> Projects </a>
        </Box>
        <Box className={classes.rightBox}>
          <a className={classes.rightLink} href='#Technologies'> Experience </a>
        </Box>
        <Box className={classes.rightBox}>
          <a className={classes.rightLink} href='#Contact'> Contact </a>
        </Box>
      </Box>
    </div>

  )
}


export default Navbar
