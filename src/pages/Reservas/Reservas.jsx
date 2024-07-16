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

const apiKey = 'AIzaSyAS_mvoAXfH72mldCdVCnkC2GKeiXJOyoU';
const calendarId = 'dpl.official.dj@gmail.com';

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
        const googleEvents = data.items.map(item => ({
          title: item.summary,
          start: new Date(item.start.dateTime || item.start.date),
          end: new Date(item.end.dateTime || item.end.date),
          allDay: !item.start.dateTime,
          color: 'red',
          isGoogleEvent: true,
        }));

        // Añadir slots específicos
        const customSlots = generateCustomSlots();

        // Filtrar los slots que se superponen con los eventos de Google
        const availableSlots = customSlots.filter(slot => {
          return !googleEvents.some(event => 
            (slot.start < event.end && slot.end > event.start)
          );
        });

        setEvents([...googleEvents, ...availableSlots]);
      });
  };

  const generateCustomSlots = () => {
    const slots = [];
    const now = new Date();
    const startDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Añadir 24 horas a la fecha actual
    startDate.setHours(0, 0, 0, 0); // Ajustar a las 00:00 horas

    for (let day = 0; day < 5; day++) { // De lunes a viernes
      // Generar slots de 9 AM a 2 PM
      let hour = 9;
      while (hour < 14) {
        const startSlot = new Date(startDate);
        startSlot.setDate(startDate.getDate() + day);
        startSlot.setHours(hour, hour % 1 * 60, 0, 0);

        const endSlot = new Date(startSlot);
        endSlot.setHours(startSlot.getHours() + 1, startSlot.getMinutes());

        if (startSlot > now) { // Solo añadir slots después de las próximas 24 horas
          slots.push({
            title: 'Disponible',
            start: startSlot,
            end: endSlot,
            allDay: false,
            color: 'green',
            isGoogleEvent: false,
          });
        }

        // Añadir 5 minutos de intervalo
        hour += 1.0833; // 1 hora y 5 minutos (1 + 5/60)
      }

      // Generar slots de 4 PM a 9 PM
      hour = 16;
      while (hour < 21) {
        const startSlot = new Date(startDate);
        startSlot.setDate(startDate.getDate() + day);
        startSlot.setHours(hour, hour % 1 * 60, 0, 0);

        const endSlot = new Date(startSlot);
        endSlot.setHours(startSlot.getHours() + 1, startSlot.getMinutes());

        if (startSlot > now) { // Solo añadir slots después de las próximas 24 horas
          slots.push({
            title: 'Disponible',
            start: startSlot,
            end: endSlot,
            allDay: false,
            color: 'green',
            isGoogleEvent: false,
          });
        }

        // Añadir 5 minutos de intervalo
        hour += 1.0833; // 1 hora y 5 minutos (1 + 5/60)
      }
    }

    return slots;
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = 'Reserva de Sesión'; // Título fijo para el evento de reserva
    // Redirigir a la página de pago y pasar los datos del evento
    navigate(`/pago?start=${start.toISOString()}&end=${end.toISOString()}&title=${encodeURIComponent(title)}`);
  };

  const handleSelectEvent = (event) => {
    if (!event.isGoogleEvent) {
      // Redirigir a la página de pago y pasar los datos del evento
      navigate(`/pago?start=${event.start.toISOString()}&end=${event.end.toISOString()}&title=${encodeURIComponent(event.title)}`);
    }
  };

  const eventPropGetter = (event) => {
    const backgroundColor = event.color;
    return { style: { backgroundColor } };
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
        eventPropGetter={eventPropGetter} // Establecer el color de fondo de los eventos
      />
    </div>
  );
};

export default Reservas;