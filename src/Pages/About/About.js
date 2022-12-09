import React from "react";
import "./About.css";

import img from "../../Assets/Imgs/programming/Programming.png";

export function About() {
  return (
    <div id="About">
      <div className="left">
        <p>
          <span>
            I'm a Front-End Developer located in Uzbekistan. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.
          </span>
          <span>
            I am an extremely curious and self-motivated individual with a huge
            passion for design in general. As an autodidact, I take a very
            positive and ego-free approach to all aspects of my life, and I
            carry a strong work ethic with me wherever I go.
          </span>
          <span>
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of Football, outdoor activities, TV
            series and English language.
          </span>
          Interested in the entire frontend spectrum and working on ambitious
          projects with positive people.
        </p>
      </div>
      <figure className="right">
        <img src={img} alt="" />
      </figure>
    </div>
  );
}
