import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(null);

  // Contact form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Message status
  const [status, setStatus] = useState("");

  const closeSection = () => {
    setActiveSection(null);
    setStatus("");
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending message...");

    const data = {
      access_key: "53404478-9ef8-4151-b4ee-2a8235a639c5",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: "New Message from Bharat-Yatra Website",
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus(
          "✅ Message sent successfully! We will get back to you soon."
        );

        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          "❌ Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus(
        "❌ Unable to send message. Please try again."
      );
    }
  };

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <nav className="home-navbar">

        <div
          className="home-logo"
          onClick={() => {
            closeSection();
            navigate("/");
          }}
        >
          Bharat-Yatra
        </div>

        <div className="home-nav-links">

          <span
            onClick={() => {
              closeSection();
              navigate("/");
            }}
          >
            🏠 Home
          </span>

          <span
            onClick={() => setActiveSection("about")}
          >
            ⓘ About
          </span>

          <span
            onClick={() => setActiveSection("service")}
          >
            💼 Service
          </span>

          <span
            onClick={() => setActiveSection("contact")}
          >
            📇 Contact Us
          </span>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      {!activeSection && (
        <section className="home-hero">

          <h1>Your Journey Your Story</h1>

          <p>Choose your Favourite Destination</p>

          <button
            className="travel-plan-button"
            onClick={() => navigate("/states")}
          >
            Travel Plan
          </button>

        </section>
      )}


      {/* ================= ABOUT ================= */}

      {activeSection === "about" && (
        <section className="home-info-section">

          <div className="home-info-card">

            <button
              className="close-info-button"
              onClick={closeSection}
            >
              ✕
            </button>

            <div className="info-icon">
              🇮🇳
            </div>

            <h1>About Bharat-Yatra</h1>

            <p>
              Bharat-Yatra is an India travel guide designed
              to help travelers discover beautiful destinations
              across India.
            </p>

            <p>
              Explore states, devotional places, hill stations,
              waterfalls, adventure destinations and famous food
              places in one place.
            </p>

            <p>
              Our goal is to make travel planning simple,
              informative and convenient for everyone.
            </p>

          </div>

        </section>
      )}


      {/* ================= SERVICE ================= */}

      {activeSection === "service" && (
        <section className="home-info-section">

          <div className="home-info-card">

            <button
              className="close-info-button"
              onClick={closeSection}
            >
              ✕
            </button>

            <div className="info-icon">
              🧳
            </div>

            <h1>Our Services</h1>

            <div className="service-list">

              <div className="service-item">

                <span>🗺️</span>

                <div>
                  <h3>Destination Guide</h3>

                  <p>
                    Explore tourist destinations across
                    different states of India.
                  </p>
                </div>

              </div>


              <div className="service-item">

                <span>🙏</span>

                <div>
                  <h3>Devotional Places</h3>

                  <p>
                    Discover famous temples and spiritual
                    destinations.
                  </p>
                </div>

              </div>


              <div className="service-item">

                <span>🏔️</span>

                <div>
                  <h3>Nature & Hill Stations</h3>

                  <p>
                    Find beautiful hills, waterfalls and
                    natural attractions.
                  </p>
                </div>

              </div>


              <div className="service-item">

                <span>🎢</span>

                <div>
                  <h3>Adventure Places</h3>

                  <p>
                    Explore trekking, adventure and
                    entertainment destinations.
                  </p>
                </div>

              </div>


              <div className="service-item">

                <span>🍽️</span>

                <div>
                  <h3>Food Places</h3>

                  <p>
                    Discover famous local foods and
                    food destinations.
                  </p>
                </div>

              </div>


              <div className="service-item">

                <span>📍</span>

                <div>
                  <h3>Google Maps</h3>

                  <p>
                    Open the location of tourist places
                    directly in Google Maps.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* ================= CONTACT ================= */}

      {activeSection === "contact" && (
        <section className="home-info-section">

          <div className="home-info-card contact-card">

            <button
              className="close-info-button"
              onClick={closeSection}
            >
              ✕
            </button>

            <div className="info-icon">
              📇
            </div>

            <h1>Contact Us</h1>

            <p>
              Have a question or suggestion about Bharat-Yatra?
              Send us a message using the form below.
            </p>


            {/* YOUR EMAIL */}

            <div className="contact-email">
              📧 nithyapfi0204@gmail.com
            </div>


            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* SEND BUTTON */}

              <button
                type="submit"
                className="send-message-button"
              >
                📤 Send Message
              </button>


              {/* STATUS MESSAGE */}

              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}

            </form>


            <p className="contact-note">
              Your message will be sent to the Bharat-Yatra
              website owner.
            </p>

          </div>

        </section>
      )}

    </div>
  );
}

export default Home;