import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];

export default function App() {
  const [showDialog, setShowDialog] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  function convertDate(date) {
    let convertedDate = date.toString().slice(0, 34); //"Mon Oct 07 2019 00:00:00 GMT-0400"

    let convDate = new Date(convertedDate);
    console.log("the converted date", convDate);
    return convDate;
  }
  return (
    <div className="App">
      <h1>Calendar</h1>

      <h2>Add New Event</h2>
      <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />

        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selectable={true}
        onSelectEvent={(event) => {
          setSelectedEvent({
            ...selectedEvent,
            title: event.title,
            start: convertDate(event.start),
            end: convertDate(event.end),
          });
          console.log(
            "9bal set",
            event.title,
            convertDate(event.start),
            convertDate(event.end)
          );
          open();

          console.log("the selected event", selectedEvent);
        }}
      />
      <Dialog open={showDialog} onClose={close}>
        <DialogTitle>{selectedEvent.title}</DialogTitle>
        <DialogContent>{selectedEvent.start}</DialogContent>
        <DialogActions>
          <Button onClick={close}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
