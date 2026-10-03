import { useParams, useNavigate } from "react-router-dom";

import AndhraPradesh from "../data/AndhraPradesh";
import Telangana from "../data/Telangana";
import ArunachalPradesh from "../data/ArunachalPradesh";
import Assam from "../data/Assam";
import Bihar from "../data/Bihar";
import Chhattisgarh from "../data/Chhattisgarh";
import Goa from "../data/Goa";
import Gujarat from "../data/Gujarat";
import Haryana from "../data/Haryana";
import HimachalPradesh from "../data/HimachalPradesh";
import JammuKashmir from "../data/JammuKashmir";
import Jharkhand from "../data/Jharkhand";
import Karnataka from "../data/Karnataka";
import Kerala from "../data/Kerala";
import MadhyaPradesh from "../data/MadhyaPradesh";
import Maharashtra from "../data/Maharashtra";
import Manipur from "../data/Manipur";
import Meghalaya from "../data/Meghalaya";
import Mizoram from "../data/Mizoram";
import Nagaland from "../data/Nagaland";
import Odisha from "../data/Odisha";
import Punjab from "../data/Punjab";
import Rajasthan from "../data/Rajasthan";
import Sikkim from "../data/Sikkim";
import TamilNadu from "../data/TamilNadu";
import Tripura from "../data/Tripura";
import UttarPradesh from "../data/UttarPradesh";
import Uttarakhand from "../data/Uttarakhand";
import WestBengal from "../data/WestBengal";

function StateDetails() {
  const { stateName } = useParams();
  const navigate = useNavigate();

  const stateData = {
    "andhra-pradesh": AndhraPradesh,
    telangana: Telangana,
    "arunachal-pradesh": ArunachalPradesh,
    assam: Assam,
    bihar: Bihar,
    chhattisgarh: Chhattisgarh,
    goa: Goa,
    gujarat: Gujarat,
    haryana: Haryana,
    "himachal-pradesh": HimachalPradesh,
    "jammu-kashmir": JammuKashmir,
    jharkhand: Jharkhand,
    karnataka: Karnataka,
    kerala: Kerala,
    "madhya-pradesh": MadhyaPradesh,
    maharashtra: Maharashtra,
    manipur: Manipur,
    meghalaya: Meghalaya,
    mizoram: Mizoram,
    nagaland: Nagaland,
    odisha: Odisha,
    punjab: Punjab,
    rajasthan: Rajasthan,
    sikkim: Sikkim,
    "tamil-nadu": TamilNadu,
    tripura: Tripura,
    "uttar-pradesh": UttarPradesh,
    uttarakhand: Uttarakhand,
    "west-bengal": WestBengal,
  };

  const state = stateData[stateName];

  if (!state) {
    return (
      <div className="state-not-found">
        <h1>State Not Found</h1>

        <button onClick={() => navigate("/states")}>
          ← Back to States
        </button>
      </div>
    );
  }

  const categories = [
    {
      key: "devotional",
      title: " Devotional Places",
      icon: "🙏",
      className: "devotional-section",
    },
    {
      key: "hillStations",
      title: " Hill Stations",
      icon: "🏔️",
      className: "hills-section",
    },
    {
      key: "waterfalls",
      title: " Waterfalls",
      icon: "💧",
      className: "waterfalls-section",
    },
    {
      key: "adventures",
      title: " Adventure Places",
      icon: "🎢",
      className: "adventure-section",
    },
    {
      key: "foodPlaces",
      title: "Food Places",
      icon: "🍽️",
      className: "food-section",
    },
  ];

  return (
    <div className="state-details-page">

      {/* =========================
          TOP NAVIGATION
      ========================= */}

      <div className="state-top-bar">

        <button
          className="back-button"
          onClick={() => navigate("/states")}
        >
          ← Back to States
        </button>

        <div className="state-brand">
          🇮🇳 Bharat-Yatra
        </div>

      </div>

      {/* =========================
          STATE HERO
      ========================= */}

      <section className="state-hero">

        <div className="state-hero-content">

          <span className="india-badge">
            🇮🇳 Explore India
          </span>

          <h1>{state.state}</h1>

          <div className="state-info">

            <div className="info-item">
              <span>🏛️</span>
              <div>
                <small>Capital</small>
                <strong>{state.capital}</strong>
              </div>
            </div>

            <div className="info-item">
              <span>🗓️</span>
              <div>
                <small>Best Time</small>
                <strong>{state.bestTime}</strong>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PLACES
      ========================= */}

      <main className="state-content">

        {categories.map((category) => {

          const places = state[category.key];

          if (!places || places.length === 0) {
            return null;
          }

          return (
            <section
              key={category.key}
              className={`place-category ${category.className}`}
            >

              <div className="category-heading">

                <div className="category-icon">
                  {category.icon}
                </div>

                <div>
                  <h2>{category.title}</h2>
                  <p>
                    Discover beautiful places in {state.state}
                  </p>
                </div>

              </div>

              <div className="places-grid">

                {places.map((place, index) => (

                  <article
                    className="place-card"
                    key={index}
                  >

                    <div className="place-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="place-card-content">

                      <h3>{place.name}</h3>

                      <div className="place-details">

                        <p>
                          <span>📍</span>
                          <strong>District:</strong>
                          {place.district}
                        </p>

                        <p>
                          <span>⏰</span>
                          <strong>Timings:</strong>
                          {place.timings}
                        </p>

                        <p>
                          <span>🎟️</span>
                          <strong>Entry Fee:</strong>
                          {place.entryFee}
                        </p>

                        <p>
                          <span>🌤️</span>
                          <strong>Best Season:</strong>
                          {place.bestSeason}
                        </p>

                      </div>

                      <div className="place-description">
                        {place.description}
                      </div>

                      {/* Google Maps */}
                      <a
                        className="map-button"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          `${place.name}, ${place.district}, ${state.state}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🗺️ View on Google Maps
                      </a>

                    </div>

                  </article>

                ))}

              </div>

            </section>
          );
        })}

      </main>

      {/* =========================
          BOTTOM BUTTON
      ========================= */}

      <div className="state-bottom">

        <button
          className="back-states-button"
          onClick={() => navigate("/states")}
        >
          ← Explore More States
        </button>

      </div>

    </div>
  );
}

export default StateDetails;