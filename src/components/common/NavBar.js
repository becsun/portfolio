import React from 'react'
import { Typography , Link } from '@material-ui/core'


const Navbar = () => {

  return (
    <>
      <div>
  
        <Link color="inherit" href="/" >
            ABOUT
        </Link>
        <Link color="inherit" href="/" >
          PROJECTS
        </Link>
        <Link color="inherit" href="/">
          {/* onClick={handleClick} */}
            TECHNOLOGIES
        </Link>
        <Link color="inherit" href="/">
          {/* onClick={handleClick} */}
            CONTACT
        </Link>



      </div>
    </>
  )
}

export default Navbar
