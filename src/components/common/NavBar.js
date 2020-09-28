import React from 'react'
import { Typography , Link , makeStyles} from '@material-ui/core'



//CSS Styles
const useStyles = makeStyles(theme => ({
  link: {
    color: 'white'
  }
}))


const Navbar = () => {
  const classes = useStyles()
  return (
    <>
      <div>

        <Link color="inherit" href="/" className={classes.link}>
            ABOUT
        </Link>
        <Link color="inherit" href="/" className={classes.link}>
          PROJECTS
        </Link>
        <Link color="inherit" href="/" className={classes.link}>
          {/* onClick={handleClick} */}
            TECHNOLOGIES
        </Link>
        <Link color="inherit" href="/" className={classes.link}>
          {/* onClick={handleClick} */}
            CONTACT
        </Link>

      </div>
    </>
  )
}

export default Navbar
