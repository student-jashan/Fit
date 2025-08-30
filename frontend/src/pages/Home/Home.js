import React from "react";
// import Navbar from "../../components/Navbar";
import Workouts from "../../components/Workouts";
import Quotes from "../../components/Quotes";
import Nutrition from "../../components/Nutrition";
import About from "../../components/About";
// import LoginSignupPopup from "../../components/LoginSignupPopup";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Workouts />
      <Quotes/>
      <Nutrition />
      <About/>
      <Footer />
    </>
  );
}
