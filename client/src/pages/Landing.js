import React from 'react'
import Button from 'react-bootstrap/Button'
import ParticlesBg from 'particles-bg'


function Landing () {


return(
    
<div>
<ParticlesBg type="circle" bg={true} />

<Button href="/addRestaurant"> Add A New Restaraunt </Button>
<Button href="/randomizer"> Find A Random Restraunt </Button>
</div>

)

}

export default Landing;