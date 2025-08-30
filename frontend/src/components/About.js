import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section py-5" id="about">
        <Container>
          <h2 className="text-center fw-bold mb-3">About FitFreak</h2>
          <p className="text-center text-muted mb-5">
            FitFreak is your comprehensive fitness companion, designed to help
            you achieve your health and wellness goals through personalized
            workouts, smart nutrition planning, and detailed progress tracking.
          </p>

          <Row className="text-center">
            <Col md={3} xs={6} className="mb-4">
              <h3 className="stat-number">10K+</h3>
              <p className="text-muted">Active Users</p>
            </Col>
            <Col md={3} xs={6} className="mb-4">
              <h3 className="stat-number">500+</h3>
              <p className="text-muted">Workout Videos</p>
            </Col>
            <Col md={3} xs={6} className="mb-4">
              <h3 className="stat-number">50+</h3>
              <p className="text-muted">Nutrition Plans</p>
            </Col>
            <Col md={3} xs={6} className="mb-4">
              <h3 className="stat-number">24/7</h3>
              <p className="text-muted">Support</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center text-white py-5">
        <Container>
          <h2 className="fw-bold mb-3">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="mb-4">
            Join thousands of others who have transformed their lives with
            FitFreak. Get started today and see the difference!
          </p>
          <Button variant="light" className="cta-btn">
            Get Started Now
          </Button>
        </Container>
      </section>
    </>
  );
};

export default About;
