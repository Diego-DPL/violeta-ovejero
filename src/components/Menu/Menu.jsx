import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu({opciones}) {
    return (

   <div className="menu">
        {opciones.map((opcion, index) => (
            <Link to={opcion.To} key={index} className="opcion">
                {opcion.Name}
            </Link>
        ))}
    </div>

    )
}

export default Menu
