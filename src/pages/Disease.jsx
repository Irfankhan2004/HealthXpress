import React, { useState } from "react";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaShieldVirus
} from "react-icons/fa";

import "../assets/css/disease.css";

function Disease() {

  const [name, setName] = useState("");

  const [age, setAge] = useState("");

  const [gender, setGender] = useState("");

  const [symptoms, setSymptoms] = useState("");

  const [result, setResult] = useState("");

  const predictDisease = () => {

    if (
      name === "" ||
      age === "" ||
      gender === "" ||
      symptoms === ""
    ) {

      alert("Please fill all the details.");

      return;

    }

    let text = symptoms.toLowerCase();

    if (text.includes("fever") && text.includes("cough")) {

      setResult(
        "Possible Disease: Flu / Viral Infection"
      );

    }

    else if (
      text.includes("headache") &&
      text.includes("vomiting")
    ) {

      setResult(
        "Possible Disease: Migraine"
      );

    }

    else if (
      text.includes("chest pain")
    ) {

      setResult(
        "Possible Disease: Heart Related Problem"
      );

    }

    else if (
      text.includes("stomach")
    ) {

      setResult(
        "Possible Disease: Gastric Problem"
      );

    }

    else{

      setResult(
        "Disease cannot be predicted accurately. Please consult a doctor."
      );

    }

  };

  return (

    <section className="disease-page">

      <div className="disease-container">

        {/* Header */}

        <div className="disease-header">

          <h1>

            AI Disease Prediction

          </h1>

          <p>

            Enter your symptoms below and our AI
            will predict the most likely disease.

          </p>

        </div>

        <div className="disease-grid">

          {/* Left Section */}

          <div>

            <div className="disease-form">

              <h2>

                Patient Information

              </h2>

              <div className="input-box">

                <label>

                  Full Name

                </label>

                <input

                  type="text"

                  placeholder="Enter your name"

                  value={name}

                  onChange={(e)=>setName(e.target.value)}

                />

              </div>

              <div className="input-box">

                <label>

                  Age

                </label>

                <input

                  type="number"

                  placeholder="Enter age"

                  value={age}

                  onChange={(e)=>setAge(e.target.value)}

                />

              </div>

              <div className="input-box">

                <label>

                  Gender

                </label>

                <select

                  value={gender}

                  onChange={(e)=>setGender(e.target.value)}

                >

                  <option value="">

                    Select Gender

                  </option>

                  <option>

                    Male

                  </option>

                  <option>

                    Female

                  </option>

                  <option>

                    Other

                  </option>

                </select>

              </div>

              <div className="input-box">

                <label>

                  Symptoms

                </label>

                <textarea

                  placeholder="Example:
Fever, cough, headache..."

                  value={symptoms}

                  onChange={(e)=>setSymptoms(e.target.value)}

                />

              </div>

              <button

                className="predict-btn"

                onClick={predictDisease}

              >

                Predict Disease

              </button>

              {
                result && (

                  <div className="result-card">

                    <h3>

                      Prediction Result

                    </h3>

                    <p>

                      {result}

                    </p>

                  </div>

                )
              }

            </div>

          </div>
                    {/* Right Section */}

          <div className="info-panel">

            <div className="info-card">

              <h3>

                <FaStethoscope /> AI Diagnosis

              </h3>

              <p>

                Our AI analyzes your symptoms and
                predicts the most likely disease.
                This prediction is only for educational
                purposes and should not replace
                professional medical advice.

              </p>

            </div>

            <div className="info-card">

              <h3>

                <FaHeartbeat /> Health Tips

              </h3>

              <ul className="tip-list">

                <li>💧 Drink at least 2–3 litres of water daily.</li>

                <li>🥗 Eat fresh fruits and green vegetables.</li>

                <li>😴 Sleep 7–8 hours every night.</li>

                <li>🏃 Exercise for at least 30 minutes daily.</li>

                <li>🩺 Get regular health checkups.</li>

              </ul>

            </div>

            <div className="warning-card">

              <h3>

                ⚠ Medical Disclaimer

              </h3>

              <p>

                The prediction shown is generated
                using simple symptom matching and
                is not a confirmed medical diagnosis.
                If your symptoms are severe or
                persistent, please consult a qualified
                doctor immediately.

              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="features">

          <h2>

            Why Choose HealthXpress?

          </h2>

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">

                <FaUserMd />

              </div>

              <h3>

                Expert Guidance

              </h3>

              <p>

                Get guidance based on common
                symptoms before visiting a doctor.

              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">

                <FaHeartbeat />

              </div>

              <h3>

                Quick Prediction

              </h3>

              <p>

                Receive disease predictions
                within seconds using AI logic.

              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">

                <FaShieldVirus />

              </div>

              <h3>

                Secure & Private

              </h3>

              <p>

                Your health information remains
                private and secure while using
                HealthXpress.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Disease;