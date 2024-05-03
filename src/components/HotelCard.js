import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="card" style={{ width: "350px" }}>
      <img
        src={hotel.image}
        className="card-img-top"
        alt={hotel.name}
        style={{ maxHeight: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{hotel.name}</h5>
        <p className="card-text">{hotel.description}</p>
        <p className="card-text">Price: ₹{hotel.price} per night</p>
        <a className="nav-link" href="/login">
          <button type="button" className="btn btn-dark">
            Book Now
          </button>{" "}
        </a>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default HotelCard;
