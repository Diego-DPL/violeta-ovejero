import React from "react";
//import "./Home.css";
import { Container } from "@mui/material";
import { motion, useScroll, useMotionValueEvent, useMotionValue} from "framer-motion";

function Home() {

  const {scrollYProgress} = useScroll();

  let scrollTop = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollTop.set(((1 - value ) * 1.95)- 0.9);
  });


  return (
    <>
      <Container
        component="main"
        sx={{ flexGrow: 1, mt: 4, position: "fixed", marginLeft: 25 }}
      >

        <motion.div
          className='home flex justify-between'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ opacity: scrollTop, 
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="columUno flex-1 text-center p-2">
            <h1 className="tituloHome text-customPurple text-custom58 font-serif font-bold tracking-tightCustom text-left align-top w-[90%] mt-[40%] ml-[10%] leading-custom70">
              Tu bienestar emocional es nuestra prioridad
            </h1>
            <h2 className="descripcionHome leading-custom32 text-custom22 text-customGray text-left align-top w-full mt-[5%] ml-[10%]">
              Ofrecemos servicios de psicología personalizados. Nuestro equipo
              te ayuda a superar desafíos emocionales y mejorar tu bienestar
              mental.
            </h2>
            <div className="contratarContainer border-2 border-bg1 bg-bg1 rounded-full w-[300px] h-[50px] flex items-center justify-center mt-[10%] ml-[10%]">
              <p className="contratar m-1 font-bold text-white transition-colors duration-300 ease-in-out">Contrata tu sesion</p>
            </div>
          </div>
          <div className="columDos flex-1 text-center p-2">
            <img
              className="imgVioletaHome w-[65%] h-[65%]"
              src={process.env.PUBLIC_URL + "assets/violeta01.png"}
              alt="Foto"
            />
            <img
              className="logoTransparente absolute w-[22%] mt-[18%] ml-[-15%] opacity-0 transition-[margin-left,opacity] duration-[2000ms,1500ms] ease"
              src={process.env.PUBLIC_URL + "assets/logo-transparente.png"}
              alt="Logo"
            />
            <div className="circulo relative transform translate-x-[30%] translate-y-[-115%] w-[450px] h-[450px] bg-bg1 rounded-full z-[-1]"></div>
          </div>
        </motion.div>
      </Container>

      <motion.div className="scrolServicios mt-[100vh] h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-white text-custom58 font-serif font-bold tracking-wideCustom text-left align-top w-[90%] leading-custom70">Especialista en:</h1>
          <h2 className="subtituloScroll1 text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">Trastornos de la Personalidad. </h2>
          <h2 className="subtituloScroll1 text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">Psicologia perinatal. </h2>
          <h2 className="subtituloScroll1  text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">Trastornos de la Conducta alimentaria.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPersonalidad flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-white text-custom58 font-serif font-bold tracking-wideCustom text-left align-top w-[90%] leading-custom70" >Transtornos de la personalidad:</h1>
          <h2 className="subtituloScroll1 text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">
          Los trastornos de la personalidad son 
          formas de pensar y actuar que son muy diferentes de lo habitual.
          Estas diferencias pueden hacer que a las personas les resulte difícil 
          llevarse bien con los demás y manejar situaciones cotidianas.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPerinatal flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-white text-custom58 font-serif font-bold tracking-wideCustom text-left align-top w-[90%] leading-custom70">Psicologia Perinatal:</h1>
          <h2 className="subtituloScroll1 text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">La psicología perinatal se enfoca en el bienestar emocional 
          de las madres y sus bebés durante el embarazo y después del parto.
          Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos 
          para asegurar una experiencia positiva y saludable para ambos.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolTCA flex flex-col h-[100vh] bg-bg1 z-10">
        <motion.div
          className="serviciosTitulos ml-[20%] mt-[20vh]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="tituloScroll1 text-white text-custom58 font-serif font-bold tracking-wideCustom text-left align-top w-[90%] leading-custom70">Transtornos de la Conducta Alimenticia:</h1>
          <h2 className="subtituloScroll1 text-white text-custom38 font-serif tracking-wideCustom text-left align-top w-[90%] leading-custom40">Los trastornos de la conducta alimentaria son problemas graves relacionados con la comida. 
          Las personas con estos trastornos pueden comer muy poco o en exceso,
          Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos
          afectando su salud física y emocional.</h2>

        
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
