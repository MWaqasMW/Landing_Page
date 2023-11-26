
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Campuses from '../pages/Campuses';
import Events from '../pages/Events';
import Succes from '../pages/Succes';
import Course from '../pages/Course';

function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campuses" element={<Campuses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/succes" element={<Succes />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
