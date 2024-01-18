import React, { useEffect, useState } from 'react';
import './NotesView.css';
import NoteItem from './NoteItem/NoteItem';

export enum NoteType {
  Add,
  Misc,
  Birthday,
  Reminder
}

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // +1 as Months are zero-based
  const formattedDate = day + month + today.getFullYear();

  return formattedDate;
}

function NotesView() {
  const todayNotesKey = getFormattedDate();
  const [notes, setNotes] = useState({});


  useEffect(() => {
    localStorage.setItem(todayNotesKey, JSON.stringify(notes));
  }, [notes]);

  return (
    <div id="notesSection">
      <p className="notesHeader">Todays Notes</p>
      <NoteItem noteType={NoteType.Add}></NoteItem>
      <p className="notesHeader">Upcoming Notes</p>
    </div>
  );
}

export default NotesView;
