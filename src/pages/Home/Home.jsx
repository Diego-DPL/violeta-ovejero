import React from "react";
import "./Home.css";
import { Container } from "@mui/material";
import { motion, useScroll, useInView, useMotionValueEvent } from "framer-motion";

function Home() {

  const { scrollY , scrollYProgress} = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latest = 1 - latest;
    console.log("Page scroll: ", latest)
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
          style={{ opacity: scrollYProgress }}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="tituloScroll1">Somos especialistas en:</h1>
        <h2 className="subtituloScroll1">Trastornos de la Personalidad. </h2>
        <h2 className="subtituloScroll1">Psicologia perinatal. </h2>
        <h2 className="subtituloScroll1">
          Trastornos de la Conducta alimentaria.
        </h2>
      </motion.div>
    </>
  );
}

export default Home;
