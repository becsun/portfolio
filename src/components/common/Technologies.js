import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import {  Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  mainbox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    padding: '2%',
    fontSize: '5em'
  },
  heading: {
    color: 'white',
    fontSize: '50px',
    textAlign: 'center',
    fontFamily: 'Bungee Shade, cursive'
  }
})

const Technologies = () => {

  const classes = useStyles()

  return (
    <div>
      <Box>
        <Typography className={classes.heading}>
        Technologies
        </Typography>
      </Box>
      <Box className={classes.mainbox}>
        <ScrollableAnchor id={'Technologies'}>
          <span className={classes.icons}>
            <i className='devicon-django-plain'/>
          </span>
        </ScrollableAnchor>
        <span className={classes.icons}>
          <i className='devicon-express-original-wordmark'/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-git-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-github-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-heroku-original-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-html5-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-javascript-plain"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-jquery-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-mongodb-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-mysql-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-nodejs-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-npm-original-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-postgresql-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-python-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-react-original-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-sass-original"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-visualstudio-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-yarn-plain-wordmark"/>
        </span>
        <span className={classes.icons}>
          <i className="devicon-css3-plain-wordmark"/>
        </span>
      </Box>
    </div>


  )
}

export default Technologies
