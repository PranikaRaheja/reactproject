import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import HotelCard from "./components/HotelCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Detail from "./components/Detail";
import About from "./components/About";
import Club from "./components/Club";
const hotels = [
  {
    name: "Royal Oak Hotel",
    image: "/images/hotela.jpg",
    description: "A luxurious hotel with stunning views.",
    price: 2000,
  },
  {
    name: "Ocean Breeze Hotel",
    image: "/images/hotelb.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1500,
  },
  {
    name: "Budget Inn",
    image: "/images/hotelc.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1500,
  },
  {
    name: "Travelodge Hotel",
    image: "/images/hoteld.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1000,
  },
  {
    name: "Peaceful Paragon",
    image: "/images/hotele.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1500,
  },
  {
    name: "Happy Home B&B",
    image: "/images/hotelf.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 3000,
  },
  {
    name: "Holiday Inn Express",
    image: "/images/hotelg.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1500,
  },
  {
    name: "Heartland Hotel",
    image: "/images/hotelh.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 8000,
  },
  {
    name: "Purple Orchid",
    image: "/images/hoteli.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 9000,
  },
  {
    name: "Sunset Plains Hotel",
    image: "/images/hotelj.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 1500,
  },
  {
    name: "The Smokin’ Hotel",
    image: "/images/hotelk.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 9000,
  },
  {
    name: "The Lakefront",
    image: "/images/hotelm.jpg",
    description: "A cozy hotel in the heart of the city.",
    price: 7000,
  },
  // Add more hotel objects as needed
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <div className="App">
                <Navbar />
                <LandingPage />
                <br />
                <br />
                <br />
                <br />
                <div className="hotel-container">
                  {hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                  ))}
                </div>
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/clubs" element={<Club />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
