import React, { useEffect, useState } from 'react';
import './NoteTypeTooltip.css';
import { NoteType } from '../../../../App';
import { Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

const getNoteTypeName = (noteType : NoteType) => {
  switch (noteType) {
    case NoteType.Birthday:
      return "Birthday";
    case NoteType.Misc:
      return "Note";
    case NoteType.Reminder:
      return "Reminder";
    default:
      return "ERROR UNKNOWN NOTE TYPE";
  }
}

const CustomStyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgb(30, 30, 80)"
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(30, 30, 80)"
  },
}));

function NoteTypeTooltip(props: any) {
  return (
    <CustomStyledTooltip enterDelay={0} arrow placement="top" title={
      <div>
        <p id="noteTypeTooltipName">{getNoteTypeName(props.selectedNoteType)}</p>
        <div id="noteTypeTooltipSelectionRow">
          <div className={"notesTypeTooltipIconDiv notesTypeTooltipMiscDiv" + (props.selectedNoteType === NoteType.Misc ? " selectedNoteType" : "")}>
            <img className="notesTypeTooltipIcon" src="NoteIcons/notes_misc_icon.png" onClick={() => props.onSelectionChange(NoteType.Misc)}></img>
          </div>
          <div className={"notesTypeTooltipIconDiv notesTypeTooltipReminderDiv" + (props.selectedNoteType === NoteType.Reminder ? " selectedNoteType" : "")}>
            <img className="notesTypeTooltipIcon" src="NoteIcons/notes_reminder_icon.png" onClick={() => props.onSelectionChange(NoteType.Reminder)}></img>
          </div>
          <div className={"notesTypeTooltipIconDiv notesTypeTooltipBirthdayDiv" + (props.selectedNoteType === NoteType.Birthday ? " selectedNoteType" : "")}>
            <img className="notesTypeTooltipIcon" src="NoteIcons/notes_birthday_icon.png" onClick={() => props.onSelectionChange(NoteType.Birthday)}></img>
          </div>
        </div>
      </div>
    }>
      {props.children}
    </CustomStyledTooltip>
  );
}

export default NoteTypeTooltip;
