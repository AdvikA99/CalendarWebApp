import React, { useEffect, useState } from 'react';
import './NoteTypeTooltip.css';
import { NoteType } from '../NotesView';

function NoteTypeTooltip(props: any) {

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div id="noteTypeTooltipParent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
      {isTooltipVisible && (
        <div id="noteTypeTooltip">
          <p>{props.selectedNoteType}</p>
          <div id="noteTypeTooltipSelectionRow">
            <div className={"notesTypeTooltipIconDiv notesTypeTooltipMiscDiv" + (props.selectedNoteType === NoteType.Misc ? " selectedNoteType" : "")}>
              <img className="notesTypeTooltipIcon notesTypeTooltipMisc" onClick={() => props.onSelectionChange(NoteType.Misc)}></img>
            </div>
            <div className={"notesTypeTooltipIconDiv notesTypeTooltipReminderDiv" + (props.selectedNoteType === NoteType.Reminder ? " selectedNoteType" : "")}>
              <img className="notesTypeTooltipIcon notesTypeTooltipReminder" onClick={() => props.onSelectionChange(NoteType.Reminder)}></img>
            </div>
            <div className={"notesTypeTooltipIconDiv notesTypeTooltipBirthdayDiv" + (props.selectedNoteType === NoteType.Birthday ? " selectedNoteType" : "")}>
              <img className="notesTypeTooltipIcon notesTypeTooltipBirthday" onClick={() => props.onSelectionChange(NoteType.Birthday)}></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteTypeTooltip;
