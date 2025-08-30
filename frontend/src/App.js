import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

// Components & Pages
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home/Home";
import LoginSignupPopup from "./components/LoginSignupPopup";

// Dashboard Pages
import UserDashboard from "./pages/UserDashboard/Profile";
import AdminDashboard from "./pages/AdminDashboard/UserManagement";

function App() {
  const [showModal, setShowModal] = useState(false);

  // ✅ Helper function to send frontend data to Flask backend
  const sendFrontendData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/frontend-data", // Flask backend URL
        data
      );
      console.log("Backend response:", response.data);
    } catch (err) {
      console.error("Error sending data to backend:", err);
    }
  };

  // ✅ Updated handlers to send data
  const handleShow = () => {
    setShowModal(true);
    sendFrontendData({ modalShown: true, timestamp: new Date() });
  };

  const handleClose = () => {
    setShowModal(false);
    sendFrontendData({ modalShown: false, timestamp: new Date() });
  };

  return (
    <Router>
      <AppContent 
        showModal={showModal} 
        handleShow={handleShow} 
        handleClose={handleClose} 
      />
    </Router>
  );
}

// Separate content to use useLocation
function AppContent({ showModal, handleShow, handleClose }) {
  const location = useLocation();

  // Hide Navbar for dashboard pages
  const hideNavbar =
    location.pathname.startsWith("/user-dashboard") ||
    location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      {!hideNavbar && <Navbar showLoginForm={handleShow} />}

      <Routes>
        {/* Landing/Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero showLoginForm={handleShow} />
              <Home />
              <LoginSignupPopup show={showModal} handleClose={handleClose} />
            </>
          } 
        />

        {/* User Dashboard */}
        <Route path="/user-dashboard/*" element={<UserDashboard />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />

        {/* Catch all unknown routes */}
        <Route 
          path="*" 
          element={
            <>
              <Hero showLoginForm={handleShow} />
              <Home />
              <LoginSignupPopup show={showModal} handleClose={handleClose} />
            </>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
