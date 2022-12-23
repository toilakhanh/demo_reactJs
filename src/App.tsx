import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/router";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
