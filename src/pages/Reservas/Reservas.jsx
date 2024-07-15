import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { es } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom'; // Asegúrate de que estás usando React Router

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const apiKey = '';
const calendarId = '';

const Reservas = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('week'); // Estado para la vista actual
  const navigate = useNavigate(); // Hook de React Router para redireccionar

  useEffect(() => {
    listUpcomingEvents();
  }, []);

  const listUpcomingEvents = () => {
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const items = data.items.map(item => ({
          title: item.summary,
          start: new Date(item.start.dateTime || item.start.date),
          end: new Date(item.end.dateTime || item.end.date),
          allDay: !item.start.dateTime,
        }));

        // Añadir slot específico para el jueves 16 de julio a las 12 PM
        const specificSlot = {
          title: 'Disponible',
          start: new Date('2024-07-16T12:00:00'),
          end: new Date('2024-07-16T13:00:00'),
          allDay: false,
        };

        setEvents([...items, specificSlot]);
      });
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = 'Reserva de Sesión'; // Título fijo para el evento de reserva
    // Redirigir a la página de pago y pasar los datos del evento
    navigate(`/pago?start=${start.toISOString()}&end=${end.toISOString()}&title=${encodeURIComponent(title)}`);
  };

  const handleSelectEvent = (event) => {
    // Redirigir a la página de pago y pasar los datos del evento
    navigate(`/pago?start=${event.start.toISOString()}&end=${event.end.toISOString()}&title=${encodeURIComponent(event.title)}`);
  };

  return (
    <div className="flex flex-col mt-[5%] mb-[5%] mr-[7%] ml-[7%]">
      <h1 className="text-2xl font-bold mb-4">Reservas</h1>
      <Calendar
        localizer={localizer}
        events={events}
        view={view}
        views={['week']}
        startAccessor="start"
        endAccessor="end"
        min={new Date(0, 0, 0, 9, 0, 0)}
        max={new Date(0, 0, 0, 21, 0, 0)}
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent} // Manejador para cuando se selecciona un evento
        onView={(newView) => setView(newView)} // Manejador para cambiar la vista
      />
    </div>
  );
};

export default Reservas;
