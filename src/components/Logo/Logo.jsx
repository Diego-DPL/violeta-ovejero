import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo({cssClass}) {
    return (
        <Link className={cssClass} to="/"> 
            Violeta Ovejero
        </Link>
    )
}

export default Logo
