import React, { useState } from "react";
import {
  FaHospital,
  FaHeartbeat,
  FaHandHoldingMedical,
  FaUserShield,
  FaSearch,
  FaPhoneAlt
} from "react-icons/fa";

import "../assets/css/schemes.css";

function Schemes() {

  const [search, setSearch] = useState("");

  const schemes = [

    {
      title:"Ayushman Bharat (PM-JAY)",

      icon:<FaHospital/>,

      description:
      "Provides cashless health insurance coverage up to ₹5 lakh per family every year.",

      benefits:[
        "Cashless Treatment",
        "500+ Medical Procedures",
        "Government Hospitals",
        "Private Hospitals"
      ]
    },

    {
      title:"Biju Swasthya Kalyan Yojana",

      icon:<FaHeartbeat/>,

      description:
      "Odisha Government healthcare scheme for free treatment in empanelled hospitals.",

      benefits:[
        "Free Treatment",
        "Women Coverage",
        "Emergency Care",
        "Cashless Facility"
      ]
    },

    {
      title:"CGHS",

      icon:<FaUserShield/>,

      description:
      "Healthcare facilities for Central Government employees and pensioners.",

      benefits:[
        "Medicines",
        "OPD",
        "Specialist Consultation",
        "Hospitalization"
      ]
    }

  ];

  const filteredSchemes = schemes.filter((item)=>

      item.title.toLowerCase().includes(search.toLowerCase())

  );

  return(

    <section className="schemes-page">

      <div className="schemes-container">

        {/* Header */}

        <div className="schemes-header">

          <h1>

            Government Health Schemes

          </h1>

          <p>

            Explore healthcare schemes offered by
            Central and State Governments.

          </p>

        </div>

        {/* Search */}

        <div className="search-box">

          <input

            type="text"

            placeholder="Search scheme..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        {/* Scheme Cards */}

        <div className="scheme-grid">

          {

            filteredSchemes.map((scheme,index)=>(

              <div

                className="scheme-card"

                key={index}

              >

                <div className="scheme-icon">

                  {scheme.icon}

                </div>

                <h3>

                  {scheme.title}

                </h3>

                <p>

                  {scheme.description}

                </p>

                <ul>

                  {

                    scheme.benefits.map((item,i)=>(

                      <li key={i}>

                        {item}

                      </li>

                    ))

                  }

                </ul>

                <button className="apply-btn">

                  Apply Now

                </button>

              </div>

            ))

          }

        </div>
                {/* Benefits Section */}

        <div className="benefits">

          <h2>

            Why Use Government Health Schemes?

          </h2>

          <div className="benefit-grid">

            <div className="benefit-card">

              <div className="benefit-icon">

                <FaHandHoldingMedical />

              </div>

              <h3>

                Cashless Treatment

              </h3>

              <p>

                Receive treatment at empanelled
                hospitals without paying cash upfront.

              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                <FaHeartbeat />

              </div>

              <h3>

                Better Healthcare

              </h3>

              <p>

                Access quality healthcare services
                from government and private hospitals.

              </p>

            </div>

            <div className="benefit-card">

              <div className="benefit-icon">

                <FaHospital />

              </div>

              <h3>

                Large Hospital Network

              </h3>

              <p>

                Thousands of hospitals across India
                are part of these healthcare schemes.

              </p>

            </div>

          </div>

        </div>

        {/* Eligibility */}

        <div className="eligibility">

          <h2>

            General Eligibility

          </h2>

          <ul>

            <li>Indian Citizen.</li>

            <li>Valid Aadhaar Card.</li>

            <li>Income criteria (scheme specific).</li>

            <li>Required supporting documents.</li>

            <li>Resident of the applicable state (for state schemes).</li>

          </ul>

        </div>

        {/* Help Card */}

        <div className="help-card">

          <h2>

            Need Help?

          </h2>

          <p>

            Contact the HealthXpress support team
            to understand eligibility, documents,
            and the application process.

          </p>

          <button className="help-btn">

            <FaPhoneAlt />

            &nbsp; Contact Support

          </button>

        </div>

      </div>

    </section>

  );

}

export default Schemes;