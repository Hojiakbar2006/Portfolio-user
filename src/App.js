import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Assets/Css/Global.css";
import { NavBar } from "./Components/NavBar/NavBar";

import home from "./Assets/Imgs/Home.svg";
import about from "./Assets/Imgs/About.svg";
import feedBack from "./Assets/Imgs/FeedBack.svg";
import LearnMore from "./Assets/Imgs/LearnMore.svg";
import project from "./Assets/Imgs/Project.svg";
import team from "./Assets/Imgs/Team.svg";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Team } from "./Pages/Team/Team";
import { FeedBack } from "./Pages/FeedBack/FeedBack";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Project } from "./Pages/Project/Project";

export function App() {
  const locationPath = useLocation().pathname;
  const [style, setStyle] = useState({});

  useEffect(() => {
    switch (locationPath) {
      case "/":
        setStyle({
          bacImg: home,
          bacColor: "",
        });
        break;
      case "/about":
        setStyle({
          bacImg: about,
          bacColor: "",
        });
        break;
      case "/project":
        setStyle({
          bacImg: project,
          bacColor: "",
        });
        break;
      case "/feed-send":
        setStyle({
          bacImg: feedBack,
          bacColor: "",
        });
        break;
      case "/team":
        setStyle({
          bacImg: team,
          bacColor: "",
        });
        break;
      case "/learn-more":
        setStyle({
          bacImg: LearnMore,
          bacColor: "",
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
  ];

  return (
    <div id="portfolio" style={{ backgroundImage: `url(${style.bacImg})` }}>
      <div id="route-pages">
        <NavBar route={route} />
        <Routes>
          {route.map((item, index) => {
            return <Route path={item.routeName} element={<item.page />} />;
          })}
        </Routes>
      </div>
    </div>
  );
}
