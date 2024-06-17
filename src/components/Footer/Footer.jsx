import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='topFooter'>
        <Logo cssClass="logoFooter"/>
        <div className='socialMediaIconsFooter'> 
          <div className='socialMedia'><InstagramIcon /></div>
          <div className='socialMedia'><FacebookIcon /></div>
          <div className='socialMedia'><XIcon /></div>
        </div>

      </div>

      <div className='footerDivider'></div>
      <p className='derechos'>© Todos los derechos reservados 2024</p>
    </div>


    // <Box
    //   component="footer"
    //   sx={{
    //     py: 2,
    //     px: 2,
    //     mt: 'auto',
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    //     textAlign: 'center',
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     position: 'fixed',
    //     bottom: 0,
    //     width: '100%'
    //   }}
    // >
    //   <Typography variant="body1">
    //     © 2024 Psicóloga. Todos los derechos reservados.
    //   </Typography>
    //   <IconButton
    //     component={Link}
    //     href="https://www.instagram.com/violetavop.psicologa"
    //     target="_blank"
    //     rel="noopener"
    //     color="inherit"
    //     sx={{ mr: 2 }} // Add margin to the right
    //   >
    //     <InstagramIcon />
    //   </IconButton>
    // </Box>
  );
};

export default Footer;