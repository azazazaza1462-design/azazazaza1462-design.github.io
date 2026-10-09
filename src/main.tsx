import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./styles/global.css";
import "./styles/enhancements.css";
import "./styles/technology-world.css";
import "./styles/contact.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
