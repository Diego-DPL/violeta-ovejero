import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { es } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

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
  const [view, setView] = useState('week');
  const navigate = useNavigate();

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
          color: '#FCFFE3',
          isGoogleEvent: true,
        }));

        const customSlots = generateCustomSlots();

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
    const startDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    startDate.setHours(0, 0, 0, 0);

    for (let day = 0; day < 5; day++) {
      // Generar slots de 9 AM a 2 PM
      let hour = 9;
      while (hour < 13) {
        const startSlot = new Date(startDate);
        startSlot.setDate(startDate.getDate() + day);
        startSlot.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);

        const endSlot = new Date(startSlot);
        endSlot.setHours(startSlot.getHours() + 1, startSlot.getMinutes());

        if (startSlot > now) {
          slots.push({
            title: 'Disponible',
            start: startSlot,
            end: endSlot,
            allDay: false,
            color: '#106579',
            isGoogleEvent: false,
          });
        }

        hour += 1 + 5 / 60; // 1 hora y 5 minutos
      }

      // Generar slots de 4 PM a 9 PM
      hour = 16;
      var firstSlot = true;

      while (hour < 20) {
        const startSlot = new Date(startDate);
        startSlot.setDate(startDate.getDate() + day);
        startSlot.setHours(Math.floor(hour), (hour % 1) * 60, 0, 0);

        const endSlot = new Date(startSlot);
        endSlot.setHours(startSlot.getHours() + 1, startSlot.getMinutes());

        if (startSlot > now) {
          slots.push({
            title: 'Disponible',
            start: startSlot,
            end: endSlot,
            allDay: false,
            color: '#106579',
            isGoogleEvent: false,
          });
        }

        if (firstSlot) {
          hour += 1 + 5.1 / 60; // 1 hora y 5 minutos
          firstSlot = false;
        } else {
          hour += 1 + 5 / 60; // 1 hora y 5 minutos
        }
        
      }
    }

    return slots;
  };

  const handleSelectSlot = ({ start, end }) => {
    // No hacer nada cuando se selecciona un espacio fuera de los slots disponibles
  };

  const handleSelectEvent = (event) => {
    if (!event.isGoogleEvent) {
      navigate(`/pago?start=${event.start.toISOString()}&end=${event.end.toISOString()}&title=${encodeURIComponent(event.title)}`);
    }
  };

  const eventPropGetter = (event) => {
    const backgroundColor = event.color;
    const style = { backgroundColor };
    if (event.isGoogleEvent) {
      style.color = 'black'; // Título del evento en negro
    }
    return { style };
  };

  return (
    <div className="flex flex-col mt-[3%] mb-[5%] mr-[7%] ml-[7%]">
      <h1 className="text-4xl font-bold text-bg1 mb-4">Reserva tu cita</h1>
      <Calendar
        localizer={localizer}
        events={events}
        view={view}
        views={['week']}
        startAccessor="start"
        endAccessor="end"
        min={new Date(0, 0, 0, 9, 0, 0)}
        max={new Date(0, 0, 0, 21, 0, 0)}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        onView={(newView) => setView(newView)}
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default Reservas;