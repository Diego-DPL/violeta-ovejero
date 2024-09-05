import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ opciones }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-sans">
      {opciones.map((opcion, index) => (
        <Link
          to={opcion.To}
          key={index}
          className="whitespace-nowrap text-[#FCFFE3] cursor-pointer transition-colors duration-300 ease no-underline hover:text-[#878686] hover:scale-110"
        >
          {opcion.Name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
