import React, { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import DateDetails from './components/DateDetails/DateDetails';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

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
  const [isDarkMode, setDarkMode] = useState(true);

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

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        light: "#1f1f1f",
        main: "#0f0f0f",
        dark: "#000000",
        contrastText: "#f0f0f0"
      },
      secondary: {
        light: "#aaaaff",
        main: "#102f80",
        dark: "#1a1a60"
      }
    }
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#eccca2",
        contrastText: "#4f4f4f"
      },
      secondary: {
        light: "#f0f0f0",
        main: "#d0d0d0",
        dark: "#b0b0b0"
      }
    }
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div id="app">
        <Calendar notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote}></Calendar>
        <DateDetails notes={notes} saveNewNote={saveNewNote} deleteNote={deleteNote} toggleDarkMode={toggleDarkMode}></DateDetails>
      </div>
    </ThemeProvider>
  );
}

export default App;
