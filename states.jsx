import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

function States() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  // =========================
  // ALL STATES
  // =========================

  const states = [
    {
      name: "Andhra Pradesh",
      slug: "andhra-pradesh",
      region: "South",
      data: AndhraPradesh,
    },
    {
      name: "Telangana",
      slug: "telangana",
      region: "South",
      data: Telangana,
    },
    {
      name: "Arunachal Pradesh",
      slug: "arunachal-pradesh",
      region: "Northeast",
      data: ArunachalPradesh,
    },
    {
      name: "Assam",
      slug: "assam",
      region: "Northeast",
      data: Assam,
    },
    {
      name: "Bihar",
      slug: "bihar",
      region: "East",
      data: Bihar,
    },
    {
      name: "Chhattisgarh",
      slug: "chhattisgarh",
      region: "Central",
      data: Chhattisgarh,
    },
    {
      name: "Goa",
      slug: "goa",
      region: "West",
      data: Goa,
    },
    {
      name: "Gujarat",
      slug: "gujarat",
      region: "West",
      data: Gujarat,
    },
    {
      name: "Haryana",
      slug: "haryana",
      region: "North",
      data: Haryana,
    },
    {
      name: "Himachal Pradesh",
      slug: "himachal-pradesh",
      region: "North",
      data: HimachalPradesh,
    },
    {
      name: "Jammu & Kashmir",
      slug: "jammu-kashmir",
      region: "North",
      data: JammuKashmir,
    },
    {
      name: "Jharkhand",
      slug: "jharkhand",
      region: "East",
      data: Jharkhand,
    },
    {
      name: "Karnataka",
      slug: "karnataka",
      region: "South",
      data: Karnataka,
    },
    {
      name: "Kerala",
      slug: "kerala",
      region: "South",
      data: Kerala,
    },
    {
      name: "Madhya Pradesh",
      slug: "madhya-pradesh",
      region: "Central",
      data: MadhyaPradesh,
    },
    {
      name: "Maharashtra",
      slug: "maharashtra",
      region: "West",
      data: Maharashtra,
    },
    {
      name: "Manipur",
      slug: "manipur",
      region: "Northeast",
      data: Manipur,
    },
    {
      name: "Meghalaya",
      slug: "meghalaya",
      region: "Northeast",
      data: Meghalaya,
    },
    {
      name: "Mizoram",
      slug: "mizoram",
      region: "Northeast",
      data: Mizoram,
    },
    {
      name: "Nagaland",
      slug: "nagaland",
      region: "Northeast",
      data: Nagaland,
    },
    {
      name: "Odisha",
      slug: "odisha",
      region: "East",
      data: Odisha,
    },
    {
      name: "Punjab",
      slug: "punjab",
      region: "North",
      data: Punjab,
    },
    {
      name: "Rajasthan",
      slug: "rajasthan",
      region: "North",
      data: Rajasthan,
    },
    {
      name: "Sikkim",
      slug: "sikkim",
      region: "Northeast",
      data: Sikkim,
    },
    {
      name: "Tamil Nadu",
      slug: "tamil-nadu",
      region: "South",
      data: TamilNadu,
    },
    {
      name: "Tripura",
      slug: "tripura",
      region: "Northeast",
      data: Tripura,
    },
    {
      name: "Uttar Pradesh",
      slug: "uttar-pradesh",
      region: "North",
      data: UttarPradesh,
    },
    {
      name: "Uttarakhand",
      slug: "uttarakhand",
      region: "North",
      data: Uttarakhand,
    },
    {
      name: "West Bengal",
      slug: "west-bengal",
      region: "East",
      data: WestBengal,
    },
  ];

  // =========================
  // REGIONS
  // =========================

  const regions = [
    "All",
    "North",
    "South",
    "East",
    "West",
    "Central",
    "Northeast",
  ];

  // =========================
  // SEARCH + REGION FILTER
  // =========================

  const filteredStates = states.filter((state) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      state.name.toLowerCase().includes(searchText) ||
      state.data?.capital?.toLowerCase().includes(searchText);

    const matchesRegion =
      region === "All" || state.region === region;

    return matchesSearch && matchesRegion;
  });

  // =========================
  // OPEN STATE DETAILS
  // =========================

  const openState = (slug) => {
    navigate(`/state/${slug}`);
  };

  // =========================
  // PAGE
  // =========================

  return (
    <div className="states-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="states-header">
        <h1>🇮🇳 India Travel Guide</h1>
        <p>Explore the beautiful states of India</p>
      </header>

      {/* =========================
          SEARCH
      ========================= */}

      <div className="states-search">
        <input
          type="text"
          placeholder="Search state or capital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* =========================
          REGION FILTER
      ========================= */}

      <div className="region-buttons">
        {regions.map((item) => (
          <button
            key={item}
            className={
              region === item ? "active-region" : ""
            }
            onClick={() => setRegion(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* =========================
          STATE CARDS
      ========================= */}

      <div className="states-grid">

        {filteredStates.map((state) => (
          <div
            className="state-card"
            key={state.slug}
            onClick={() => openState(state.slug)}
          >

            <h2>{state.name}</h2>

            <p>
              <strong>Capital:</strong>{" "}
              {state.data?.capital || "Not available"}
            </p>

            <p>
              <strong>Best Time:</strong>{" "}
              {state.data?.bestTime || "Not available"}
            </p>

            <span className="state-region">
              {state.region}
            </span>

            {/* Explore Button */}
            <button
              className="explore-button"
              onClick={(e) => {
                e.stopPropagation();
                openState(state.slug);
              }}
            >
              Explore →
            </button>

          </div>
        ))}

      </div>

      {/* =========================
          NO RESULTS
      ========================= */}

      {filteredStates.length === 0 && (
        <div className="no-results">
          <h2>No states found</h2>
          <p>
            Try another state, capital, or region.
          </p>
        </div>
      )}

    </div>
  );
}

export default States;