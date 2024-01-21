import React, { useState, useRef, useEffect } from 'react';
import './YearItemTooltipNoteItem.css';
import { NoteType } from '../../../../App';

function YearItemTooltipNoteItem(props : any) {
  
  return (
    <div className="yearItemTooltipNoteItem">
      <div className={"yearItemTooltipNotesTypeIconDiv " + (props.noteType === NoteType.Misc ? "yearItemTooltipNotesTypeMiscDiv" : 
                                                  (props.noteType === NoteType.Reminder ? "yearItemTooltipNotesTypeReminderDiv" : "yearItemTooltipNotesTypeBirthdayDiv"))}>
        <img 
          className={"yearItemTooltipNotesTypeIcon"}
          src={"NoteIcons/notes_" + (props.noteType === NoteType.Misc ? "misc" : 
            (props.noteType === NoteType.Reminder ? "reminder" : "birthday")) + "_icon.png"}></img>
      </div>
      {props.noteText}
    </div>
  );
}

export default YearItemTooltipNoteItem;
