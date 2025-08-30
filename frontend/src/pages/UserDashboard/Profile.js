import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Navbar, Nav } from "react-bootstrap";
import MyWorkouts from "./MyWorkouts"; // ✅ Import your workouts component
import MyNutrition from "./MyNutritions";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    weight: 70,
    height: 175,
    gender: "Male",
    fitnessGoal: "General Fitness",
  });

  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const handleBmiCalculate = (e) => {
    e.preventDefault();
    if (user.weight && user.height) {
      const heightInM = user.height / 100;
      const bmiValue = (user.weight / (heightInM * heightInM)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setBmiCategory("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setBmiCategory("Normal");
      else setBmiCategory("Overweight");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("User info updated successfully!");
  };

  // ✅ Section rendering
  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return (
          <Container fluid className="mt-4">
            <Row className="g-4">
              {/* Personal Info */}
              <Col md={6}>
                <Card className="p-4 shadow-lg rounded-3">
                  <h4 className="mb-3 text-dark">Personal Information</h4>
                  <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        value={user.age}
                        onChange={(e) => setUser({ ...user, age: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select
                        value={user.gender}
                        onChange={(e) => setUser({ ...user, gender: e.target.value })}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Fitness Goal</Form.Label>
                      <Form.Select
                        value={user.fitnessGoal}
                        onChange={(e) => setUser({ ...user, fitnessGoal: e.target.value })}
                      >
                        <option>General Fitness</option>
                        <option>Weight Loss</option>
                        <option>Muscle Gain</option>
                      </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Update Info
                    </Button>
                  </Form>
                </Card>
              </Col>

              {/* BMI Calculator */}
              <Col md={6}>
                <Card className="p-4 shadow-lg rounded-3">
                  <h4 className="mb-3 text-dark">BMI Calculator</h4>
                  <Form onSubmit={handleBmiCalculate}>
                    <Form.Group className="mb-3">
                      <Form.Label>Weight (kg)</Form.Label>
                      <Form.Control
                        type="number"
                        value={user.weight}
                        onChange={(e) => setUser({ ...user, weight: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Height (cm)</Form.Label>
                      <Form.Control
                        type="number"
                        value={user.height}
                        onChange={(e) => setUser({ ...user, height: e.target.value })}
                      />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-100">
                      Calculate BMI
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>

            {/* Profile Summary */}
            {(bmi || user.gender || user.fitnessGoal) && (
              <Row className="mt-4">
                <Col>
                  <Card className="p-4 shadow text-center">
                    <h5 className="mb-3">Profile Summary</h5>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Fitness Goal:</strong> {user.fitnessGoal}</p>
                    {bmi && (
                      <p>
                        <strong>Your BMI:</strong> {bmi} ({bmiCategory})
                      </p>
                    )}
                  </Card>
                </Col>
              </Row>
            )}
          </Container>
        );

      case "workouts":
        return <MyWorkouts />; // ✅ Show workouts component
     // inside renderSection()
case "nutrition":
  return <MyNutrition goal={user.fitnessGoal} />;
      case "blogs":
        return <h2 className="text-center mt-4">📖 Blogs Section</h2>;
      case "progress":
        return <h2 className="text-center mt-4">📈 Progress Section</h2>;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand>Fitness Freek</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light">Logout</Button>
        </Nav>
      </Navbar>

      {/* Welcome Message */}
      <Container fluid className="text-center py-3 bg-light shadow-sm">
        <h2>
          Welcome, <span className="text-primary">{user.name}</span> 👋
        </h2>
      </Container>

      {/* Section Navbar */}
      <Navbar bg="light" expand="lg" className="border shadow-sm">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link onClick={() => setActiveSection("profile")}>Profile</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("workouts")}>Workouts</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("nutrition")}>Nutrition</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("blogs")}>Blogs</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("progress")}>Progress</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Render Section */}
      {renderSection()}
    </>
  );
};

export default Profile;
