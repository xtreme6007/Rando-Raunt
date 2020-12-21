import React, {useState, useEffect } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import './RandomStyle.css'

function ViewAll() {

const [restaurants, setRestraunts] = useState([])

useEffect(() => {
    loadRestaurants()
 }, [])

 function loadRestaurants() {
   API.getRestaurants()
     .then(res => 
       setRestaurants(res.data)
     )
     .catch(err => console.log(err));
 };


return (
<div>
<Container>

    {restaurants.length? 
    <h1>Check Out All those Raunts</h1>

    : <h1>There isnt Anything Here</h1>

    }
    
    
     </Container> 



</div>
)




}

export default ViewAll