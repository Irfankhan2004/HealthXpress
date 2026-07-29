import React, { useState } from "react";
import {
  FaSearch,
  FaStar,
  FaCalendarCheck
} from "react-icons/fa";

import "../assets/css/physicalDoctor.css";

function PhysicalDoctor() {

  const doctors = [

    {
      id:1,
      name:"Dr. Amit Sharma",
      speciality:"Cardiologist",
      experience:"12 Years",
      fee:"₹800",
      rating:"4.9",
      status:"Available",
      image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600"
    },

    {
      id:2,
      name:"Dr. Priya Singh",
      speciality:"Dermatologist",
      experience:"9 Years",
      fee:"₹600",
      rating:"4.8",
      status:"Available",
      image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600"
    },

    {
      id:3,
      name:"Dr. Rahul Verma",
      speciality:"Orthopedic",
      experience:"15 Years",
      fee:"₹1000",
      rating:"4.9",
      status:"Available",
      image:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600"
    },

    {
      id:4,
      name:"Dr. Neha Kapoor",
      speciality:"Neurologist",
      experience:"11 Years",
      fee:"₹900",
      rating:"4.7",
      status:"Available",
      image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600"
    },

    {
      id:5,
      name:"Dr. Arjun Patel",
      speciality:"Pediatrician",
      experience:"8 Years",
      fee:"₹700",
      rating:"4.8",
      status:"Available",
      image:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600"
    },

    {
      id:6,
      name:"Dr. Sneha Das",
      speciality:"Gynecologist",
      experience:"13 Years",
      fee:"₹850",
      rating:"4.9",
      status:"Available",
      image:"https://images.unsplash.com/photo-1651008376811-b90baee60c1?w=600"
    }

  ];

  const [search,setSearch] = useState("");

  const [speciality,setSpeciality] = useState("All");

  const filteredDoctors = doctors.filter((doctor)=>{

      const matchName =
      doctor.name.toLowerCase().includes(search.toLowerCase());

      const matchSpeciality =
      speciality==="All" ||
      doctor.speciality===speciality;

      return matchName && matchSpeciality;

  });

  return (

    <section className="physical-doctor">

      <div className="doctor-container">

        {/* Heading */}

        <div className="doctor-title">

          <h1>Find Your Doctor</h1>

          <p>
            Book appointments with experienced specialists
            anytime, anywhere.
          </p>

        </div>

        {/* Search */}

        <div className="search-box">

          <div className="search-input">

            <FaSearch className="search-icon"/>

            <input

              type="text"

              placeholder="Search doctor..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

            />

          </div>

          <div className="speciality-select">

            <select

              value={speciality}

              onChange={(e)=>setSpeciality(e.target.value)}

            >

              <option>All</option>

              <option>Cardiologist</option>

              <option>Dermatologist</option>

              <option>Orthopedic</option>

              <option>Neurologist</option>

              <option>Pediatrician</option>

              <option>Gynecologist</option>

            </select>

          </div>

        </div>

        {/* Doctor Cards */}

        <div className="doctor-grid">

          {

            filteredDoctors.map((doctor)=>(

              <div
                className="doctor-card"
                key={doctor.id}
              >

                <div className="doctor-image">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                  />

                </div>

                <div className="doctor-content">

                  <h2>{doctor.name}</h2>

                  <p className="speciality">

                    {doctor.speciality}

                  </p>

                  <div className="doctor-info">

                    <div className="rating">

                      <FaStar/>

                      {doctor.rating}

                    </div>

                    <div className="status">

                      {doctor.status}

                    </div>

                  </div>

                  <div className="doctor-details">

                    <div className="detail">

                      <span>Experience</span>

                      <span>{doctor.experience}</span>

                    </div>

                    <div className="detail">

                      <span>Consultation Fee</span>

                      <span>{doctor.fee}</span>

                    </div>

                  </div>

                  <button
                    className="book-btn"
                    onClick={() =>
                      alert(
                        `Appointment booked with ${doctor.name}`
                      )
                    }
                  >

                    <FaCalendarCheck/>

                    Book Appointment

                  </button>

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default PhysicalDoctor;