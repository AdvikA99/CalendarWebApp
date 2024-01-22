import React, { useState, useRef, useEffect } from 'react';
import './DateItemTooltipNoteItem.css';
import { NoteType } from '../../../../App';

function DateItemTooltipNoteItem(props : any) {
  
  const characterLimit = 50;

  return (
    <div className="dateItemTooltipNoteItem">
      <div className={"dateItemTooltipNotesTypeIconDiv " + (props.noteType === NoteType.Misc ? "dateItemTooltipNotesTypeMiscDiv" : 
                                                  (props.noteType === NoteType.Reminder ? "dateItemTooltipNotesTypeReminderDiv" : "dateItemTooltipNotesTypeBirthdayDiv"))}>
        <img 
          className={"dateItemTooltipNotesTypeIcon"}
          src={"NoteIcons/notes_" + (props.noteType === NoteType.Misc ? "misc" : 
            (props.noteType === NoteType.Reminder ? "reminder" : "birthday")) + "_icon.png"}></img>
      </div>
      <p className="dateItemTooltipNotesText">{props.noteText.length > characterLimit ? `${props.noteText.slice(0, characterLimit)}...` : props.noteText}</p>
    </div>
  );
}

export default DateItemTooltipNoteItem;
