import React from "react";
import "./Home.css";

import instagram from "../../Assets/Icons/instagram.svg";
import facebook from "../../Assets/Icons/facebook.svg";
import github from "../../Assets/Icons/github.svg";
import netlify from "../../Assets/Icons/netlify.svg";
import telegram from "../../Assets/Icons/telegram.svg";
import bitbucket from "../../Assets/Icons/bitbucket.svg";

import programming from "../../Assets/Imgs/Programming on a laptop.svg";

export function Home() {
  return (
    <div id="home">
      <div className="left">
        <p>
          Nasriddinov Hojiakbar <span>Ikromjon O'g'li</span>
        </p>
        <div className="link-item">
          <div>
            <a
              target="blank"
              href="https://www.instagram.com/hojiakbarnasriddinov0628/"
            >
              <img src={instagram} alt="" />
            </a>
            <a target="blank" href="https://t.me/hojiakbar0628">
              <img src={telegram} alt="" />
            </a>
            <a target="blank" href="/">
              <img src={facebook} alt="" />
            </a>
            <a target="blank" href="https://github.com/Hojiakbar2006">
              <img src={github} alt="" />
            </a>
            <a
              target="blank"
              href="https://app.netlify.com/teams/hojiakbar2006/"
            >
              <img src={netlify} alt="" />
            </a>
            <a target="blank" href="/">
              <img src={bitbucket} alt="" />
            </a>
          </div>
          <a type="tel" href="tel:948620628">
            +998(94) 862 0628
          </a>
        </div>
      </div>
      <figure className="right">
        <img src={programming} alt="" />
      </figure>
    </div>
  );
}
