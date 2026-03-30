import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResidentialPage from "./pages/ResidentialPage";
import CommercialPage from "./pages/CommercialPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "residential", Component: ResidentialPage },
      { path: "commercial", Component: CommercialPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
