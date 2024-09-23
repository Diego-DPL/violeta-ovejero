import React from 'react';

function EspecialidadCard({ imagen, titulo, descripcion, enlace }) {
  return (
    <div className="especialidad-box bg-bg1 relative flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-full object-cover opacity-60"
        src={process.env.PUBLIC_URL + '/' + imagen}
        alt={titulo}
      />
      <h2 className="text-brand2 text-xl font-bold absolute hover:opacity-0 transition-opacity duration-300">
        {titulo}
      </h2>
      <div className="overlay opacity-0 hover:opacity-100 absolute inset-0 bg-bg1 bg-opacity-80 flex flex-col items-center justify-center text-brand2 transition-opacity duration-300">
        <p className="description px-4 mb-4 text-center">
          {descripcion}
        </p>
        <a href={enlace} className="btn-saber-mas bg-brand2 text-bg1 py-2 px-4 rounded">
          Saber más
        </a>
      </div>
    </div>
  );
}

export default EspecialidadCard;
