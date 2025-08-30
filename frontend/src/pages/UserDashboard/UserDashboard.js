import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Profile from "./Profile";
import MyWorkouts from "./MyWorkouts";
import Nutrition from "./Nutrition";
import Blogs from "./Blogs";
import Progress from "./Progress";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "workouts":
        return <MyWorkouts />;
      case "nutrition":
        return <Nutrition />;
      case "blogs":
        return <Blogs />;
      case "progress":
        return <Progress />;
      default:
        return <Profile />;
    }
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand>Fitness Freek</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light">Logout</Button>
        </Nav>
      </Navbar>

      {/* 🔹 Second Navbar (section switcher) */}
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

      {/* 🔹 Active Section */}
      <Container fluid className="mt-4">
        {renderSection()}
      </Container>
    </>
  );
};

export default UserDashboard;
