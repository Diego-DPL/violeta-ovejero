import React from 'react';
import './Menu.css';

function Menu({opciones}) {
    return (

   <div className="menu">
        {opciones.map((item, index) => (
            <div key={index} className="opcion">
                {item}
            </div>
        ))}
    </div>

    )
}

export default Menu
