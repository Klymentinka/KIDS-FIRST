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
import "./Dashboard.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

export default function DashboardCalendar() {
  const [showDialog, setShowDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);
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

  const openShow = () => setShowDialog(true);
  const openAdd = () => setAddDialog(true);
  const closeShow = () => setShowDialog(false);
  const closeAdd = () => setAddDialog(false);
  const closeEdit = () => setEditDialog(false);
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
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);

    setAddDialog(false);
    setNewEvent({ title: "", start: "", end: "" });
  }

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };
  return (
    <div className="DashboardCalendar">
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "500px", margin: "50px", width: "100%" }}
        selectable={true}
        onSelectSlot={(event) => {
          console.log("event on selected slot", event);
          openAdd();
        }}
        onSelectEvent={(event) => {
          openShow();
          setSelectedEvent({
            ...selectedEvent,
            title: event.title,
            start: formatDate(event.start),
            end: formatDate(event.end),
          });
        }}
      />
      {addDialog && (
        <Dialog
          open={addDialog}
          onClose={closeAdd}
          PaperProps={{
            style: {
              backgroundColor: "gray",
              color: "black",
              fontFamily: "cursive",
              height: "500px",
              width: "600px",
            },
          }}
        >
          <DialogTitle style={{ color: "darkblue" }}>
            <div>Add event</div>
            <hr />
          </DialogTitle>
          <DialogContent>
            <div>title:</div>
            <input
              type="text"
              ref={inputRef}
              placeholder="event title"
              style={{ width: "20%", marginRight: "10px" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <div>start date:</div>
            <DatePicker
              placeholderText="Start Date"
              style={{ marginRight: "10px" }}
              selected={newEvent.start}
              onChange={(start) => {
                setNewEvent({ ...newEvent, start });
              }}
            />
            <div>end date:</div>
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end) => {
                setNewEvent({ ...newEvent, end });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddEvent}>Add</Button>
            <Button onClick={closeAdd}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      {showDialog && (
        <Dialog
          open={showDialog}
          onClose={closeShow}
          PaperProps={{
            style: {
              backgroundColor: "gray",
              color: "black",
              fontFamily: "cursive",
              height: "500px",
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
            <Button onClick={closeShow}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      <Dialog
        open={editDialog}
        onClose={closeEdit}
        PaperProps={{
          style: {
            backgroundColor: "gray",
            color: "black",
            fontFamily: "cursive",
            height: "500px",
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
            ref={inputRef}
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
