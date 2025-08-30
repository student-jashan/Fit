import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Workouts.css"; // <-- add custom CSS

const Workouts = () => {
  const workouts = [
    { img: "Images/bb.jpg", title: "Physical Fitness" },
    { img: "Images/gn.jpg", title: "Weight Gain" },
    { img: "Images/str.jpg", title: "Strength Training" },
    { img: "Images/loos.jpg", title: "Fat Lose" },
    { img: "Images/runn.jpg", title: "Running" },
    { img: "Images/wht.jpg", title: "Weight Lifting" },
  ];

  return (
    <section className="py-5" id="workouts">
      <Container>
        <h2 className="mb-4 text-center">Featured Workouts</h2>
        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {workouts.map((w, idx) => (
            <Col key={idx}>
              <Card className="workout-card h-100">
                <div className="img-wrapper">
                  <Card.Img variant="top" src={w.img} />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{w.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Workouts;
