import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
