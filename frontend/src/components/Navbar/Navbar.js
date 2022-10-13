import React, { useState, useEffect, Text } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import  getPoints  from '../../services/pointsService'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [points, setPoints] = useState(0);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    getPoints(setPoints)
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            E-trade
            <i class="fas fa-recycle" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-links" onClick={closeMobileMenu}>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/listing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trades" className="nav-links" onClick={closeMobileMenu}>
                Trades
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rewards" className="nav-links" onClick={closeMobileMenu}>
                Rewards
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-mobile" buttonSize="btn--large " to="/"> Logout</Button>}
          <div className="nav-links">
             <p>{points} points</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
