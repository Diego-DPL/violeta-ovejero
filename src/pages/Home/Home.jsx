import React from 'react';
import './Home.css';

function Home() {

  return (
  <div className='home'>
    <div className='columUno'>
      <h1 className='tituloHome'>Tu bienestar emocional es nuestra prioridad</h1>
      <h2 className='descripcionHome'>Ofrecemos servicios de psicología personalizados. Nuestro equipo te ayuda a superar desafíos emocionales y mejorar tu bienestar mental.</h2>
      <div className='contratarContainer'>
        <p className='contratar'>Contrata tu sesion</p>
      </div>
    </div>
    <div className='columDos'>
      <img className='imgVioletaHome' src={process.env.PUBLIC_URL + 'assets/violeta01.png'} alt="Foto" />
      <img className='logoTransparente' src={process.env.PUBLIC_URL + 'assets/logo-transparente.png'} alt="Logo" />
      <div className='circle'></div>
    </div>
  </div>
  );
}

export default Home;