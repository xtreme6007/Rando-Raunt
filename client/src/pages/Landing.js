import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'



function Landing () {


return(
    
<div>

<Container style={{
marginBottom: 'auto',
marginLeft: 'auto',
marginRight: 'auto',
marginTop: '10rem',
color: 'white',
}} className="cStyle">
    <h1>Hello, Welcome To Rando-Raunt</h1>
    <p>My name is Preston Nichols and I am a Full-Stack Developer. I mainly developed this application as an incentive to try new restraunts with my girlfriend. But if you happen to be using it please enjoy and feel free to add your favorite restraunt. Check out my github <a href="https://github.com/xtreme6007" style={{color: "orange"}}>here</a></p>

<Button href="/addRestaurant" style={{
    marginBottom: '1rem',
marginLeft: 'auto',
marginRight: 'auto',
}}> Add A New Restaraunt </Button>
<Button href="/randomizer" style={{
    marginBottom: '1rem',
marginLeft: 'auto',
marginRight: 'auto',
}}> Find A Random Restraunt </Button>
</Container>
</div>

)

}

export default Landing;