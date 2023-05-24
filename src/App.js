import "./App.css";

import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect, useState } from "react";

import Login from "./Components/Login";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [showHome, setShowHome] = useState(true);

  //function to toggle the nav
  const toggleNav = () => {
    setShowNav(!showNav);
    //setShowHome(!showHome);
    if (showNav) {
      setShowHome(true);
    } else {
      setShowHome(false);
    }
  };

  // if (window.innerWidth > 860) {
  //   setShowHome(true)
  // } else {
  //   setShowHome(false)
  // }
  // function checkScreenSize() {
  //   if (window.innerWidth > 860) {
  //     console.log("Screen size is greater than 860px");
  //   } else {
  //     console.log("Screen size is less than or equal to 860px");
  //   }
  // }

  //useEffect hook to create a media query that checks if the screen width is above  860px. we then set the initial value of the showHome state variable based on whether the media query matches. we also add an event listener ti the media query to update the state whenever the screen size chAnges
  // useState(true);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(min-width: 860px)');
  //   setShowHome(!mediaQuery.matches);

  //   const handleResize = event => {
  //     setShowHome(!event.matches);
  //   };

  //   mediaQuery.addEventListener('change', handleResize);
  //   return () => mediaQuery.removeEventListener('change', handleResize);
  // }, []);

  return (
    <div className="App">
      <Navbar showNav={showNav} setShowNav={setShowNav} toggleNav={toggleNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={< Login/>} />
      </Routes>
      <div class={showHome ? "out_of_nav" : "outOfNavHidden"}>
        
      </div>
    </div>
  );
}

export default App;
