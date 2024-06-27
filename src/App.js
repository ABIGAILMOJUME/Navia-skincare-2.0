
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
import ServicesMenu from './components/Servicesmenu/ServicesMenu';
import Reviews from './components/Reviews/Reviews';
import Products from './components/Products/Products';
import Intro from './components/Intro/Intro';
import Specials from './components/Specials/Specials';
import ParallaxImage from './components/ParallaxImage/ParallaxImage';



function App() {
  return (
    <div className="App">
      <AnnouncementBar/>
      <NavBar/>
      <Hero/>
      <Marquee/>
      <ServicesMenu/>
      <Reviews/>
      <Products/>
      <Intro/>
      <Specials/>
      <ParallaxImage/>


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
