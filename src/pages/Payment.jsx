import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const apiKey = '';
const calendarId = '';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const start = new Date(query.get('start'));
  const end = new Date(query.get('end'));
  const title = query.get('title');

  const handlePayment = () => {
    // Aquí se procesa el pago
    // Si el pago es exitoso, se guarda el evento en Google Calendar

    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        summary: title,
        start: {
          dateTime: start.toISOString(),
          timeZone: 'GMT',
        },
        end: {
          dateTime: end.toISOString(),
          timeZone: 'GMT',
        },
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Evento creado:', data);
        // Redirigir a una página de confirmación o de éxito
        navigate('/confirmacion');
      })
      .catch(error => {
        console.error('Error al crear el evento:', error);
        // Manejar el error, mostrar un mensaje al usuario
      });
  };

  return (
    <div>
      <h1>Pago de Sesión</h1>
      <p>Detalles de la sesión:</p>
      <p>Título: {title}</p>
      <p>Inicio: {start.toLocaleString()}</p>
      <p>Fin: {end.toLocaleString()}</p>
      <button onClick={handlePayment}>Pagar y Reservar</button>
    </div>
  );
};

export default Payment;