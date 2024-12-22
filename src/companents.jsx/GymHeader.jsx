import React from 'react';

import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

function GymHeader({ imageUrl, gymName }) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" className="gym-navbar">
        <Container>
          <Navbar.Brand href="#home">Pubg Gym</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex mx-auto" style={{ width: '50%' }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#classes">Classes</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="banner-content">
          <h1>{gymName}</h1>
        </div>
      </div>
    </div>
  );
}

export default GymHeader;
