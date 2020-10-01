import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import {  Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  icons: {
    display: 'flex',
    color: 'white',
    height: '40px',
    weight: '20px'
  }
})

const Technologies = () => {

  const classes = useStyles()

  return (

    <Box >

        <ScrollableAnchor id={'Technologies'}>
        <span className={classes.icons}>
          <i className='devicon-django-plain'/>
          </span>
        </ScrollableAnchor>




      <i className='devicon-express-original-wordmark'/>
      <i className="devicon-git-plain-wordmark"/>
      <i className="devicon-github-plain-wordmark"/>
      <i className="devicon-heroku-original-wordmark"/>
      <i className="devicon-html5-plain-wordmark"/>
      <i className="devicon-javascript-plain"/>
      <i className="devicon-jquery-plain-wordmark"/>
      <i className="devicon-mongodb-plain-wordmark"/>
      <i className="devicon-mysql-plain-wordmark"/>
      <i className="devicon-nodejs-plain-wordmark"/>
      <i className="devicon-npm-original-wordmark"/>
      <i className="devicon-postgresql-plain-wordmark"/>
      <i className="devicon-python-plain-wordmark"/>
      <i className="devicon-react-original-wordmark"/>
      <i className="devicon-sass-original"/>
      <i className="devicon-visualstudio-plain"/>
      <i className="devicon-yarn-plain-wordmark"/>
      <i className="devicon-css3-plain-wordmark"/>

    </Box>

  )
}

export default Technologies
