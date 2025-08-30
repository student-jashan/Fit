import React, { useState } from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import YouTube from "react-youtube";

const workouts = [
  {
    id: 1,
    title: "Beginner Full Body Workout",
    desc: "Perfect for beginners starting their fitness journey",
    level: "beginner",
    category: "full_body",
    duration: "30 mins",
    video: "UBMk30rjy0o",
  },
  {
    id: 2,
    title: "HIIT Cardio Blast",
    desc: "High intensity interval training for fat burning",
    level: "intermediate",
    category: "cardio",
    duration: "25 mins",
    video: "ml6cT4AZdqI",
  },
];

const Workouts = () => {
  const [progress, setProgress] = useState({}); // {workoutId: percent}

  const handleReady = (event, id) => {
    const player = event.target;

    const interval = setInterval(() => {
      const duration = player.getDuration();
      const currentTime = player.getCurrentTime();

      if (duration > 0) {
        const percent = Math.min(
          100,
          Math.round((currentTime / duration) * 100)
        );
        setProgress((prev) => ({ ...prev, [id]: percent }));
      }
    }, 1000);

    player.addEventListener("onStateChange", (e) => {
      if (e.data === 0) clearInterval(interval);
    });
  };

  return (
    <Container className="mt-4">
      <Row>
        {workouts.map((w) => (
          <Col md={6} key={w.id} className="mb-4">
            <Card className="shadow-sm h-100 d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                {/* Video with fixed aspect ratio */}
                <div
                  className="mb-3"
                  style={{ width: "100%", height: "250px" }}
                >
                  <YouTube
                    videoId={w.video}
                    opts={{ width: "100%", height: "100%" }}
                    onReady={(e) => handleReady(e, w.id)}
                  />
                </div>

                <div className="flex-grow-1">
                  <Card.Title>{w.title}</Card.Title>
                  <Card.Text>{w.desc}</Card.Text>
                  <p>
                    <span className="badge bg-secondary me-2">{w.level}</span>
                    <span className="badge bg-dark">{w.category}</span>
                    <span className="float-end text-muted">{w.duration}</span>
                  </p>
                </div>

                {/* Progress bar at bottom */}
                <ProgressBar
                  now={progress[w.id] || 0}
                  label={`${progress[w.id] || 0}%`}
                  className="mt-3"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Workouts;
