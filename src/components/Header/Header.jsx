import React from 'react';
// import './Header.css';
import Menu from '../Menu/Menu';
import LoginMenu from '../LoginMenu/LoginMenu';
import Logo from '../Logo/Logo';

const Header = () => {

  const opciones = [{
    "Name":"Sobre Nosotros",
    "To":"about"
  },
  {
    "Name":"Precios",
    "To":"prices"
  },
  {
    "Name":"Contacto",
    "To":"contact"
  },
  {
    "Name":"Servicios",
    "To":"services"
  },
  {
    "Name":"Eventos",
    "To":"eventos"
  }];

  return (
    <div className="bg-bg1 grid grid-cols-3 gap-[15%] h-[8vh] top-0 sticky z-20"  >
      <Logo cssClass='logoContainer' />
      <Menu opciones={opciones}/>
      <LoginMenu/>
    </div>
  );
};

export default Header;