
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnnouncementBar from './components/Announcementbar/announcementbar';
import NavBar from './components/Navbar/navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Hero from './components/Hero/Hero';
import Marquee from './components/marquee/marquee';

function App() {
  return (
    <div className="App">
      <AnnouncementBar/>
      <NavBar/>
      <Hero/>
      <Marquee/>
      <Routes>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/shop' element ={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;