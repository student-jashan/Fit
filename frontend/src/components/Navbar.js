import React from "react";
import './Navbar.css'
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function NavigationBar({ showLoginForm }) {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="fw-bold text-orange">
          <span style={{ color: "#ff5a1f" }}>Fit</span>Freak
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          {/* Links */}
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#workouts">Workouts</Nav.Link>
            <Nav.Link href="#quotes">Quotes</Nav.Link>
            <Nav.Link href="#nutrition">Nutrition</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Button variant="outline-secondary" onClick={showLoginForm}>
              Login
            </Button>
            <Button style={{ backgroundColor: "#ff5a1f", border: "none" }}>
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
