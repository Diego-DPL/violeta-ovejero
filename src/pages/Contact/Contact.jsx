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
            <h2 className='contactTitle'>Contacta conmigo</h2>
            <form className="contactForm">
                <TextField required className="nombreContact" id="nombre" label="Nombre" defaultValue=""/>
                <TextField required className="emailContact" id="email" label="Email" defaultValue=""/>
                
                <div>
                    <InputLabel id="servicios">Servicios</InputLabel>
                    <Select className="servicios" labelId="servicios" id="servicios" value="Servicios" label="Servicios">
                        {servicios.map((servicio) => (
                            <MenuItem className='setvicioItem' key={servicio.Servicio} value={servicio.Servicio}>{servicio.Servicio}</MenuItem>
                        ))}
                    </Select>
                </div>

            <TextField className="texAreaContacto" id="texAreaContacto" label="Cuentanos" multiline rows={5} defaultValue="Escribe aqui"/>
            <Button variant="contained">Contained</Button>
            </form>
        </div>
    )
}

export default Contact;
