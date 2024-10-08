import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import LoginMenu from '../LoginMenu/LoginMenu';
import Logo from '../Logo/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const opciones = [
    { Name: "Sobre Mi", To: "about" },
    // { Name: "Precios", To: "prices" },
    { Name: "Contacto", To: "contact" },
    // { Name: "Reservas", To: "reservas" },
    { Name: "Eventos", To: "eventos" }
  ];

  return (
    <header className="bg-bg1 w-full top-0 sticky z-20 flex justify-between items-center p-4 md:p-6">
      <Logo />
      {/* Botón de Menú Hamburguesa para Móviles */}
      <button
        className="md:hidden text-[#FCFFE3] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
      >
        {/* Ícono de hamburguesa */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {/* Menú Responsive */}
      <nav
        className={`md:flex md:items-center md:gap-8 absolute md:static top-[8vh] left-0 right-0 bg-bg1 p-4 md:p-0 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}
      >
        <Menu opciones={opciones} />
        {/* <LoginMenu /> */}
      </nav>
    </header>
  );
};

export default Header;

