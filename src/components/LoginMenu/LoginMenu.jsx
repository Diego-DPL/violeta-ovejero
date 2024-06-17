import React from 'react';
import './LoginMenu.css';
import { Link } from 'react-router-dom';

function LoginMenu() {
    return (
        <div className='loginContainer'>
            
            <Link to="/login" className='loginLink'>
            Login
            </Link>

            <Link to="/singUp" className='singUpLink'>
                <div className='singUpContainer'>
                    <p className='singUpText'>Sing Up</p>
                </div>
            </Link>

        </div>
    )
}


export default LoginMenu
