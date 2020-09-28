import React from 'react'
import Particles from 'react-particles-js'

const Particle = () =>{
  return (
    <div>
      <Particles
        params= {{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 3000
              }
            }
          }
        }}
      />
    </div>


  )
}



export default Particle
