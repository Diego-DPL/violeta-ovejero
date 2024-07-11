import React from 'react';
import './Eventos.css';
import Evento from '../../components/Evento/Evento';

function Eventos() {
  const eventos = [
    {
      "Titulo": "Taller de Psicologia Perinatal en GIRO",
      "Imagen": "assets/psicologiaperinatal.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ligula nec nulla congue sollicitudin.",
      "Fecha": "Sab 13 Jun"
    },
    {
      "Titulo": "Taller de Psicologia Perinatal en GIRO2",
      "Imagen": "assets/psicologiaperinatal.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ligula nec nulla congue sollicitudin.",
      "Fecha": "Sab 13 Jun"
    },
    {
      "Titulo": "Taller de Psicologia Perinatal en GIRO3",
      "Imagen": "assets/psicologiaperinatal.jpg",
      "Descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ligula nec nulla congue sollicitudin.",
      "Fecha": "Sab 13 Jun"
    }
  ];

  return (
    <div className="eventos h-full bg-bg1">
      <div className='grid grid-cols-1 gap-4 mb-20'>
        <h1 className='text-4xl text-brand2 font-serif font-bold tracking-tightCustom text-center mt-[2%]'>
          Estos son nuestros proximos eventos
        </h1>
        {eventos.map((evento, index) => (
          <Evento
            key={index}
            titulo={evento.Titulo}
            imagen={evento.Imagen}
            descripcion={evento.Descripcion}
            fecha={evento.Fecha}
          />
        ))}
      </div>
    </div>
  );
}

export default Eventos;