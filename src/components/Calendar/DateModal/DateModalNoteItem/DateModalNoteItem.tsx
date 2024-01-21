import React, { useState } from 'react';
import './DateModalNoteItem.css';
import { NoteType } from '../../../../App';

function DateModalNoteItem(props: any) {

  return (
    <div className="dateModalNoteItem">
      <div className={"dateModalNotesTypeIconDiv " + (props.noteType === NoteType.Misc ? "dateModalNotesTypeMiscDiv" : 
                                                  (props.noteType === NoteType.Reminder ? "dateModalNotesTypeReminderDiv" : "dateModalNotesTypeBirthdayDiv"))}>
        <img 
          className={"dateModalNotesTypeIcon"}
          src={"NoteIcons/notes_" + (props.noteType === NoteType.Misc ? "misc" : 
            (props.noteType === NoteType.Reminder ? "reminder" : "birthday")) + "_icon.png"}></img>
      </div>
      <p className="dateModalNotesText">{props.noteText}</p>
      <button className="dateModalNotesDeleteButton" onClick={() => props.deleteNote(props.noteId)}>X</button>
    </div>
  );
}

export default DateModalNoteItem;
