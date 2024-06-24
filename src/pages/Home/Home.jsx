import React from "react";
import "./Home.css";
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
          className="home"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ opacity: scrollTop, 
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="columUno">
            <h1 className="tituloHome">
              Tu bienestar emocional es nuestra prioridad
            </h1>
            <h2 className="descripcionHome">
              Ofrecemos servicios de psicología personalizados. Nuestro equipo
              te ayuda a superar desafíos emocionales y mejorar tu bienestar
              mental.
            </h2>
            <div className="contratarContainer">
              <p className="contratar">Contrata tu sesion</p>
            </div>
          </div>
          <div className="columDos">
            <img
              className="imgVioletaHome"
              src={process.env.PUBLIC_URL + "assets/violeta01.png"}
              alt="Foto"
            />
            <img
              className="logoTransparente"
              src={process.env.PUBLIC_URL + "assets/logo-transparente.png"}
              alt="Logo"
            />
            <div className="circle"></div>
          </div>
        </motion.div>
      </Container>

      <motion.div className="scrolServicios">
        <motion.div
          className="serviciosTitulos"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="tituloScroll1">Especialista en:</h1>
          <h2 className="subtituloScroll1">Trastornos de la Personalidad. </h2>
          <h2 className="subtituloScroll1">Psicologia perinatal. </h2>
          <h2 className="subtituloScroll1">Trastornos de la Conducta alimentaria.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPersonalidad">
        <motion.div
          className="serviciosTitulos"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="tituloScroll1">Transtornos de la personalidad:</h1>
          <h2 className="subtituloScroll1">
          Los trastornos de la personalidad son 
          formas de pensar y actuar que son muy diferentes de lo habitual.
          Estas diferencias pueden hacer que a las personas les resulte difícil 
          llevarse bien con los demás y manejar situaciones cotidianas.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolPerinatal">
        <motion.div
          className="serviciosTitulos"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="tituloScroll1">Psicologia Perinatal:</h1>
          <h2 className="subtituloScroll1">La psicología perinatal se enfoca en el bienestar emocional 
          de las madres y sus bebés durante el embarazo y después del parto.
          Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos 
          para asegurar una experiencia positiva y saludable para ambos.</h2>
        </motion.div>
      </motion.div>

      <motion.div className="scrolTCA">
        <motion.div
          className="serviciosTitulos"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="tituloScroll1">Transtornos de la Conducta Alimenticia:</h1>
          <h2 className="subtituloScroll1">Los trastornos de la conducta alimentaria son problemas graves relacionados con la comida. 
          Las personas con estos trastornos pueden comer muy poco o en exceso,
          Ayuda a las madres a manejar el estrés, la ansiedad y otros sentimientos
          afectando su salud física y emocional.</h2>

        
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
