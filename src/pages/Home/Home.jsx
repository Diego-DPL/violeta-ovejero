import React from "react";
import { Container } from "@mui/material";
import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
import { LocationOn, Phone, ArrowForward, Email, WhatsApp } from '@mui/icons-material';
import EspecialidadCard from '../../components/EspecialidadCard/EspecialidadCard';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

function Home() {
  const { scrollYProgress } = useScroll();
  let scrollTop = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollTop.set(((1 - value) * 1.95) - 0.9);
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = "644451241"; 
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Container
        component="main"
        sx={{ flexGrow: 1, mt: 4, position: "fixed", marginLeft: { md: 25, xs: 0 } }}
        className="p-4"
      >
        <motion.div
          className="home flex flex-col md:flex-row justify-between"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ opacity: scrollTop }}
          transition={{ duration: 0.5 }}
        >
          {/* Columna Uno */}
          <div className="columUno flex-1 text-center p-2">
            <h1 className="tituloHome text-bg1 text-4xl md:text-custom58 font-serif font-bold tracking-tightCustom text-left mt-8 md:mt-[40%] ml-0 md:ml-[10%] leading-custom40 md:leading-custom70">
              Tu bienestar emocional es mi prioridad
            </h1>
            <h2 className="descripcionHome leading-custom32 text-custom22 text-bg1 text-left mt-4 md:mt-[5%] ml-0 md:ml-[10%]">
              Servicios de psicología personalizados. Te ayudaré a superar desafíos emocionales y mejorar tu salud mental.
            </h2>
            <div className="contratarContainer border-2 border-bg1 bg-bg1 rounded-full w-[250px] md:w-[300px] h-[50px] flex items-center justify-center mt-4 md:mt-[10%] ml-0 md:ml-[10%]">
              <Link to="/contact" className="contratar m-1 font-bold text-brand2 transition-colors duration-300 ease-in-out">
                Agenda tu sesión
              </Link>
            </div>
          </div>

          {/* Columna Dos */}
          <div className="columDos flex-1 text-center p-2 mt-6 md:mt-0">
            <img
              className="imgVioletaHome w-full md:w-[65%] mx-auto h-auto"
              src={process.env.PUBLIC_URL + "assets/violeta01.png"}
              alt="Foto"
            />
            <img
              className="logoTransparente absolute w-[22%] mt-[18%] ml-[-15%] opacity-0 transition-[margin-left,opacity] duration-[2000ms,1500ms] ease"
              src={process.env.PUBLIC_URL + "assets/logo-transparente.png"}
              alt="Logo"
            />
            <div className="circulo relative transform translate-x-[30%] translate-y-[-115%] w-[200px] md:w-[450px] h-[200px] md:h-[450px] bg-bg1 rounded-full z-[-1]"></div>
          </div>
        </motion.div>
      </Container>

      {/* Sección de Especialidades */}
      <motion.div className="scrolServicios mt-[100vh] md:h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos mx-4 md:mx-[10%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-brand2 text-5xl md:text-custom58 font-serif font-bold tracking-wideCustom text-left mb-8 leading-custom52 md:leading-custom70">
            Especialista en:
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Utilizamos el componente EspecialidadCard para cada especialidad */}
            <EspecialidadCard
              imagen="assets/transtornos-de-la-personalidad.jpg"
              titulo="Trastornos de la Personalidad"
              descripcion="Los trastornos de la personalidad son formas de pensar y actuar que causan dificultades en la vida y las relaciones con los demás."
              enlace="/trastornos-de-la-personalidad"
            />
            <EspecialidadCard
              imagen="assets/transtornos-de-la-personalidad.jpg"
              titulo="Psicología Perinatal"
              descripcion="La psicología perinatal es el estudio del bienestar emocional de la madre y el bebé durante el embarazo y después del nacimiento."
              enlace="/psicologia-perinatal"
            />
            <EspecialidadCard
              imagen="assets/transtornos-de-la-personalidad.jpg"
              titulo="Trastornos de la Conducta Alimentaria"
              descripcion="Problemas graves relacionados con la forma en que una persona come y se siente con su cuerpo."
              enlace="/trastornos-de-la-conducta-alimentaria"
            />
            <EspecialidadCard
              imagen="assets/transtornos-de-la-personalidad.jpg"
              titulo="Violencia de Género"
              descripcion="Apoyo psicológico para víctimas de violencia de género, ayudando a superar traumas y recuperar el bienestar emocional."
              enlace="/violencia-de-genero"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Sección de Terapias */}
      <motion.div className="terapias-section h-[100vh] bg-brand2 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-5xl">
          {/* Tarjeta Presencial */}
          <div className="tarjeta-terapia bg-bg1 text-brand2 p-8 rounded-xl shadow-[0_5px_20px_10px_rgba(0,0,0,0.4)] flex flex-col flex-1">
            <h1 className="text-5xl font-bold mb-4 text-left">Presencial</h1>
            <div className="mb-4 flex-grow">
              <div className="flex items-center mb-2">
                <LocationOn className="text-brand2 text-2xl mr-2" />
                <p className="text-xl">Calle del Pensionista n2 1L</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-brand2 text-2xl mr-2" />
                <p className="text-xl">Teléfono: 644451241</p>
              </div>
            </div>
            <hr className="border-t border-brand2 mb-4" />
            <div className="mt-auto">
              <Link
                to="/reservar-cita-presencial"
                className="btn-reservar bg-brand2 text-bg1 py-2 px-6 rounded-full shadow-md flex items-center justify-center hover:bg-brand2-dark transition duration-300"
              >
                Reservar cita <ArrowForward className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Tarjeta Online */}
          <div className="tarjeta-terapia bg-bg1 text-brand2 p-8 rounded-xl shadow-[0_5px_20px_10px_rgba(0,0,0,0.4)] flex flex-col flex-1">
            <h1 className="text-5xl font-bold mb-4 text-left">Online</h1>
            <div className="mb-4 flex-grow">
              <div className="flex items-center mb-2">
                <Email className="text-brand2 text-2xl mr-2" />
                <p className="text-xl">violetavejero@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-brand2 text-2xl mr-2" />
                <p className="text-xl">Teléfono: 644451241</p>
              </div>
            </div>
            <hr className="border-t border-brand2 mb-4" />
            <div className="mt-auto">
              <Link
                to="/reservar-cita-online"
                className="btn-reservar bg-brand2 text-bg1 py-2 px-6 rounded-full shadow-md flex items-center justify-center hover:bg-brand2-dark transition duration-300"
              >
                Reservar cita <ArrowForward className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sección de Contacto */}
      <motion.div className="contacto-section h-auto bg-bg1 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Columna 1: Escríbeme */}
            <Link to="/contact" className="contacto-col flex flex-col items-center text-center">
              <Email className="text-brand2 text-6xl mb-4" />
              <h2 className="text-2xl font-bold text-brand2 mb-2">Escríbeme</h2>
              <p className="text-brand2 mb-1">violetaovejero@gmail.com</p>
              <p className="text-brand2">Contesto en 24 horas</p>
            </Link>
            {/* Columna 2: Llámame */}
            <a href="tel:644451241" className="contacto-col flex flex-col items-center text-center">
              <Phone className="text-brand2 text-6xl mb-4" />
              <h2 className="text-2xl font-bold text-brand2 mb-2">Llámame</h2>
              <p className="text-brand2 mb-1">644451241</p>
              <p className="text-brand2">De lunes a viernes de 09:00 a 20:00</p>
            </a>
            {/* Columna 3: WhatsApp */}
            <div
              className="contacto-col flex flex-col items-center text-center cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <WhatsApp className="text-brand2 text-6xl mb-4" />
              <h2 className="text-2xl font-bold text-brand2 mb-2">WhatsApp</h2>
              <p className="text-brand2 mb-1">644451241</p>
              <p className="text-brand2">De lunes a viernes de 09:00 a 20:00</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
