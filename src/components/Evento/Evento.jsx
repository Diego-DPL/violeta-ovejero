import React from 'react';

function Evento({ titulo, imagen, descripcion, fecha }) {
  return (
    <div className="evento grid grid-cols-4 bg-bg2 rounded-xl ml-[15%] mr-[15%] p-4">
      <h2 className='col-span-4 text-3xl text-customPurple font-serif font-bold tracking-tightCustom text-center'>
        {titulo}
      </h2>
      <img className='w-[50%] h-auto' src={process.env.PUBLIC_URL + '/' + imagen} alt={titulo} />
      <p className='col-span-2 text-custom30 text-customGray text-center mt-[2%]'>
        {descripcion}
      </p>
      <h2 className=' text-4xl text-customPurple font-serif font-bold tracking-tightCustom flex items-center justify-center'>
        {fecha}
      </h2>
    </div>
  );
}

export default Evento;