import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar({ route }) {
  const [change, setChange] = useState(true);

  setTimeout(() => {
    setChange(!change);
  }, 10000);
  return (
    <nav id="NavBar">
      <figure className="profile"></figure>
      <div className="intro">
        {change ? (
          <h1>Welcome to my portfolio</h1>
        ) : (
          <h1>created: Nasriddinov Hojiakbar</h1>
        )}
      </div>
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
