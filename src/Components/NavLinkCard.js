import React from "react";

import "../Components/Styles.css/Individual.css";
import { Link } from "react-router-dom";
function NavLinkCard() {
  return (
    <div className="nav_card">
      <div className="side-nav-div"></div>
      <ul>
        <li>
          <Link to="products">Products</Link>
        </li>
        <div className="link-linee"></div>
        <li>
          <Link to="donateStock">Donate Stock</Link>
        </li>
        <div className="link-linee"></div>
        <li>
          <Link to="donateCrypto">Donate Crypto</Link>
        </li>
        <div className="link-Linee"></div>
        <li>
          <Link to="help">Help</Link>
        </li>
        <div className="link-linee"></div>
        <li>
          <Link to="glossary">Glossary</Link>
        </li>
        <div className="link-linee"></div>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <div className="link-linee"></div>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <div className="link-linee"></div>
      </ul>
    </div>
  );
}

export default NavLinkCard;
