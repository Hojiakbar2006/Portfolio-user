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
          Nasriddinov Hojiakbar <span>Ikromjonovich</span>
        </p>
        <div>
          <div>
            {" "}
            <a
              target="blank"
              href="https://www.instagram.com/hojiakbarnasriddinov0628/"
            >
              <img src={instagram} alt="" />
            </a>
            <a href="https://t.me/hojiakbar0628">
              <img src={telegram} alt="" />
            </a>
            <a href="/">
              <img src={facebook} alt="" />
            </a>
            <a href="https://github.com/Hojiakbar2006">
              <img src={github} alt="" />
            </a>
            <a href="https://app.netlify.com/teams/hojiakbar2006/">
              <img src={netlify} alt="" />
            </a>
            <a href="/">
              <img src={bitbucket} alt="" />
            </a>
          </div>
          <a type="tel" href="tel:948620628">
            {" "}
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
