import React from 'react';
import './Header.css';
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
  }];

  return (
    <div className="header"  >
      <Logo cssClass='logoContainer' />
      <Menu opciones={opciones}/>
      <LoginMenu/>

      {/* <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Psicóloga
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
            Reserva
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/payment" style={{ textDecoration: 'none', color: 'inherit' }}>
            Pago
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/confirmation" style={{ textDecoration: 'none', color: 'inherit' }}>
            Confirmación
          </Link>
        </Button>
      </Toolbar> */}
    </div>
  );
};

export default Header;