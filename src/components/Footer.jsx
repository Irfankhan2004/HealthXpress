import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeartbeat
} from "react-icons/fa";

import "../assets/css/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Company Section */}

        <div>

          <h2 className="footer-logo">

            <FaHeartbeat
              style={{
                marginRight: "10px",
                color: "#14b8a6"
              }}
            />

            Health<span>Xpress</span>

          </h2>

          <p className="footer-about">

            HealthXpress is your trusted healthcare platform
            providing doctor consultations, AI medical
            assistance, emergency ambulance services,
            government healthcare schemes and medical camps
            through one smart platform.

          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3>Quick Links</h3>

          <ul className="footer-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/register">
                Register
              </Link>
            </li>

            <li>
              <Link to="/doctor-choice">
                Doctors
              </Link>
            </li>

            <li>
              <Link to="/ambulance">
                Ambulance
              </Link>
            </li>

            <li>
              <Link to="/schemes">
                Government Schemes
              </Link>
            </li>

            <li>
              <Link to="/medical-camp">
                Medical Camps
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>

            <FaMapMarkerAlt />

            Bhubaneswar, Odisha, India

          </p>

          <p>

            <FaPhoneAlt />

            +91 9876543210

          </p>

          <p>

            <FaEnvelope />

            support@healthxpress.com

          </p>

        </div>

        {/* Newsletter */}

        <div>

          <h3>Newsletter</h3>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "20px"
            }}
          >
            Subscribe to receive healthcare updates,
            medical camp notifications and wellness tips.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>

              Subscribe

            </button>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        © 2026 HealthXpress. All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;