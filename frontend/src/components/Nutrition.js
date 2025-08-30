import React from "react";
import { Container, Row, Col, Card, ListGroup, Badge } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./Nutrition.css";

const Nutrition = () => {
  return (
    <section className="py-5 bg-white" id="nutrition">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold mb-2">Smart Nutrition</h2>
        <p className="text-center text-muted mb-5">
          Personalized meal plans based on your body metrics
        </p>

        <Row className="align-items-center">
          {/* Left - BMI Recommendations */}
          <Col md={6}>
            <h4 className="fw-bold mb-4">BMI-Based Recommendations</h4>
            <ListGroup variant="flush" className="nutrition-list">
              <ListGroup.Item>
                <FaCheckCircle className="check-icon" /> Personalized calorie
                targets
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheckCircle className="check-icon" /> Macro-nutrient balance
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheckCircle className="check-icon" /> Food recommendations
              </ListGroup.Item>
              <ListGroup.Item>
                <FaCheckCircle className="check-icon" /> Meal planning guides
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Right - Nutrition Plan */}
          <Col md={6}>
            <Card className="shadow-sm nutrition-card">
              <Card.Body>
                <h5 className="fw-bold mb-4">Sample Nutrition Plan</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Daily Calories</span>
                  <Badge bg="dark">2000 kcal</Badge>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Protein</span>
                  <Badge bg="light" text="dark">
                    30%
                  </Badge>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Carbs</span>
                  <Badge bg="light" text="dark">
                    40%
                  </Badge>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Fats</span>
                  <Badge bg="light" text="danger">
                    30%
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Nutrition;
