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

  // Load all restaurants and store them with setrestaurants
  useEffect(() => {
    loadRestaurants()
  }, [])

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
    if (formObject.title && formObject.author) {
      API.saveRestaurant({
        Name: formObject.title,
        Category: formObject.author,
        Description: formObject.synopsis
        
      })
        .then(res => loadRestaurants())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6" >
            <Jumbotron>
              <h1>Add a Restraunt</h1>
            </Jumbotron>
            <form>
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
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          {/* <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {restaurants.length ? (
              <List>
                {restaurants.map(restaurant => (
                  <ListItem key={restaurant._id}>
                    <Link to={"/restaurants/" + restaurant._id}>
                      <strong>
                        {restaurant.title} by {restaurant.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteRestaurant(restaurant._id)} />
                  </ListItem>
                ))}
              </List> */}
            {/* ) : (
              <h3>No Results to Display</h3>
            )} */}
          {/* </Col> */}
        </Row>
      </Container>
    );
  }


export default Restaurants;
