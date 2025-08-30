import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaQuoteRight } from "react-icons/fa";
import "./Quotes.css";

const Motivation = () => {
  const quotes = [
    {
      text: "The only bad workout is the one that didn't happen.",
      author: "Unknown",
    },
    {
      text: "Your body can do it. It's your mind you need to convince.",
      author: "Unknown",
    },
    {
      text: "Success is what comes after you stop making excuses.",
      author: "Luis Galarza",
    },
  ];

  return (
    <section className="py-5 bg-light" id="motivation">
      <Container>
        <h2 className="text-center fw-bold mb-2">Daily Motivation</h2>
        <p className="text-center text-muted mb-5">
          Get inspired with powerful fitness quotes
        </p>
        <Row xs={1} md={3} className="g-4">
          {quotes.map((q, idx) => (
            <Col key={idx}>
              <Card className="motivation-card h-100 text-center shadow-sm">
                <Card.Body>
                  <FaQuoteRight className="quote-icon mb-3" />
                  <Card.Text className="fst-italic">"{q.text}"</Card.Text>
                  <Card.Text className="text-orange fw-semibold mt-3">
                    - {q.author}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Motivation;
