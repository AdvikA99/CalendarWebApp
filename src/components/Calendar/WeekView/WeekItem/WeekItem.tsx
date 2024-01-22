import React, { useState } from 'react';
import './WeekItem.css';
import { Note, NoteType, getFormattedDate } from '../../../../App';
import Modal from '@mui/material/Modal';
import DateItemTooltip from '../../DateItemTooltip/DateItemTooltip';
import DateModal from '../../DateModal/DateModal';

function WeekItem(props : any) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const today = new Date();
  const itemDate = props.date;
  const isToday = today.getFullYear() === itemDate.getFullYear() && today.getMonth() === itemDate.getMonth() && today.getDate() === itemDate.getDate();

  const dateCode = getFormattedDate(itemDate);
  const characterLimit = 100;

  const itemsNotes = (props.notes as Note[]).filter((note) => note.date === dateCode);

  return (
    <div className="weekItemParent">
      <DateItemTooltip itemDate={itemDate} notes={props.notes} isDateModalOpen={openDateModal}>
        <div 
          onClick={() => {
            handleOpen();
          }}
          className={"weekItem " + (isToday ? "curDate" : "")}>
          <p className="weekItemDay">{props.date.getDate()}</p>
          {
            itemsNotes.slice(0, 3).map((note) => (
              <div className="weekItemNoteItem">
                <div className={"weekItemNotesTypeIconDiv " + (note.type === NoteType.Misc ? "weekItemNotesTypeMiscDiv" : 
                                                            (note.type === NoteType.Reminder ? "weekItemNotesTypeReminderDiv" : "weekItemNotesTypeBirthdayDiv"))}>
                  <img 
                    className={"weekItemNotesTypeIcon"}
                    src={"NoteIcons/notes_" + (note.type === NoteType.Misc ? "misc" : 
                      (note.type === NoteType.Reminder ? "reminder" : "birthday")) + "_icon.png"}></img>
                </div>
                <p className="weekItemNotesText">{note.text.length > characterLimit ? `${note.text.slice(0, characterLimit)}...` : note.text}</p>
              </div>
            ))
          }
          {
            itemsNotes.length > 3 && (
              <p className="weekItemAdditionalNotesMessage">+{itemsNotes.length - 3} more...</p>
            )
          }
        </div>
      </DateItemTooltip>
      <Modal
        open={openDateModal}
        onClose={handleClose}>
          <div><DateModal date={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/></div>
      </Modal>
      
    </div>
  );
}

export default WeekItem;
