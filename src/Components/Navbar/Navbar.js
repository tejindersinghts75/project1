import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../Assets/logo-2.svg'
import { Badge } from "react-bootstrap";
import '../../App.css'


const Header = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg" className="sticky-top">
      <Container className="my-3">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex justify-content-end">

          <Form className="d-flex mx-3">
            <Form.Control type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-dark" className="srchbtn">Search</Button>
          </Form>
          <div>
      <FaShoppingCart size={20} />
     
    </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
