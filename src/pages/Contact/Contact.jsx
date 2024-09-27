import React, { useState } from "react";
//import "./Contact.css";
import { TextField, Button, MenuItem, IconButton, Grid } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from 'emailjs-com'; // Importa EmailJS

function Contact({ servicios }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Reemplaza los placeholders con tus IDs reales
  const SERVICE_ID = 'service_gckl5eq';
  const TEMPLATE_ID = 'template_ipobqom';
  const USER_ID = 'rtn-XoI3iWp2xd1Oy';

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const templateParams = {
      name: name,
      email: email,
      service: service,
      message: message,
    };
  
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        alert('¡Mensaje enviado con éxito!');
        setName('');
        setEmail('');
        setService('');
        setMessage('');
      }, (error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "644451241"; // Reemplaza con el número de violeta
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const textFieldStyles = {
    "& label": {
        color: "#FCFFE3",
      },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#408494",
        borderRadius: "10px",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#FCFFE3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#408494",
      },
      "& .MuiOutlinedInput-input": {
        color: "#FCFFE3",
      },
    },
  };

  return (
    <div className="contactContainer bg-bg1 h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <h4 className="contact-title text-brand2 text-custom42 font-sans text-center align-top leading-custom52 font-bold tracking-tightCustom">Contacta conmigo</h4>
      <form onSubmit={handleSubmit} className="contactFormulario w-[60%]">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={textFieldStyles}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Puede dejarse vacío o añadir cualquier otro campo o elemento */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={textFieldStyles}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Servicio"
              fullWidth
              margin="normal"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              sx={textFieldStyles}
            >
              {servicios.map((servicio) => (
                <MenuItem key={servicio.Servicio} value={servicio.Servicio}>
                  {servicio.Servicio}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Escribe aquí tu mensaje..."
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={textFieldStyles}
            />
          </Grid>
          <Grid item xs={12} sm={8} style={{ textAlign: "center" }}>
            <div className="contactWhatssap border-2 border-customBorder hover:border-brand2 rounded-lg flex flex-row justify-center items-center gap-[10px]">
              <p className="contactMensajeWhatssap text-brand2">
                Si lo deseas, ponte en contacto conmigo vía whatssap
              </p>
              <IconButton
                aria-label="WhatsApp"
                //style={{ marginTop: "2rem" }}
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon style={{ fontSize: 40, color: "#22c298" }} />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{
                marginTop: "5px",
                color:"#106579",
                backgroundColor: "#FCFFE3",
                borderRadius: "40px",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Enviar mensaje
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Contact;


//service_gckl5eq service ID
//template_ipobqom template ID
//rtn-XoI3iWp2xd1Oy Public Key
//1cYjjKLYeQmda3ccMIU4i private Key
//https://api.emailjs.com/api/v1.0/email/send