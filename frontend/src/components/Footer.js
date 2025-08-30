import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="footer-section text-light py-4">
    <Container className="text-center">
      <h5>Fitness Freak</h5>
      <p>Your one-stop destination for fitness and wellness.</p>
   <div className="mb-2">
  <button className="text-light mx-2 bg-transparent border-0 p-0">
    <i className="fa fa-facebook"></i>
  </button>
  <button className="text-light mx-2 bg-transparent border-0 p-0">
    <i className="fa fa-instagram"></i>
  </button>
  <button className="text-light mx-2 bg-transparent border-0 p-0">
    <i className="fa fa-twitter"></i>
  </button>
</div>
      <p className="mb-0">&copy; 2025 Fitness Freak. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
