import "./App.css";

import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import LoginForm from "./Components/Login";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showHome, setShowHome] = useState(true);

  //function to toggle the nav
  const toggleNav = () => {
    setShowNav(!showNav);
    setShowHome(!showHome);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowHome(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleSmallScreen = () => {
      if (window.innerWidth < 768) {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleSmallScreen);
    return () => {
      window.removeEventListener("resize", handleSmallScreen);
    };
  }, []);

  return (
    <div className="App">
      <Navbar showNav={showNav} setShowNav={setShowNav} toggleNav={toggleNav} />
      <div className={showHome ? " content" : "contentHide"}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
