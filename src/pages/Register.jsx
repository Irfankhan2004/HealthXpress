import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaBirthdayCake,
  FaVenusMars,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import "../assets/css/register.css";

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    agree: false
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({

      ...formData,

      [name]: type === "checkbox" ? checked : value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Registration Successful!");

  };

  return (

    <section className="register-page">

      <div className="register-container">

        <h2>Create Account</h2>

        <p>

          Join HealthXpress and access smart healthcare
          services anytime.

        </p>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}

          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* Email */}

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          {/* Phone & Age */}

          <div className="double-input">

            <div className="input-group">

              <FaPhone className="input-icon" />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="input-group">

              <FaBirthdayCake className="input-icon" />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Gender */}

          <div className="input-group">

            <FaVenusMars className="input-icon" />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >

              <option value="">Select Gender</option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>

            </select>

          </div>

          {/* Password */}

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >

              {showPassword ? <FaEyeSlash /> : <FaEye />}

            </span>

          </div>

          {/* Terms */}

          <div className="checkbox-group">

            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />

            <label>

              I agree to the Terms & Conditions

            </label>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="register-btn"
          >

            Register Now

          </button>

          {/* Login */}

          <div className="login-text">

            Already have an account?

            <a href="/"> Login</a>

          </div>

        </form>

      </div>

    </section>

  );

}

export default Register;