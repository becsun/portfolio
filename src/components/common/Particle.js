import React from 'react'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute'
  }
})

const Particle = () =>{

  const classes = useStyles()

  return (
    <div
      style ={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
      }
      }
    >
      <Particles
        canvasClassName={classes.particlesCanva}
        params= {{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 3000
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true
              }
            }
          }
        }}
      />
    </div>


  )
}



export default Particle
