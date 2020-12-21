import React, {useState, useEffect } from "react";
import API from "../utils/API";
import ListGroup from 'react-bootstrap/ListGroup'

import Card from 'react-bootstrap/Card'
import { Col, Row, Container } from "../components/Grid";

import './RandomStyle.css'

function ViewAll() {

const [restaurants, setRestaurants] = useState([])

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

    {restaurants.length ? 
    (<div>
    <h1>Check Out All Those Raunts</h1>
    
        <Row>
       {restaurants.map(item => {
           
          return(
            
            <Card  style={{ 
                width: '18rem',
            height: '15rem',
           color: 'white'
            }} className="cStyle">
           <Card.Body>
             <Card.Title>{item.Name}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted">{item.Category}</Card.Subtitle>
             <Card.Text>
               {item.Description ? item.Description : "There is no description for this restraunt"}
             </Card.Text>
             <Card.Link href={"http://www.google.com/search?q=" + item.Name } target="_blank" >More Info</Card.Link>
             
           </Card.Body>
         </Card>
          )

          
       })}
       </Row>
</div>)
    : <h1>There isnt Anything Here</h1>

    }
    
    
     </Container> 



</div>
)




}

export default ViewAll