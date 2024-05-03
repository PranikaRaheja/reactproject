import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/About.css"; // Import the CSS file
import "../styles/main.css"; // Import the CSS file

const About = () => {
  return (
    <div className="login-container">
      <Navbar />
      <div className="login-page">
        <img src="/images/hotelc.jpg" alt="Background" className="bg-image" />
        <div className="login-box-about">
          <h2>About Us</h2>
          <p>
            Welcome to Venturia, where wanderlust meets seamless exploration.{" "}
            <br></br>At Venturia, we understand that the world is full of
            wonders waiting to be discovered. Whether you're a seasoned traveler
            seeking new adventures or someone embarking on their very first
            journey, we're here to make your travel dreams a reality.
            <br></br>
            <br></br>
            Our mission is simple: to inspire and empower travelers to explore
            the world with confidence and ease. We believe that travel is not
            just about visiting new places, but about immersing yourself in
            different cultures, creating unforgettable memories, and gaining a
            deeper understanding of the world around us.<br></br>
            What sets Venturia apart is our commitment to personalized
            experiences tailored to your unique preferences and interests. From
            exotic destinations to hidden gems off the beaten path, we handpick
            each itinerary and curate every detail to ensure that your journey
            is nothing short of extraordinary. With Venturia, you can expect: -
            Expert Guidance: Our team of travel experts are passionate about
            crafting unforgettable experiences. Whether you're looking for
            luxury escapes, adventurous excursions, or cultural immersions,
            we're here to help you every step of the way. - Seamless Planning:
            Say goodbye to the stress of planning and hello to effortless
            travel. Our user-friendly platform makes it easy to browse
            destinations, customize your itinerary, and book your dream vacation
            with just a few clicks. - Authentic Connections: We believe in
            fostering meaningful connections between travelers and the places
            they visit. <br></br>
          </p>
        </div>
      </div>
      <Footer className="footer" /> {/* Apply the footer class */}
    </div>
  );
};

export default About;
