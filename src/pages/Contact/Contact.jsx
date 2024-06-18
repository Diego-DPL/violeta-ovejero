import React from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function Contact({servicios}) {
    return (
        <div className="contactContainer">
            <form className="contactForm">
                <div className='gridContact'>
                    <h2 className='contactTitle'>Contacta conmigo</h2>
                    <TextField required className="nombreContact" id="nombre" label="Nombre" defaultValue=""/>
                    <TextField required className="emailContact" id="email" label="Email" defaultValue=""/>
                    
                    {/* <InputLabel id="servicios">Servicios</InputLabel> */}
                    <Select className="serviciosContact" labelId="servicios" id="servicios" value='default' label="Servicios" >
                        <MenuItem value="default" disabled>Selecciona un servicio</MenuItem>
                        {servicios.map((servicio) => (
                            <MenuItem className='setvicioItem' key={servicio.Servicio} value={servicio.Servicio}>{servicio.Servicio}</MenuItem>
                        ))}

                    </Select>

                    <TextField className="texAreaContacto" id="texAreaContacto" label="Cuentanos" multiline rows={5} defaultValue="Escribe aqui"/>
                    <Button className="enviarBotonContacto" variant="contained">Enviar</Button>

                </div>

            </form>
        </div>
    )
}

export default Contact;
