import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { FaDumbbell, FaAppleAlt, FaChartLine } from "react-icons/fa";

const Hero = ({ showLoginForm }) => (
  <section
    className="text-center py-5"
    style={{ backgroundColor: "#fff2e9", minHeight: "70vh" }}
    id="home"
  >
    <Container>
      <h1 className="fw-bold display-4 mt-5">
        Transform Your <span style={{ color: "#ff5a1f" }}>Fitness Journey</span>
      </h1>
      <p className=" fw-bold lead mt-4 text-muted">
        Join thousands of fitness enthusiasts on a personalized journey. <br />
        Get custom workouts, nutrition plans, and track your progress with our
        comprehensive fitness platform.
      </p>

      <Button
        size="lg"
        className="mt-4 px-4 py-2"
        style={{ backgroundColor: "#ff5a1f", border: "none" }}
        onClick={showLoginForm}
      >
        Get Started Today
      </Button>

      <Row className="mt-5 g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3 mt-4">
            <Card.Body>
              <div className="text-center mb-3">
                <FaDumbbell size={40} color="#ff5a1f" />
              </div>
              <Card.Title className="fw-bold">Personalized Workouts</Card.Title>
              <Card.Text className="text-muted">
                Get workout plans tailored to your BMI and fitness goals
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3 mt-4">
            <Card.Body>
              <div className="text-center mb-3">
                <FaAppleAlt size={40} color="#ff5a1f" />
              </div>
              <Card.Title className="fw-bold">Smart Nutrition</Card.Title>
              <Card.Text className="text-muted">
                Receive nutrition recommendations based on your body metrics
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0 text-center p-3 mt-4">
            <Card.Body>
              <div className="text-center mb-3">
                <FaChartLine size={40} color="#ff5a1f" />
              </div>
              <Card.Title className="fw-bold">Progress Tracking</Card.Title>
              <Card.Text className="text-muted">
                Monitor your fitness journey with detailed progress analytics
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hero;
