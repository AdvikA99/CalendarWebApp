import React, { useRef, useEffect, useState } from 'react';
import './NoteItem.css';
import { NoteType } from '../NotesView';

function NoteItem(props : any) {

  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;  

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef.current, value]);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <div className="noteItem">
      <span>+ </span>
      {props.noteType === NoteType.Add && (
        <textarea 
          id="addNoteTextArea" 
          rows={1}
          onChange={handleChange}
          placeholder="Add a new Note"
          ref={textAreaRef}></textarea>
      )}
      {props.noteType !== NoteType.Add && (
        <button></button>
      )}
    </div>
  );
}

export default NoteItem;
