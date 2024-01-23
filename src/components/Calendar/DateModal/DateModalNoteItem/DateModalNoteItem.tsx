import React, { useState } from 'react';
import './DateModalNoteItem.css';
import { NoteType } from '../../../../App';
import NotesIcon from '@mui/icons-material/Notes';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CakeIcon from '@mui/icons-material/Cake';
import { lightBlue, green, pink } from '@mui/material/colors';

function DateModalNoteItem(props: any) {

  return (
    <div className="dateModalNoteItem">
      {props.noteType === NoteType.Misc && <NotesIcon className="dateModalNotesTypeIcon" sx={{fontSize: 24, color: lightBlue[500]}}/>}
      {props.noteType === NoteType.Reminder && <NotificationsActiveIcon className="dateModalNotesTypeIcon" sx={{fontSize: 24, color: green[500]}}/>}
      {props.noteType === NoteType.Birthday && <CakeIcon className="dateModalNotesTypeIcon" sx={{fontSize: 24, color: pink[500]}}/>}
      <p className="dateModalNotesText">{props.noteText}</p>
      <button className="dateModalNotesDeleteButton" onClick={() => props.deleteNote(props.noteId)}>✖</button>
    </div>
  );
}

export default DateModalNoteItem;
