import React from "react";
import { Container } from "@mui/material";
import { motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  let scrollTop = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollTop.set(((1 - value) * 1.95) - 0.9);
  });

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
              <p className="contratar m-1 font-bold text-brand2 transition-colors duration-300 ease-in-out">Agenda tu sesión</p>
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
      <motion.div className="scrolServicios mt-[100vh] h-[100vh] bg-bg1 z-10">
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
            {/* Cuadrado 1 */}
            <div className="especialidad-box bg-brand2 relative flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-70"
                src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'}
                alt="Trastornos de la Personalidad"
              />
              <h2 className="text-brand2 text-xl font-bold absolute">Trastornos de la Personalidad</h2>
              <div className="overlay opacity-0 hover:opacity-100 absolute inset-0 bg-bg1 bg-opacity-80 flex flex-col items-center justify-center text-brand2 transition-opacity duration-300">
                <p className="description px-4 mb-4 text-center">
                  Los trastornos de la personalidad son formas de pensar y actuar que causan dificultades en la vida y las relaciones con los demás.
                </p>
                <button className="btn-saber-mas bg-brand2 text-bg1 py-2 px-4 rounded">Saber más</button>
              </div>
            </div>
            {/* Cuadrado 2 */}
            <div className="especialidad-box bg-brand2 relative flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-70"
                src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'}
                alt="Psicología Perinatal"
              />
              <h2 className="text-brand2 text-xl font-bold absolute">Psicología Perinatal</h2>
              <div className="overlay opacity-0 hover:opacity-100 absolute inset-0 bg-bg1 bg-opacity-80 flex flex-col items-center justify-center text-brand2 transition-opacity duration-300">
                <p className="description px-4 mb-4 text-center">
                  La psicología perinatal es el estudio del bienestar emocional de la madre y el bebé durante el embarazo y después del nacimiento.
                </p>
                <button className="btn-saber-mas bg-brand2 text-bg1 py-2 px-4 rounded">Saber más</button>
              </div>
            </div>
            {/* Cuadrado 3 */}
            <div className="especialidad-box bg-brand2 relative flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-70"
                src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'}
                alt="Trastornos de la Conducta Alimentaria"
              />
              
              <h2 className="text-brand2 text-xl font-bold absolute">Trastornos de la Conducta Alimentaria</h2>
              <div className="overlay opacity-0 hover:opacity-100 absolute inset-0 bg-bg1 bg-opacity-80 flex flex-col items-center justify-center text-brand2 transition-opacity duration-300">
                <p className="description px-4 mb-4 text-center">
                  Problemas graves relacionados con la forma en que una persona come y se siente con su cuerpo.
                </p>
                <button className="btn-saber-mas bg-brand2 text-bg1 py-2 px-4 rounded">Saber más</button>
              </div>
            </div>
            {/* Cuadrado 4 */}
            <div className="especialidad-box bg-brand2 relative flex items-center justify-center text-center rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-70"
                src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'}
                alt="Violencia de Género"
              />
              <h2 className="text-brand2 text-xl font-bold absolute">Violencia de Género</h2>
              <div className="overlay opacity-0 hover:opacity-100 absolute inset-0 bg-bg1 bg-opacity-80 flex flex-col items-center justify-center text-brand2 transition-opacity duration-300">
                <p className="description px-4 mb-4 text-center">
                  Apoyo psicológico para víctimas de violencia de género, ayudando a superar traumas y recuperar el bienestar emocional.
                </p>
                <button className="btn-saber-mas bg-brand2 text-bg1 py-2 px-4 rounded">Saber más</button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
