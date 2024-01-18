import React, { useRef, useEffect, useState } from 'react';
import './NoteItem.css';
import { NoteType } from '../NotesView';
import NoteTypeTooltip from '../NoteTypeTooltip/NoteTypeTooltip';

function NoteItem(props : any) {

  const [addNoteValue, setAddNoteValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const initNoteType = props.noteType === NoteType.Add ? NoteType.Misc : props.noteType;
  const [addNoteType, setAddNoteType] = useState(initNoteType);

  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;  

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef.current, addNoteValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setAddNoteValue(val);
  };

  const handleKeyDown = (event : any) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key in a textarea

      if (event.target) {
        props.handleEnterPress(addNoteType, event.target.value);
        event.target.value = "";
        setAddNoteValue("");
        setAddNoteType(initNoteType);
      }
    }
  };
  
  const handleAddNoteTypeChange = (newNoteType : NoteType) => {
    setAddNoteType(newNoteType);
  }

  return (
    <div>
      {props.noteType === NoteType.Add && (
        <div className="noteItem">
          <NoteTypeTooltip selectedNoteType={addNoteType} onSelectionChange={handleAddNoteTypeChange}>
            <div className={"notesTypeIconDiv " + (addNoteType === NoteType.Misc ? "notesTypeMiscDiv" : 
                                                    (addNoteType === NoteType.Reminder ? "notesTypeReminderDiv" : "notesTypeBirthdayDiv"))}>
              <img className={"notesTypeIcon " + (addNoteType === NoteType.Misc ? "notesTypeMisc" : 
                                                    (addNoteType === NoteType.Reminder ? "notesTypeReminder" : "notesTypeBirthday"))}></img>
            </div>
          </NoteTypeTooltip>
          <textarea 
            id="addNoteTextArea" 
            rows={1}
            onChange={handleChange}
            placeholder="Add a new Note"
            onKeyDown={handleKeyDown}
            ref={textAreaRef}></textarea>
        </div>
      )}
      {props.noteType !== NoteType.Add && (
        <div className="noteItem">
          <div className={"notesTypeIconDiv " + (addNoteType === NoteType.Misc ? "notesTypeMiscDiv" : 
                                                  (addNoteType === NoteType.Reminder ? "notesTypeReminderDiv" : "notesTypeBirthdayDiv"))}>
            <img className={"notesTypeIcon " + (addNoteType === NoteType.Misc ? "notesTypeMisc" : 
                                                  (addNoteType === NoteType.Reminder ? "notesTypeReminder" : "notesTypeBirthday"))}></img>
          </div>
          <p className="noteText">{props.noteText}</p>
          <button className="deleteNoteButton" onClick={() => props.handleDelete(props.noteKey, props.noteId)}>X</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
