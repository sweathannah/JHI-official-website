import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import WhoWeAre from './pages/about/WhoWeAre.jsx';
import Mentorship from './pages/mentorship/MentorShip.jsx';
import Program from './pages/program/Program.jsx';
import Team from './pages/team/Team.jsx';
import './index.css'
import Header from './components/layout/Header.jsx';
import OurBoard from './pages/about/OurBoard.jsx';
import OurTeam from './pages/about/OurTeam.jsx';
import Gallery from './pages/media/Gallery.jsx';
import News_Stories from './pages/media/News_Stories.jsx';
import Events from './pages/media/Events.jsx';
import EventDetail from "./pages/media/EventDetail.jsx";
import Footer from './components/layout/Footer.jsx';
import ContactUs from './pages/join-us/ContactUs.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/ourBoard" element={<OurBoard />} />
      <Route path='/about/ourTeam' element={<OurTeam />} />
      <Route path="/about/whoWeAre" element={<WhoWeAre />} />
      <Route path="/media/Gallery" element={<Gallery />} />
      <Route path="/media/News_Stories" element={<News_Stories/>} />
      <Route path="/media/Events" element={<Events/>} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="mentorship" element={<Mentorship />} />
      <Route path="program" element={<Program />} />
      <Route path="team" element={<Team />} />
      <Route path="/joinUs/contactUs" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);