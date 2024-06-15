import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;