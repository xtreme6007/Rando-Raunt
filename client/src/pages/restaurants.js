import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Restaurants() {
  // Setting our component's initial state
  const [restaurants, setRestaurants] = useState([])
  const [formObject, setFormObject] = useState({})

  

  // Loads all restaurants and sets them to restaurants
  function loadRestaurants() {
    API.getRestaurants()
      .then(res => 
        setRestaurants(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads restaurants from the db
  function deleteRestaurant(id) {
    API.deleteRestaurant(id)
      .then(res => loadRestaurants())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload restaurants from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.category) {
      API.saveRestaurant({
        Name: formObject.name,
        Category: formObject.category,
        Description: formObject.description
        
      }).then(() => setFormObject({
        name: "",
        category: "",
        description: ""
      }))
        .then(res => loadRestaurants())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6"  style={{
        border: 'solid',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
            <Container >
              <h1>Add a Restraunt</h1>
              </Container>
            <form >
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="category"
                placeholder=" Category (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="Description (Optional)"
                style={{height: '5rem'}}
              />
              <FormBtn
                // disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Add To Mix
              </FormBtn >
            </form>
          </Col>

        </Row>
      </Container>
    );
  }


export default Restaurants;
