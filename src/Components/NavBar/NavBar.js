import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar({ route }) {
  return (
    <nav id="NavBar">
      <figure className="profile"></figure>
      <div className="intro">WELCOME TO MY PORTFOLIO</div>
      <div className="nav-item">
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
