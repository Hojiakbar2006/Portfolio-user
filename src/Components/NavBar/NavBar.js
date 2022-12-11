import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import burger from "../../Assets/Icons/burger.svg";
import close from "../../Assets/Icons/close.svg";
import myLogo from "../../Assets/Icons/my-logotip.png";

export function NavBar({ route }) {
  const [change, setChange] = useState(true);
  const [open, setOpen] = useState(false);

  setTimeout(() => {
    setChange(!change);
  }, 12000);

  return (
    <nav id="NavBar">
      <div className="profile">
        <figure>
          <img src={myLogo} alt="" />
        </figure>
        <div className="intro">
          {change ? (
            <p>welcome to my personal portfolio</p>
          ) : (
            <p>created by: Hojiakbar Nasriddinov</p>
          )}
        </div>
      </div>
      <div className="nav-item">
        {route.map((item, index) => {
          return (
            <NavLink to={item.routeName} key={index}>
              {item.name}
            </NavLink>
          );
        })}

        <button
          className={open ? "menuBtn zIndex" : "menuBtn"}
          onClick={() => setOpen(!open)}
        >
          <img src={open ? close : burger} alt="" />
        </button>
      </div>

      <div className={open ? "NavModal open" : "NavModal"}>
        {route.map((item, index) => {
          return (
            <NavLink to={item.routeName} key={index}>
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
