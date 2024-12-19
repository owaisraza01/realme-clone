import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Logo from './assets/logo.png';
import Image1 from './assets/carousel1.webp';
import Image2 from './assets/carousel2.webp';
import Image3 from './assets/carousel3.webp';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Smartphones from './pages/Smartphones';
import Accessories from './pages/Accessories';
import Footer from './pages/Footer';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar image={Logo} />
    <Carousel image1={Image1} image2={Image2} image3={Image3} />
    <Smartphones />
    <Accessories />
    <Footer />
  </React.StrictMode>
);
