import React from 'react';
import { Link } from 'react-router-dom';

function LoginMenu() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center font-sans justify-center">
      <Link
        to="/login"
        className="text-[#FCFFE3] no-underline transition-colors duration-300 ease-in-out hover:text-[#878686] hover:scale-110"
      >
        Login
      </Link>

      <Link
        to="/signUp"
        className="text-[#FCFFE3] no-underline transition-colors duration-300 ease-in-out hover:text-[#878686] hover:scale-110"
      >
        <div className="border-2 border-[#FCFFE3] rounded-full w-[150px] h-[40px] flex items-center justify-center transition-colors duration-300 ease-in-out">
          <p className="m-1">Sign Up</p>
        </div>
      </Link>
    </div>
  );
}

export default LoginMenu;
