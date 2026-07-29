import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import "../assets/css/aiDoctor.css";

function AIDoctor() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am your AI Doctor. Tell me your symptoms and I'll try to help."
    }
  ]);

  const sendMessage = () => {

    if (message.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setMessages((prev) => [...prev, userMessage]);

    const symptom = message.toLowerCase();

    let reply =
      "I recommend consulting a healthcare professional for an accurate diagnosis.";

    if (
      symptom.includes("fever") ||
      symptom.includes("temperature")
    ) {

      reply =
        "🤒 Fever may be caused by viral or bacterial infections. Drink plenty of water, take adequate rest, and monitor your temperature.";

    }

    else if (
      symptom.includes("headache")
    ) {

      reply =
        "🤕 Headaches may occur because of stress, dehydration, or lack of sleep. Stay hydrated and get enough rest.";

    }

    else if (
      symptom.includes("cold") ||
      symptom.includes("cough")
    ) {

      reply =
        "🤧 Common cold symptoms usually improve with rest, warm fluids, and proper hydration.";

    }

    else if (
      symptom.includes("stomach")
    ) {

      reply =
        "🍲 Stomach pain may be due to indigestion or infection. Eat light food and drink plenty of water.";

    }

    else if (
      symptom.includes("chest")
    ) {

      reply =
        "🚑 Chest pain should never be ignored. Please visit the nearest hospital immediately.";

    }

    else if (
      symptom.includes("covid")
    ) {

      reply =
        "😷 If you suspect COVID-19, isolate yourself and consult a doctor for testing.";

    }

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: reply
        }
      ]);

    }, 1000);

    setMessage("");

  };

  return (

    <section className="ai-doctor">

      <div className="ai-container">

        {/* Header */}

        <div className="ai-header">

          <div className="ai-avatar">

            <FaRobot />

          </div>

          <div>

            <h2>AI Doctor</h2>

            <p>Available 24 × 7</p>

          </div>

        </div>

        {/* Chat */}

        <div className="chat-box">

          {messages.map((msg, index) => (

            <div

              key={index}

              className={
                msg.sender === "user"
                  ? "user-message"
                  : "ai-message"
              }

            >

              {msg.text}

            </div>

          ))}

        </div>

        {/* Input */}

        <div className="chat-input">

          <input

            type="text"

            placeholder="Describe your symptoms..."

            value={message}

            onChange={(e) =>
              setMessage(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();

              }

            }}

          />

          <button

            className="send-btn"

            onClick={sendMessage}

          >

            <FaPaperPlane />

          </button>

        </div>

      </div>

    </section>

  );

}

export default AIDoctor;