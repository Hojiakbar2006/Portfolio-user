import React from "react";
import "./Project.css";
import safari from "../../Assets/Imgs/Safari.png";
import { ShowProject } from "../../Components/ShowProject/ShowProject";

export function Project() {
  const projects = [
    {
      id: 1,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 2,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 3,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 4,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 5,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 6,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 7,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 8,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
    {
      id: 9,
      name: "Safari",
      img: safari,
      like: 23,
      disLike: 44,
      githubLink: "https://github.com/Hojiakbar2006/safari-shop",
      netlifyLink: "https://webstore-safari.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestias at nemo quo, repellat mollitia quidem vel quae veniam sapiente provident recusandae ex dicta earum consequatur cum fuga voluptatum harum.",
    },
  ];
  return (
    <div id="project">
      <ShowProject data={projects}/>
    </div>
  );
}
