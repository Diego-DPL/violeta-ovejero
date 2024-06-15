import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar class="header"  >
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;