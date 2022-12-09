import React from "react";
import "./Team.css"
import { ShowMembers } from "../../Components/ShowMembers/ShowMembers";

export function Team() {
  const data = [
    {
      id: 1,
      name: "Oybek",
      lastName: "Abdujabborov",
      level: "Ful Stack",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
    {
      id: 2,
      name: "G'oyibberdi",
      lastName: "Bilmayman",
      level: "praktikant",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
    {
      id: 3,
      name: "Behruz",
      lastName: "bilmayman",
      level: "Ful Stack",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
    {
      id: 4,
      name: "Muslim",
      lastName: "Bilmayman",
      level: "praktikant",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
    {
      id: 5,
      name: "Omadbek",
      lastName: "Umarboyev",
      level: "praktikant",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
    {
      id: 6,
      name: "Muhammadxon",
      lastName: "Bilmayman",
      level: "Praktikant",
      githubLink: "",
      netlifyLink: "",
      about:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam hic harum quas amet, neque corrupti adipisci accusantium suscipit dicta officiis.ß",
      img: "",
    },
  ];

  return (
    <div id="Team">
      <ShowMembers data={data} />
    </div>
  );
}
