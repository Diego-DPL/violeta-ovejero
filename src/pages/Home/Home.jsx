import React from "react";
import "./Home.css";
import { useRef } from "react";
import { Container } from "@mui/material";
import { motion, useScroll, useMotionValueEvent, useMotionValue, useInView} from "framer-motion";

function Home() {

  const {scrollYProgress} = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref);

  let scrollTop = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    scrollTop.set(((1 - value ) * 1.75)- 0.5);
    console.log(scrollTop.get());
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

      <motion.div
        className="scrolServicios"
        // style={{
        //   transform: isInView ? "none" : "translateX(-200px)",
        //   opacity: isInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        // }}
      >
        <motion.div
          className="serviciosTitulos"

        >
          <h1 className="tituloScroll1">Especialista en:</h1>
          <h2 className="subtituloScroll1">Trastornos de la Personalidad. </h2>
          <h2 className="subtituloScroll1">Psicologia perinatal. </h2>
          <h2 className="subtituloScroll1">Trastornos de la Conducta alimentaria.</h2>
        </motion.div>


      </motion.div>
    </>
  );
}

export default Home;
