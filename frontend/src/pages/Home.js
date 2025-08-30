import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Pages
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home";
import Workouts from "./components/Workouts";
import Nutrition from "./components/Nutrition";
import Blogs from "./components/Blogs";
import LoginSignupPopup from "./components/LoginSignupPopup";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar showLoginForm={() => console.log("Show Login Form")} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition showDetails={(plan) => console.log(plan)} />} />
        <Route path="/blogs" element={<Blogs openForm={(title, desc) => console.log(title, desc)} />} />
        <Route path="/Login" element={<LoginSignupPopup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
