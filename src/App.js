import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Prices from './pages/Prices/Prices';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Servicios/Services';

function App() {

  const servicios = [{
    "Servicio":"Terapia Individual Online",
    "Precio":"60",
    "Moneda": "€",
    "Características":["1 Hora de sesión", "Cancelación en 24h", "Atención personalizada", "Diagnostico", "Soporte 24h"],
    "Seleccionado": true
  },
  {
    "Servicio":"Terapia Individual Presencial",
    "Precio":"60",
    "Moneda": "€",
    "Características":["1 Hora de sesión", "Cancelación en 24h", "Atención personalizada", "Diagnostico", "Soporte 24h"],
    "Seleccionado": false
  }
  ,
  {
    "Servicio":"Terapia de Parejas",
    "Precio":"80",
    "Moneda": "€",
    "Características":["1 Hora de sesión", "Cancelación en 24h", "Atención personalizada", "Diagnostico", "Soporte 24h"],
    "Seleccionado": false
  }
];


  return (
    <>
    <div className='app'> 
      <Header />
      {/* <Container component="main" sx={{ flexGrow: 1, mt: 4 }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices servicios={servicios}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact servicios={servicios}/>} />
          <Route path="/services" element={<Services />} />
        </Routes>
      {/* </Container> */}
      <Footer />
      </div>
    </>
  );
}

export default App;