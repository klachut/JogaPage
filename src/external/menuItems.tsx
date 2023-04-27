import Home from "../pages/Home";
import About from "../pages/About";
import LandingPage from "../pages/LandingPage";
import MeetUsPage from "../components/Pages/MeetUsPage";
import JogaTypes from "../components/Pages/JogaTypes";
export const menuLink = [
  {
    id: "0",
    name: "Poznaj nas!",
    component: <MeetUsPage />,
    route: "/meetus",
  },
  {
    id: "1",
    name: "Rodzaje jogi",
    component: <JogaTypes />,
    route: "/jogatypes",
  },
  {
    id: "2",
    name: "Wydarzenia",
    component: <About />,
    route: "/events",
  },
  {
    id: "3",
    name: "Zalety jogowania",
    component: <About />,
    route: "/cons",
  },
  {
    id: "4",
    name: "Kontakt",
    component: <About />,
    route: "/contact",
  },
];
export const routes = [
  {
    id: "0",
    name: "Kontakt",
    component: <LandingPage />,
    route: "/",
  },
  {
    id: "1",
    name: "Poznaj nas!",
    component: <MeetUsPage />,
    route: "/meetus",
  },
  {
    id: "2",
    name: "Rodzaje jogi",
    component: <JogaTypes />,
    route: "/jogatypes",
  },
  {
    id: "3",
    name: "Wydarzenia",
    component: <About />,
    route: "/events",
  },
  {
    id: "4",
    name: "Zalety jogowania",
    component: <About />,
    route: "/cons",
  },
  {
    id: "5",
    name: "Kontakt",
    component: <About />,
    route: "/contact",
  },
];
