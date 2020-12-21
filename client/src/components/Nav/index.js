import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navagation() {
  return (
  
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Rando-Raunt</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/addRestaurant">Add Another</Nav.Link>
      <Nav.Link href="/randomizer">Find Random Restraunt</Nav.Link>
      <Nav.Link href="/viewall">See All Restaurunts</Nav.Link>
      
    </Nav>
    </Navbar>

  );
}

export default Navagation;
