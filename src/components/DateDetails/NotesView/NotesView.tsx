import React, { useEffect, useState } from 'react';
import './NotesView.css';
import NoteItem from './NoteItem/NoteItem';
import { v4 as uuid } from 'uuid';

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

export interface Note {
  id: string,
  type: NoteType,
  text: string
}

function NotesView() {
  const todayNotesKey = getFormattedDate();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(todayNotesKey) || '[]'));
  }, []);

  const saveNewNote = (newNoteType : NoteType, noteText : string) => {
    const updatedNotes = [...notes, {id: uuid(), type: newNoteType, text: noteText }];
    localStorage.setItem(todayNotesKey, JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  }

  const deleteNote = (noteKey : string, noteId : string) => {
    
  }

  return (
    <div id="notesSection">
      <p className="notesHeader">Reminders and Notes</p>
      {
        notes.map((note, index) => (
          <NoteItem 
            noteKey={todayNotesKey} 
            noteId={note.id} 
            noteType={note.type} 
            noteText={note.text}
            handleDelete={deleteNote}></NoteItem>
        ))
      }
      <NoteItem noteType={NoteType.Add} handleEnterPress={saveNewNote}></NoteItem>
      <p className="notesHeader">Upcoming Reminders and Notes</p>
    </div>
  );
}

export default NotesView;
