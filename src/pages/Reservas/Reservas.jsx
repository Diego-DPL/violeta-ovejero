import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { es } from 'date-fns/locale';
import { gapi } from 'gapi-script';

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

const clientId = '';
const apiKey = '';
const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const scope = 'https://www.googleapis.com/auth/calendar.events.readonly';

const Reservas = () => {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs,
        scope,
      }).then(() => {
        const auth = gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.isSignedIn.get());
        auth.isSignedIn.listen(setIsSignedIn);

        if (auth.isSignedIn.get()) {
          listUpcomingEvents();
        }
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const listUpcomingEvents = () => {
    gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    }).then(response => {
      const items = response.result.items.map(item => ({
        title: item.summary,
        start: new Date(item.start.dateTime || item.start.date),
        end: new Date(item.end.dateTime || item.end.date),
        allDay: !item.start.dateTime,
      }));
      setEvents(items);
    });
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
      // Aquí puedes agregar lógica para guardar el evento en tu base de datos o Google Calendar
    }
  };

  return (
    <div className="flex flex-col mt-[5%] mb-[5%] mr-[7%] ml-[7%]">
      <h1 className="text-2xl font-bold mb-4">Reservas</h1>
      <div>
        {isSignedIn ? (
          <button onClick={signOut} className="btn btn-danger">Sign Out</button>
        ) : (
          <button onClick={signIn} className="btn btn-primary">Sign In with Google</button>
        )}
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default Reservas;