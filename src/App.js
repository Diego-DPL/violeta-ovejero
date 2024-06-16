import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';
import './App.css';

function App() {
  return (
    <>
    <div className='app'> 
      <Header />
      <Container component="main" sx={{ flexGrow: 1, mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Container>
      <Footer />
      </div>
    </>
  );
}

export default App;