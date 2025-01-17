import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import WhoWeAre from "./pages/about/WhoWeAre.jsx";
import Mentorship from "./pages/programs/mentorship/MentorShip.jsx";
import "./index.css";
import Header from "./components/layout/Header.jsx";
import OurBoard from "./pages/about/OurBoard.jsx";
import OurTeam from "./pages/about/OurTeam.jsx";
import Gallery from "./pages/media/Gallery.jsx";
import Footer from "./components/layout/Footer.jsx";
import ContactUs from "./pages/join-us/ContactUs.jsx";
import Volunteer from "./pages/join-us/Volunteer.jsx";
import Donate from "./pages/join-us/Donate.jsx";
import News_Stories from "./pages/media/News-Stories.jsx";
import SocialImpact from "./pages/programs/socialImpact/SocialImpact.jsx";
import NotFound from "./pages/not-found/NotFound.jsx";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about/ourBoard" element={<OurBoard />} />
        <Route path="/about/ourTeam" element={<OurTeam />} />
        <Route path="/about/whoWeAre" element={<WhoWeAre />} />
        <Route path="/media/Gallery" element={<Gallery />} />
        <Route path="/media/News&Stories" element={<News_Stories />} />
        <Route path="programs/mentorship" element={<Mentorship />} />
        <Route path="/programs/social-impact" element={<SocialImpact />} />
        <Route path="/joinUs/contactUs" element={<ContactUs />} />
        <Route path="/joinUs/volunteer" element={<Volunteer />} />
        <Route path="/joinUs/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <App />
  </BrowserRouter>
);
