import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* India Travel Guide */}
      <Route
        path="/states"
        element={<States />}
      />

      {/* Individual State */}
      <Route
        path="/state/:stateName"
        element={<StateDetails />}
      />

    </Routes>
  );
}

export default App;