import React, { useState } from "react";
import "../Components/Styles.css/Navbar.css";
import "./Styles.css/Individual.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import freeWillLogo from "../Images/freeWillLogo.webp";

function Navbar({ showNav, setShowNav, toggleNav }) {
  //functions to append the navlinks to the navCardcontainer upon clicking the navitems
  //we will have a state of navcardcontainer. where by the initial state is an empty array. then upon clicking each nav item, the state changes and renders an array of navlinks

  //a hndleclick function to change the state of each button clicked

  const individualsLinks = [
    {
      linkName: "Profits",
      linkAddress: "/profits",
    },
    {
      linkName: "Donate Stocks",
      linkAddress: "/donateStocks",
    },
    {
      linkName: "Donate Crypto",
      linkAddress: "/donateCrypto",
    },
    {
      linkName: "Help",
      linkAddress: "/help",
    },
    {
      linkName: "Glossary",
      linkAddress: "/glossary",
    },
  ];

  const nonProfitsLinks = [
    {
      linkName: "Freewill platform",
      linkAddress: "/freeWillPlatform",
    },
    {
      linkName: "Requests demo",
      linkAddress: "/requestDemo",
    },
    {
      linkName: "Webinars",
      linkAddress: "/webinars",
    },
    {
      linkName: "Planned Giving Suites",
      linkAddress: "/plannedGiving",
    },
  ];

  const LawyersLinks = [
    {
      linkName: "Support for T&Lawyers",
      linkAddress: "/supportForLawyers",
    },
    {
      linkName: "Become a freewill Fellow",
      linkAddress: "/becomeFreewillFellow",
    },
  ];

  const aboutUsLinks = [
    {
      linkName: "Who we are",
      linkAddress: "/whoWeAre",
    },
    {
      linkName: "Career",
      linkAddress: "/career",
    },
    {
      linkName: "Security",
      linkAddress: "/security",
    },
    {
      linkName: "Accessibility",
      linkAddress: "/accessibility",
    },
    {
      linkName: "Contact Us",
      linkAddress: "/Contact Us",
    },
  ];

  //navitems state to display the nav

  //navlinks state to set different links
  const [items, setItems] = useState([]);
  //state to display the individual links
  const [showIndividualLinks, setShowIndividualLinks] = useState(false);
  //state to display the nonprofitsLinks
  const [showProfitsLinks, setShowProfitsLinks] = useState(false);
  //state to display the lawyersLinks
  const [showLawyers, setShowLawyers] = useState(false);
  //state to display the aboutUS
  const [showAbout, setShowAbout] = useState(false);
  //state to define the sidenavitem
  const [showSideNavItem, setShowSideNavItem] = useState("");

  

  const handleIndividualsClick = () => {
    setItems(individualsLinks);
    setShowIndividualLinks(!showIndividualLinks);
    setShowSideNavItem("For Individiual");
  };

  const handleProfitsClick = () => {
    setItems(nonProfitsLinks);
    setShowProfitsLinks(!showProfitsLinks);
    setShowSideNavItem("For non Profits");
  };

  const handleLawyersClick = () => {
    setShowLawyers(!showLawyers);
    setItems(LawyersLinks);
    setShowSideNavItem("For Lawyers");
  };

  const handleAboutClick = () => {
    setItems(aboutUsLinks);
    setShowAbout(!showAbout);
    setShowSideNavItem("About Us");
  };
  //const sideNavItems = ["For individuals", "For Nonprofits", "Lawyers", "About Us"]
  //conditions for diffrent classnames for the navcard copmonent
  let className = "nav_card";
  let nonDisplayClassName = "individual_navCard_div";

  if (showIndividualLinks) {
    className = nonDisplayClassName;
  } else {
    className = className
  }
// 
  if (showProfitsLinks) {
    className = nonDisplayClassName;
  } else {
    className = className
  }

  if (showAbout) {
    className = nonDisplayClassName;
  } else {
    className = className
  }


  if (showLawyers) {
    className = nonDisplayClassName;
  }else {
    className = className
  }
  

  return (
    <div className="navbar-outerContainer">
      <div className="navBar-innerContainer">
        <div className="web_logo">
          <Link to="/" className="home_link link">
            <img src={freeWillLogo} alt="free-will-logo" />
          </Link>
        </div>
        <div className={showNav ? "rightnav" : "hiddennav"}>
          <div className="route_links">
            <div class="individual_item_div nav_items">
              <div class="navButtons">
                <button onClick={handleIndividualsClick}>
                  Fon individuals
                </button>
                <div className="link-linee link-line-navItem"></div>
                <button onClick={handleProfitsClick}>Fon non Profits</button>
                <div className="link-linee link-line-navItem"></div>
                <button onClick={handleLawyersClick}>Fon Lawyers</button>
                <div className="link-linee link-line-navItem"></div>
                <button onClick={handleAboutClick}>About us</button>
                <div className="link-linee link-line-navItem"></div>
              </div>
              <div className={className}>
                <div className="side-nav-div">
                  <span className="side-nav-text">{showSideNavItem}</span>
                </div>
                <ul>
                  {items.map((item) => (
                    <React.Fragment>
                      <li>
                        <Link to={item.linkAddress} key={item}>
                          {item.linkName}
                        </Link>
                      </li>
                      <div className="link-linee"></div>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="log-get">
            <Link to="/login" className="link log">
              Log in
            </Link>
            <Link to="/getstarted" className="getstarted link">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <button className="btn" onClick={toggleNav}>
        <ReorderIcon />
      </button>
    </div>
  );
}

export default Navbar;
