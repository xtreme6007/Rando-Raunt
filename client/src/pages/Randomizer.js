import React, {useState, useEffect } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import Card from 'react-bootstrap/Card'

function Randomize(){

    const [restaurants, setRestaurants] = useState([])
    const [theOne, setTheOne] = useState([])
    const num = Math.floor(Math.random() * restaurants.length)
    const randomItem = restaurants[num]
    console.log(randomItem)

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


      function RandoFunc() {
        
        


      }

return (
    <div>
        <Container>
           

        
        
        
            {restaurants.length ? (
              <Card  style={{ width: '18rem',
               height: '15rem',
              marginBottom: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '10rem'
               }}>
              <Card.Body>
                <Card.Title>{randomItem.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{randomItem.Category}</Card.Subtitle>
                <Card.Text>
                  {randomItem.Description ? randomItem.Description : "There is no description for this restraunt"}
                </Card.Text>
                <Card.Link href={"http://www.google.com/search?q=" + randomItem.Name } target="_blank" >More Info</Card.Link>
                
              </Card.Body>
            </Card>
             ) : (
              <h3>No Results to Display</h3>
            )} 
  

           


        
        </Container>

    </div>


)

}


export default Randomize