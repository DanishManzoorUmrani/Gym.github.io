import React from 'react';
import img from '../assets/react.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace with your logo */}
          <img src={img} alt="KARVE Logo" className="logo" />
        </div>
        <div className="footer-text">
          <p>
            Inspired by the Big Apple, on the pulse of the Big Smoke, we redefine the modern-day workout with our signature Transformer Pilates classes. We capture New York’s infectious energy, tailored to London lifestyles.
          </p>
        </div>
        <div className="footer-links">
          <a href="#gift-card">Gift Card</a>
          <a href="#buy">Buy</a>
          <a href="#team">Team</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#faqs">FAQ's</a>
          <a href="#franchise">Franchise</a>
          <a href="#events">Events</a>
          <a href="#terms-and-conditions">Terms And Conditions</a>
          <a href="#privacy-policy">Privacy Policy</a>
        </div>
        <div className="footer-bottom">
          <p>©Copyright By KARVE 2024</p>
          <p>TRANSFORM YOUR MIND | TRANSFORM YOUR BODY</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
