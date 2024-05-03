import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              lorem sed tortor blandit ultricies eu ac arcu.
            </p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              Email: info@example.com
              <br />
              Phone: +123456789
              <br />
              Address: 123 Street, City, Country
            </address>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Venturia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
