import React, { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import DateDetails from './components/DateDetails/DateDetails';
import { v4 as uuid } from 'uuid';

export enum NoteType {
  Add,
  Misc,
  Birthday,
  Reminder
}

export interface Note {
  date: string,
  id: string,
  type: NoteType,
  text: string
}

export function getFormattedDate(date : Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 as Months are zero-based
  const formattedDate = day + month + date.getFullYear();

  return formattedDate;
}

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes") || '[]'));
  }, []);

  const saveNewNote = (noteDate : string, newNoteType : NoteType, noteText : string) => {
    const updatedNotes = [...notes, {date: noteDate, id: uuid(), type: newNoteType, text: noteText }];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }
  
  const deleteNote = (noteId : string) => {
    const updatedNotes = notes.filter((note: Note) => note.id !== noteId);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }

  return (
    <div id="app">
      <Calendar notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote}></Calendar>
      <DateDetails notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote}></DateDetails>
    </div>
  );
}

export default App;
