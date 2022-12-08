import React from "react";
import "./ShowProject.css";

import github from "../../Assets/Imgs/GitHubGr.svg";
import netlify from "../../Assets/Imgs/NetlifyGr.svg";

export function ShowProject({ data }) {
  // const [open, setOpen] = useState(false);
  return (
    <div id="ShowProject">
      {data.map((item) => {
        return (
          <div className="card">
            <figure>
              <img src={item.img} alt="" />
            </figure>
            <p className="Name">{item.name}</p>

            <div className="modal-card"></div>
            <div>
              <a href={item.ggithubLink}>
                <img src={github} alt="" />
              </a>
              <a href={item.netlifyLink}>
                <img src={netlify} alt="" />
              </a>
            </div>
            <button></button>
          </div>
        );
      })}
    </div>
  );
}
