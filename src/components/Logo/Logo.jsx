import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      className="text-[#FCFFE3] font-bold text-[20px] flex justify-center items-center no-underline"
      to="/"
    >
      Violeta Ovejero Psicóloga
    </Link>
  );
}

export default Logo;
