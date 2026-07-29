import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaRobot,
  FaArrowRight
} from "react-icons/fa";

import "../assets/css/doctorChoice.css";

function DoctorChoice() {

  const navigate = useNavigate();

  return (

    <section className="doctor-choice">

      <div className="choice-container">

        {/* Heading */}

        <div className="choice-title">

          <h1>
            Choose Your Healthcare Service
          </h1>

          <p>
            Select the consultation option that best suits your healthcare needs.
            Connect with experienced doctors or get instant AI-powered medical guidance.
          </p>

        </div>

        {/* Cards */}

        <div className="choice-grid">

          {/* Physical Doctor Card */}

          <div className="choice-card">

            <div className="choice-icon">

              <FaUserMd />

            </div>

            <h2>Physical Doctor</h2>

            <p>
              Book appointments with qualified doctors,
              consult specialists,
              receive prescriptions,
              and get personalized healthcare treatment.
            </p>

            <button
              className="choice-btn"
              onClick={() => navigate("/physical-doctor")}
            >

              Consult Doctor

              <FaArrowRight
                style={{ marginLeft: "10px" }}
              />

            </button>

          </div>

          {/* AI Doctor Card */}

          <div className="choice-card">

            <div className="choice-icon">

              <FaRobot />

            </div>

            <h2>AI Doctor</h2>

            <p>
              Describe your symptoms and receive
              AI-powered medical suggestions,
              disease information,
              and health recommendations
              anytime.
            </p>

            <button
              className="choice-btn"
              onClick={() => navigate("/ai-doctor")}
            >

              Ask AI Doctor

              <FaArrowRight
                style={{ marginLeft: "10px" }}
              />

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default DoctorChoice;