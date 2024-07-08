import React from 'react';
import './Prices.css';

function Prices({servicios}) {



    return (
        <div className='pricesContainer bg-brand2 w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden'>
            <h1 className='pricesTitle font-bold w-full text-4xl text-white mb-8 '>Nuestras Tarifas</h1> 
            <p className='pricesDescription w-3/4 text-xl text-white mb-4'>Conoce nuestras tarifas y elige el servicio que mejor se adapte a tus necesidades. Ofrecemos opciones accesibles y flexibles para brindarte el apoyo psicológico que mereces.</p>
            <div className='servicioslist flex flex-row gap-10 items-center justify-center'>
                {servicios.map((servicio, index) => (
                    <div  key={index} className='servicioCard bg-bg1 border border-bg2 hover:border-2 rounded-lg p-[0px_40px_20px_40px] text-white w-1/4 max-h-custom overflow-hidden'>
                        <p className='serviceTitle text-custom-22 text-left align-top'>{servicio.Servicio}</p> 
                        <div className='priceDetailContainer flex justify-center'>
                            <p className='price text-custom-58 font-sans font-bold text-center align-top mt-0 mb-0'>{servicio.Precio}</p> 
                            <p className='currency mt-[30%] ml-[5%] text-base font-bold mt-0 mb-0'>{servicio.Moneda}</p> 
                        </div>   

                        <div className='caracteristicasContainer'>
                            {servicio.Características.map((caracteristica, idx) => (
                            <p className='caracteristica text-left'>✅ {caracteristica}</p>  
                        ))}
                        </div>         

                        <div className='mt-2'>
                            <button className={servicio.Seleccionado === true ?  "contratar-servicio bottonImpar" : "contratar-servicio bottonPar"}> 
                            Contratalo Ya!
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Prices;
