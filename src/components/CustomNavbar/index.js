import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

export default function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" className="navbar-container">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
}
