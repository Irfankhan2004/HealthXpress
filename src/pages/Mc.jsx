import React, { useState } from "react";
import {
  FaClinicMedical,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaPhoneAlt
} from "react-icons/fa";

import "../assets/css/medicalCamp.css";

function MedicalCamp() {

  const [search, setSearch] = useState("");

  const camps = [

    {
      title:"Free General Health Camp",
      location:"Bhubaneswar",
      date:"15 August 2026",
      doctor:"Dr. Amit Sharma",
      description:"Free consultation, BP, Sugar, BMI and General Checkup."
    },

    {
      title:"Heart Screening Camp",
      location:"Cuttack",
      date:"20 August 2026",
      doctor:"Dr. Priya Das",
      description:"ECG, Heart Risk Assessment and Cardiologist Consultation."
    },

    {
      title:"Eye Checkup Camp",
      location:"Puri",
      date:"25 August 2026",
      doctor:"Dr. Rakesh Patel",
      description:"Vision Test, Cataract Screening and Eye Consultation."
    }

  ];

  const filteredCamp = camps.filter((camp)=>

      camp.title.toLowerCase().includes(search.toLowerCase()) ||
      camp.location.toLowerCase().includes(search.toLowerCase())

  );

  return(

    <section className="medical-page">

      <div className="medical-container">

        {/* Header */}

        <div className="medical-header">

          <h1>

            Medical Camp Registration

          </h1>

          <p>

            Find upcoming free medical camps,
            health awareness programs and
            specialist consultations near you.

          </p>

        </div>

        {/* Search */}

        <div className="search-box">

          <input

            type="text"

            placeholder="Search by city or camp..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        {/* Camp Cards */}

        <div className="camp-grid">

          {

            filteredCamp.map((camp,index)=>(

              <div

                className="camp-card"

                key={index}

              >

                <div className="camp-icon">

                  <FaClinicMedical/>

                </div>

                <h3>

                  {camp.title}

                </h3>

                <p>

                  {camp.description}

                </p>

                <div className="camp-info">

                  <span>

                    <FaMapMarkerAlt />

                    {" "} {camp.location}

                  </span>

                  <span>

                    <FaCalendarAlt />

                    {" "} {camp.date}

                  </span>

                  <span>

                    <FaUserMd />

                    {" "} {camp.doctor}

                  </span>

                </div>

                <button className="register-btn">

                  Register Now

                </button>

              </div>

            ))

          }

        </div>
                {/* Services Section */}

        <div className="services">

          <h2>

            Free Health Services

          </h2>

          <div className="service-grid">

            <div className="service-card">

              <div className="service-icon">

                <FaStethoscope />

              </div>

              <h3>General Checkup</h3>

              <p>

                Free consultation with experienced
                doctors and basic health screening.

              </p>

            </div>

            <div className="service-card">

              <div className="service-icon">

                <FaHeartbeat />

              </div>

              <h3>Heart Screening</h3>

              <p>

                Blood pressure, ECG and cardiac
                risk assessment by specialists.

              </p>

            </div>

            <div className="service-card">

              <div className="service-icon">

                <FaClinicMedical />

              </div>

              <h3>Diabetes Test</h3>

              <p>

                Free blood sugar testing and
                diabetes awareness counseling.

              </p>

            </div>

          </div>

        </div>

        {/* Doctors */}

        <div className="doctors">

          <h2>

            Available Doctors

          </h2>

          <div className="doctor-grid">

            <div className="doctor-card">

              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Doctor"
              />

              <h3>Dr. Amit Sharma</h3>

              <p>

                General Physician

              </p>

            </div>

            <div className="doctor-card">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Doctor"
              />

              <h3>Dr. Priya Das</h3>

              <p>

                Cardiologist

              </p>

            </div>

            <div className="doctor-card">

              <img
                src="https://randomuser.me/api/portraits/men/62.jpg"
                alt="Doctor"
              />

              <h3>Dr. Rakesh Patel</h3>

              <p>

                Ophthalmologist

              </p>

            </div>

          </div>

        </div>

        {/* Contact */}

        <div className="contact-card">

          <h2>

            Need More Information?

          </h2>

          <p>

            Contact our HealthXpress team for
            registration, camp timings, locations,
            and available medical services.

          </p>

          <button className="contact-btn">

            <FaPhoneAlt />

            &nbsp; Contact Us

          </button>

        </div>

      </div>

    </section>

  );

}

export default MedicalCamp;