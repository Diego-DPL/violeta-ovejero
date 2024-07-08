import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


// Obtén el contenedor de la aplicación
const container = document.getElementById('root');

// Crea el root utilizando createRoot
const root = createRoot(container);

// Renderiza la aplicación
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);