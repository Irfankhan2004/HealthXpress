import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaRobot,
  FaAmbulance,
  FaArrowRight
} from "react-icons/fa";

import "../assets/css/hero.css";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="hero">

      <div className="hero-content fade-up">

        <h1>

          Your Health,
          <br />

          <span>Our Priority.</span>

        </h1>

        <p>

          HealthXpress is a modern healthcare platform that
          connects patients with qualified doctors,
          AI-powered medical assistance,
          emergency ambulance services,
          government healthcare schemes,
          and nearby medical camps —
          all in one place.

        </p>

        <div className="hero-buttons">

          <button
            className="btn-primary"
            onClick={() => navigate("/register")}
          >

            Register Now

            <FaArrowRight
              style={{ marginLeft: "10px" }}
            />

          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/doctor-choice")}
          >

            <FaUserMd
              style={{ marginRight: "8px" }}
            />

            Consult Doctor

          </button>

        </div>

      </div>

    </section>

  );

}

export default Hero;