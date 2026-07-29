import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUserMd,
  FaRobot,
  FaAmbulance,
  FaVirus,
  FaHospital,
  FaNotesMedical
} from "react-icons/fa";

import "../assets/css/services.css";

function Services() {

  const navigate = useNavigate();

  const services = [
    {
      icon: <FaUserMd />,
      title: "Physical Doctor",
      description:
        "Book appointments with experienced doctors and receive professional medical consultation.",
      path: "/physical-doctor"
    },

    {
      icon: <FaRobot />,
      title: "AI Doctor",
      description:
        "Describe your symptoms and get instant AI-powered health guidance anytime.",
      path: "/ai-doctor"
    },

    {
      icon: <FaAmbulance />,
      title: "Emergency Ambulance",
      description:
        "Request emergency ambulance services quickly during critical situations.",
      path: "/ambulance"
    },

    {
      icon: <FaVirus />,
      title: "Disease Information",
      description:
        "Learn about diseases, symptoms, prevention methods, and available treatments.",
      path: "/disease"
    },

    {
      icon: <FaHospital />,
      title: "Government Schemes",
      description:
        "Explore healthcare schemes and benefits offered by the Government of India.",
      path: "/schemes"
    },

    {
      icon: <FaNotesMedical />,
      title: "Medical Camps",
      description:
        "Find nearby free medical camps, health checkups, vaccination drives, and awareness programs.",
      path: "/medical-camp"
    }
  ];

  return (

    <section className="services">

      <div className="services-title">

        <h2>

          Our <span>Healthcare Services</span>

        </h2>

        <p>

          HealthXpress provides complete healthcare solutions
          through one smart platform. Choose any service below
          to get started.

        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            className="service-card"
            key={index}
          >

            <div className="service-icon">

              {service.icon}

            </div>

            <h3>

              {service.title}

            </h3>

            <p>

              {service.description}

            </p>

            <button
              className="service-btn"
              onClick={() => navigate(service.path)}
            >

              Explore Service

            </button>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;