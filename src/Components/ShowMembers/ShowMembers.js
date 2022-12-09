import React from "react";
import "./ShowMembers.css";

import Giticon from "../../Assets/Icons/github.svg";
import Neticon from "../../Assets/Icons/netlify.svg";
import Insicon from "../../Assets/Icons/instagram.svg";
import Tgicon from "../../Assets/Icons/telegram.svg";

export function ShowMembers({ data }) {
  return (
    <div id="ShowMembers">
      {data.map((item) => {
        return (
          <div className="membersCard">
            <figure></figure>
            <div>
              <h3>{item.name}</h3>
              <h3>{item.lastName}</h3>
              <p>
                <span>level:</span>
                {item.level}
              </p>
              <p>
                <span>about:</span>
                {item.about}
              </p>
              <div>
                <a href="/">
                  <img src={Insicon} alt="" />
                </a>
                <a href="/">
                  <img src={Tgicon} alt="" />
                </a>
                <a href="/">
                  <img src={Giticon} alt="" />
                </a>
                <a href="/">
                  <img src={Neticon} alt="" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
