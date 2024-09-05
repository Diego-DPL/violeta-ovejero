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
            <h1 className="tituloHome text-bg1 text-4xl md:text-custom58 font-serif font-bold tracking-tightCustom text-left mt-8 md:mt-[40%] ml-0 md:ml-[10%] leading-custom70">
              Tu bienestar emocional es nuestra prioridad
            </h1>
            <h2 className="descripcionHome leading-custom32 text-custom22 text-bg1 text-left mt-4 md:mt-[5%] ml-0 md:ml-[10%]">
              Ofrecemos servicios de psicología personalizados. Nuestro equipo te ayuda a superar desafíos emocionales y mejorar tu bienestar mental.
            </h2>
            <div className="contratarContainer border-2 border-bg1 bg-bg1 rounded-full w-[250px] md:w-[300px] h-[50px] flex items-center justify-center mt-4 md:mt-[10%] ml-0 md:ml-[10%]">
              <p className="contratar m-1 font-bold text-brand2 transition-colors duration-300 ease-in-out">Contrata tu sesion</p>
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

      {/* Secciones Responsivas */}
      <motion.div className="scrolServicios mt-[100vh] h-auto bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-4 md:ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-brand2 text-custom58 font-serif font-bold tracking-wideCustom text-left mb-6 w-[90%] leading-custom70">
            Especialista en:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left leading-custom40">
                - Trastornos de la Personalidad.
              </h2>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left leading-custom40">
                - Psicología perinatal.
              </h2>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left leading-custom40">
                - Trastornos de la Conducta alimentaria.
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <img className="w-[60%] md:w-[40%] h-auto" src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'} alt="Especialidades" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPersonalidad flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-brand2 text-custom58 font-serif font-bold tracking-wideCustom text-left align-top mb-10 w-[90%] leading-custom70" >Transtornos de la personalidaad:</h1>
          <div className="grid grid-cols-2 flex items-center justify-center">
            <div>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">
              Los trastornos de la personalidad son 
              formas de pensar y actuar que son muy diferentes de lo habitual.
              Estas diferencias pueden hacer que a las personas les resulte difícil 
              llevarse bien con los demás y manejar situaciones cotidianas.</h2>
            </div>
            <div>
              <img className='w-[40%] h-auto flex items-center justify-center' src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'} alt="Especialidades"/>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPerinatal flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-brand2 text-custom58 font-serif font-bold tracking-wideCustom text-left align-top mb-10 w-[90%] leading-custom70">Psicologia Perinatal:</h1>
          <div className="grid grid-cols-2 flex items-center justify-center">
            <div>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">La psicología perinatal se enfoca en el bienestar emocional 
              de las madres y sus bebés durante el embarazo y después del parto.
              Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos 
              para asegurar una experiencia positiva y saludable para ambos.</h2>
            </div>
            <div>
              <img className='w-[40%] h-auto flex items-center justify-center' src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'} alt="Especialidades"/>
            </div>
          </div>          
        </motion.div>
      </motion.div>

      <motion.div className="scrolTCA flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-brand2 text-custom58 font-serif font-bold tracking-wideCustom text-left align-top mb-10 w-[90%] leading-custom70">Transtornos de la Conducta Alimenticia:</h1>
          <div className="grid grid-cols-2 flex items-center justify-center">
            <div>
              <h2 className="subtituloScroll1 text-brand2 text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">Los trastornos de la conducta alimentaria son problemas graves relacionados con la comida. 
              Las personas con estos trastornos pueden comer muy poco o en exceso,
              Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos
              afectando su salud física y emocional.</h2>
            </div>
            <div>
              <img className='w-[40%] h-auto flex items-center justify-center' src={process.env.PUBLIC_URL + 'assets/transtornos-de-la-personalidad.jpg'} alt="Especialidades"/>
            </div>
          </div>          
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
