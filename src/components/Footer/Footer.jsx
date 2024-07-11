import React from 'react';
// import './Footer.css';
import Logo from '../Logo/Logo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className='footer flex flex-col bottom-0 w-full bg-brand2 z-20'>

      <div className='topfooter flex flex-row justify-between items-center ml-16 mr-16'>
        <Logo cssClass="logoFooter font-bold text-[20px] no-underline text-brand1"/>
        <div className='socialMediaIconsFooter flex flex-row justify-between items-center'> 
          <div className='socialMedia m-1 transition-colors duration-300 ease-in-out hover:scale-120 hover:text-gray-500'><InstagramIcon /></div>
          <div className='socialMedia m-1 transition-colors duration-300 ease-in-out hover:scale-120 hover:text-gray-500'><FacebookIcon /></div>
          <div className='socialMedia m-1 transition-colors duration-300 ease-in-out hover:scale-120 hover:text-gray-500'><XIcon /></div>
        </div>

      </div>

      <div className='footerDivider border border-custom-gray'></div>
      <p className='derechos text-base text-brand1 m-0 p-4'>© Todos los derechos reservados 2024</p>
    </div>


 
  );
};

export default Footer;