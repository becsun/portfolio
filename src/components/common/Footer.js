import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Icon , Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => {

  return (
    <div>
      <Typography>
        <h1>Contact</h1>
      </Typography>
      <ScrollableAnchor id={'Contact'}>
        <Icon size="large" aria-label="github">
          <GitHubIcon />
        </Icon>
      </ScrollableAnchor>
      <Icon size="large" aria-label="email">
        <EmailIcon />
      </Icon>
      <Icon size="large" aria-label="linkedIn">
        <LinkedInIcon />
      </Icon>

    </div>


  )
}

export default Footer
