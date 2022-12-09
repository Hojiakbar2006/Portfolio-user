import React from "react";
import "./ShowProject.css";

import github from "../../Assets/Icons/GitHubGr.svg";
import netlify from "../../Assets/Icons/NetlifyGr.svg";

import like from "../../Assets/Icons/Like.svg";
import disLike from "../../Assets/Icons/Dislike.svg";

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

            <div className="modal-card">
              <div>
                <a target="blank" href={item.githubLink}>
                  <img src={github} alt="" />
                </a>
                <a target="blank" href={item.netlifyLink}>
                  <img src={netlify} alt="" />
                </a>
              </div>
              <button>Learn More</button>
              <div className="emotion">
                <button>
                  <img src={like} alt="" />
                  {item.like}
                </button>

                <button>
                  {item.disLike}
                  <img src={disLike} alt="" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
