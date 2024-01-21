import React, { useState } from 'react';
import './DateModal.css';
import { Note, getFormattedDate } from '../../../App';
import DateModalNoteItem from './DateModalNoteItem/DateModalNoteItem';
import DateModalAddNoteItem from './DateModalAddNoteItem/DateModalAddNoteItem';

function DateModal(props: any) {
  
  const date = props.date;
  const month = date.toLocaleString('default', { month: 'long' });
  const dateSuffix = (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? "st" :
                        (date.getDate() === 2 || date.getDate() === 22 ? "nd" : 
                          (date.getDate() === 3 || date.getDate() === 23 ? "rd" : "th")));

  const dateCode = getFormattedDate(date);

  return (
    <div id="dateModal">
      <p id="dateModalHeader">{month} {date.getDate() + dateSuffix}</p>
      <p id="dateModalSubheader">Reminders and Notes</p>
      {
        (props.notes as Note[]).filter((note) => (note.date === dateCode)).map((note, index) => (
          <DateModalNoteItem
            key={note.id}
            noteDate={dateCode} 
            noteId={note.id} 
            noteType={note.type} 
            noteText={note.text}
            deleteNote={props.deleteNote}/>
        ))
      }
      <DateModalAddNoteItem noteDate={dateCode} handleEnterPress={props.saveNewNote}/>
    </div>
  );
}

export default DateModal;
