import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Board from './pages/board/Board.jsx';
import About from './pages/about/About.jsx';
import Mentorship from './pages/mentorship/Mentorship.jsx';
import Program from './pages/program/Program.jsx';
import Team from './pages/team/Team.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="board" element={<Board />} />
      <Route path="about" element={<About />} />
      <Route path="mentorship" element={<Mentorship />} />
      <Route path="program" element={<Program />} />
      <Route path="team" element={<Team />} />
    </Routes>
  </BrowserRouter>
);