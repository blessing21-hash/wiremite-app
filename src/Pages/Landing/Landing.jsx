import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"; // we’ll style it below
import heroImg from "../../assets/landing-hero.jpeg"; // optional hero image

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Wiremite</h1>
          <p>
            The easiest way to manage your money and stay connected. Fast, safe, and reliable.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn primary-btn">Sign Up</Link>
            <Link to="/login" className="btn secondary-btn">Login</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Wiremite App" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Wiremite?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Secure Transactions</h3>
            <p>All your transactions are encrypted and protected 24/7.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Payments</h3>
            <p>Send and receive money instantly from anywhere in the world.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Our support team is always ready to assist you whenever needed.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Get Started Today!</h2>
        <Link to="/signup" className="btn primary-btn">Create Account</Link>
      </section>
    </div>
  );
};

export default Landing;
