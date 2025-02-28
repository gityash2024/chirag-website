import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import OurSerivce from "./pages/OurSerivce";
import AboutTwo from "./pages/AboutTwo";
import OurSerivceTwo from "./pages/OurSerivceTwo";
import PrivacyPage from "./pages/PrivacyPage";
import TermandCondition from "./pages/TermandCondition";
import PricingAndPolicies from "./pages/PricingAndPolicies";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/hometwo",
        element: <HomeTwo />,
      },
      {
        path: "/homethree",
        element: <HomeThree />,
      },
      {
        path: "/homefour",
        element: <HomeFour />,
      },
      {
        path: "/ourservice",
        element: <OurSerivce />,
      },
      {
        path: "/ourservicetwo",
        element: <OurSerivceTwo />,
      },
      {
        path: "/privacy",
        element: <PrivacyPage />,
      },
      {
        path: "/terms",
        element: <TermandCondition />,
      },
      {
        path: "abouttwo",
        element: <AboutTwo />,
      },
      {
        path: "pricingandpolicies",
        element: <PricingAndPolicies />,
      },
     
    ],
  },
]);
