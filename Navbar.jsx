function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0f766e",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>Bharat Yatra</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Home</span>
        <span style={{ marginRight: "20px" }}>States</span>
        <span style={{ marginRight: "20px" }}>Trip Planner</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;