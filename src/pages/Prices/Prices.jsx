import React from 'react';
import './Prices.css';

function Prices({servicios}) {



    return (
        <div className='pricesContainer'>
            <p className='pricesTitle'>Tarifas de Nuestros Servicios</p> 
            <p className='pricesDescription'>Conoce nuestras tarifas y elige el servicio que mejor se adapte a tus necesidades. Ofrecemos opciones accesibles y flexibles para brindarte el apoyo psicológico que mereces.</p>
            <div className="servicios-list">
      {servicios.map((servicio, index) => (
        <div  key={index} className="servicio-card">
             <p className='serviceTitle'>{servicio.Servicio}</p> 
             <div className='priceDetailContainer'>
                <p className='price'>{servicio.Precio}</p> 
                <p className='currency'>{servicio.Moneda}</p> 
             </div>   

            <div className='caracteristicasContainer'>
                {servicio.Características.map((caracteristica, idx) => (
                 <p className='caracteristica'>✅ {caracteristica}</p>  
              ))}
             </div>         


             <button className={index%2 === 0 ?  "contratar-servicio bottonImpar" : "contratar-servicio bottonPar"}> 
             Contratalo Ya!
            </button>
             
        </div>
      ))}
    </div>
        </div>
    )
}

export default Prices;
