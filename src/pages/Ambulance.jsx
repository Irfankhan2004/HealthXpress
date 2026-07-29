import React, { useState } from "react";
import "../assets/css/ambulance.css";

import {
  FaAmbulance,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHospital,
  FaClock,
  FaUserMd,
  FaHeartbeat,
  FaShieldAlt,
  FaRoute,
  FaWifi,
  FaFirstAid,
} from "react-icons/fa";

const Ambulance = () => {
  const [formData, setFormData] = useState({
    location: "",
    hospital: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Searching nearest ambulance...");
  };

  return (
    <div className="ambulance-page">
      <div className="ambulance-container">

        {/* HEADER */}

        <div className="ambulance-header">
          <h1>Emergency Ambulance Service</h1>

          <p>
            Book the nearest ambulance instantly with real-time tracking,
            emergency response, and experienced medical staff.
          </p>
        </div>

        {/* BOOKING */}

        <div className="booking-box">

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            <h2>Book an Ambulance</h2>

            <div className="input-group">
              <label>
                <FaMapMarkerAlt /> Pickup Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter your location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>
                <FaHospital /> Preferred Hospital
              </label>

              <input
                type="text"
                name="hospital"
                placeholder="Hospital Name"
                value={formData.hospital}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>
                <FaAmbulance /> Ambulance Type
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Ambulance</option>
                <option>Basic Life Support</option>
                <option>Advanced Life Support</option>
                <option>ICU Ambulance</option>
                <option>Air Ambulance</option>
              </select>
            </div>

            <button
              className="find-btn"
              type="submit"
            >
              Find Ambulance
            </button>

          </form>

          {/* MAP */}

          <div className="map-box">
            <div className="map">
              <FaMapMarkerAlt
                style={{
                  fontSize: "40px",
                  marginRight: "12px",
                }}
              />

              Live Map Coming Soon
            </div>
          </div>

        </div>
                {/* ==========================================
            AMBULANCE TYPES
        ========================================== */}

        <section className="ambulance-types">

          <h2>Choose Ambulance Type</h2>

          <div className="type-grid">

            <div className="type-card">
              <div className="type-icon">
                <FaAmbulance />
              </div>

              <h3>Basic Life Support</h3>

              <p>
                Equipped with oxygen support, stretcher,
                first aid kit, and trained emergency staff
                for non-critical patients.
              </p>
            </div>

            <div className="type-card">
              <div className="type-icon">
                <FaHeartbeat />
              </div>

              <h3>Advanced Life Support</h3>

              <p>
                Includes ECG monitor, ventilator,
                cardiac monitor, defibrillator,
                and highly trained paramedics.
              </p>
            </div>

            <div className="type-card">
              <div className="type-icon">
                <FaHospital />
              </div>

              <h3>ICU Ambulance</h3>

              <p>
                Mobile ICU with ventilator,
                infusion pumps,
                emergency medicines,
                and critical care equipment.
              </p>
            </div>

          </div>

        </section>

        {/* ==========================================
            EMERGENCY SECTION
        ========================================== */}

        <section className="emergency-section">

          {/* SOS CARD */}

          <div className="sos-card">

            <button className="sos-btn">
              <FaPhoneAlt />
            </button>

            <h2>SOS Emergency</h2>

            <p>
              Press the emergency button to instantly
              notify the nearest ambulance and emergency
              response center.
            </p>

          </div>

          {/* ETA CARD */}

          <div className="eta-card">

            <h2>Estimated Arrival</h2>

            <div className="eta-item">
              <span>Nearest Ambulance</span>
              <span>3 km</span>
            </div>

            <div className="eta-item">
              <span>Arrival Time</span>
              <span>8 mins</span>
            </div>

            <div className="eta-item">
              <span>Status</span>
              <span>Available</span>
            </div>

            <div className="eta-item">
              <span>Response Team</span>
              <span>Ready</span>
            </div>

          </div>

          {/* DRIVER CARD */}

          <div className="driver-card">

            <h2>Assigned Driver</h2>

            <div className="driver-info">

              <div className="driver-avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Driver"
                />
              </div>

              <div>

                <div className="driver-name">
                  Rajesh Kumar
                </div>

                <div className="driver-role">
                  Senior Ambulance Driver
                </div>

              </div>

            </div>

            <div className="driver-detail">
              <span>Experience</span>
              <span>8 Years</span>
            </div>

            <div className="driver-detail">
              <span>Rating</span>
              <span>⭐ 4.9/5</span>
            </div>

            <div className="driver-detail">
              <span>Vehicle</span>
              <span>ALS-102</span>
            </div>

          </div>

        </section>
                {/* ==========================================
            FEATURES
        ========================================== */}

        <section className="features">

          <h2>Why Choose HealthXpress Ambulance?</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>

              <h3>24×7 Availability</h3>

              <p>
                Emergency ambulance service available
                round the clock with rapid response.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaRoute />
              </div>

              <h3>Live GPS Tracking</h3>

              <p>
                Track your ambulance in real time and
                know the exact arrival status.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaUserMd />
              </div>

              <h3>Expert Medical Staff</h3>

              <p>
                Every ambulance includes trained
                paramedics and emergency professionals.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>

              <h3>Safe Transport</h3>

              <p>
                Well-equipped ambulances ensuring
                safe and comfortable patient transfer.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaFirstAid />
              </div>

              <h3>Emergency Equipment</h3>

              <p>
                Oxygen cylinders, monitors,
                stretchers, and first aid kits
                available onboard.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaWifi />
              </div>

              <h3>Smart Monitoring</h3>

              <p>
                Real-time communication between
                ambulance staff and hospitals for
                faster treatment.
              </p>
            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default Ambulance;