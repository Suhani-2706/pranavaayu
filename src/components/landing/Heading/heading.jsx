import React, { useState } from "react";
import "./heading.css";
import { Link } from "react-router-dom";

function Heading() {
  const [active, setActive] = useState("home");

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  return (
    <div className="head">
      <div className="logo">
        <img src="https://pranavaayu.com/wp-content/uploads/2021/09/Pranavaayu-Logo_Name.png" alt="Logo" />
      </div>
      <div className="menu">
        <ul style={{ listStyle: "none" }} className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#" className={active === 'profile' ? 'active' : ''} onClick={() => handleTabClick('profile')}>Profile</a>
          </li>
          <li>
            <a href="#" className={active === 'ach' ? 'active' : ''} onClick={() => handleTabClick('ach')}>Achievements</a>
          </li>
          <li>
            <a href="#" className={active === 'download' ? 'active' : ''} onClick={() => handleTabClick('download')}>Downloads</a>
          </li>
          <li>
            <a href="#" className={active === 'contact' ? 'active' : ''} onClick={() => handleTabClick('contact')}>Contact Us</a>
          </li>
          <li>
            <button><Link to="/Login">Login</Link></button>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Heading;
