import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useRef, useEffect } from "react";
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
  const [showDialog, setShowDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [updatedEvent, setUpdatedEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = "";
    inputRef.current.focus();
  }, []);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const editEvent = (e) => {
    e.preventDefault();
    setShowDialog(false);
    setEditDialog(true);
  };
  const removeEvent = (value) => {
    setEditDialog(false);
    setShowDialog(false);
    setAllEvents(
      allEvents.filter(function (event) {
        return event.title !== value;
      })
    );
  };
  const updateEvent = (value) => {
    const eventToUpdate = allEvents.findIndex(function (event) {
      return event.title === selectedEvent.title;
    });

    const copyEvents = [...allEvents];
    eventToUpdate !== -1
      ? (copyEvents[eventToUpdate] = value)
      : (copyEvents[3] = value);
    setAllEvents(copyEvents);
    setEditDialog(false);
  };

  const deleteEvent = () => setShowDialog(false);
  function handleAddEvent(event) {
    setAllEvents([...allEvents, event]);

    setEditDialog(false);
  }

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input
          ref={inputRef}
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
        <button
          stlye={{ marginTop: "10px" }}
          onClick={() => handleAddEvent(newEvent)}
        >
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
          open();
          setSelectedEvent({
            ...selectedEvent,
            title: event.title,
            start: formatDate(event.start),
            end: formatDate(event.end),
          });
        }}
      />
      {showDialog && (
        <Dialog
          open={showDialog}
          onClose={close}
          PaperProps={{
            style: {
              backgroundColor: "gray",
              color: "black",
              fontFamily: "cursive",
              height: "300px",
              width: "600px",
            },
          }}
        >
          <DialogTitle style={{ color: "darkblue" }}>
            <div>{selectedEvent.title}</div>
            <hr />
          </DialogTitle>
          <DialogContent>
            <div className="startDate">
              <div style={{ fontSize: "20px", color: "blue" }}>
                start date :
              </div>
              <div> {selectedEvent.start}</div>
            </div>
            <div className="endDate">
              <div style={{ fontSize: "20px", color: "blue" }}> end date: </div>
              <div> {selectedEvent.end}</div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e) => editEvent(e)}>Edit</Button>
            <Button onClick={() => removeEvent(selectedEvent.title)}>
              Delete
            </Button>
            <Button onClick={close}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog
        open={editDialog}
        onClose={close}
        PaperProps={{
          style: {
            backgroundColor: "gray",
            color: "black",
            fontFamily: "cursive",
            height: "300px",
            width: "600px",
          },
        }}
      >
        <DialogTitle style={{ color: "darkblue" }}>
          edit your event
          <hr />
        </DialogTitle>
        <DialogContent>
          <input
            type="text"
            placeholder="event title"
            style={{ width: "20%", marginRight: "10px" }}
            value={updatedEvent.title}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={updatedEvent.start}
            onChange={(start) => {
              setUpdatedEvent({ ...updatedEvent, start });
            }}
          />
          <DatePicker
            placeholderText="End Date"
            selected={updatedEvent.end}
            onChange={(end) => {
              setUpdatedEvent({ ...updatedEvent, end });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => updateEvent(updatedEvent)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
