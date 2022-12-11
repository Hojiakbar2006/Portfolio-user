import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Assets/Css/Global.css";
import { NavBar } from "./Components/NavBar/NavBar";

import home from "./Assets/Imgs/Home.svg";
import about from "./Assets/Imgs/About.svg";
import feedBack from "./Assets/Imgs/FeedBack.svg";
import learnMore from "./Assets/Imgs/LearnMore.svg";
import project from "./Assets/Imgs/Project.svg";
import team from "./Assets/Imgs/Team.svg";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Team } from "./Pages/Team/Team";
import { FeedBack } from "./Pages/FeedBack/FeedBack";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Project } from "./Pages/Project/Project";
import { LearnMore } from "./Pages/LearnMore/LearnMore";

export function App() {
  const locationPath = useLocation().pathname.split("/").slice(1, 2).join();
  const [style, setStyle] = useState({});

  useEffect(() => {
    switch (locationPath) {
      case "":
        setStyle({
          bacImg: home,
        });
        break;
      case "about":
        setStyle({
          bacImg: about,
        });
        break;
      case "project":
        setStyle({
          bacImg: project,
        });
        break;
      case "feed-send":
        setStyle({
          bacImg: feedBack,
        });
        break;
      case "team":
        setStyle({
          bacImg: team,
        });
        break;
      case "view":
        setStyle({
          bacImg: learnMore,
        });
        break;
      default:
    }
  }, [locationPath]);

  const route = [
    {
      name: "Home",
      routeName: "/",
      page: Home,
    },
    {
      name: "About",
      routeName: "/about",
      page: About,
    },
    {
      name: "My Project",
      routeName: "/project",
      page: Project,
    },
    { name: "Our team", routeName: "/team", page: Team },
    { name: "Feedback", routeName: "/feed-send", page: FeedBack },
    { name: null, routeName: "*", page: NotFound },
    { name: null, routeName: "/view/:id", page: LearnMore },
  ];

  return (
    <div id="portfolio" style={{ backgroundImage: `url(${style.bacImg})` }}>
      <div id="route-pages">
        <NavBar route={route} />
        <Routes>
          {route.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.routeName}
                element={<item.page />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}
