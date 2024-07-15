import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Prices from './pages/Prices/Prices';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Servicios/Services';
import Eventos from './pages/Eventos/Eventos';
import Login from './pages/Login/Login';
import SingUp from './pages/SingUp/SingUp';
import Reservas from './pages/Reservas/Reservas';
import Payment from './pages/Payment';

function App() {

  const servicios = [{
    "Servicio":"Terapia Individual Online",
    "Precio":"60",
    "Moneda": "€",
    "Características":["1 Hora de sesión", "Cancelación en 24h", "Atención personalizada", "Diagnostico", "Soporte 24h"],
    "Seleccionado": true
  },
  {
    "Servicio":"Terapia individual presencial",
    "Precio":"60",
    "Moneda": "€",
    "Características":["1 Hora de sesión", "Cancelación en 24h", "Atención personalizada", "Diagnostico", "Soporte 24h"],
    "Seleccionado": false
  }
  ,
  {
    "Servicio":"Terapia de parejas",
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
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singUp" element={<SingUp />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/pago" element={<Payment />} />
            <Route path="/confirmacion" element={<div>¡Reserva confirmada!</div>} />
          </Routes>
        {/* </Container> */}
        <Footer />
      </div>
    </>
  );
}

export default App;