import React, { useState } from 'react';
import './MonthItem.css';
import { Note, NoteType, getFormattedDate } from '../../../../App';
import Modal from '@mui/material/Modal';
import DateItemTooltip from '../../DateItemTooltip/DateItemTooltip';
import DateModal from '../../DateModal/DateModal';

function MonthItem(props : any) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const today = new Date();
  const itemDate = new Date(props.year, props.month, props.date);
  const isToday = today.getFullYear() === itemDate.getFullYear() && today.getMonth() === itemDate.getMonth() && today.getDate() === itemDate.getDate();

  const dateCode = getFormattedDate(itemDate);
  const characterLimit = 8;

  const itemsNotes = (props.notes as Note[]).filter((note) => note.date === dateCode);

  return (
    <div className="monthItemParent">
      <DateItemTooltip itemDate={itemDate} notes={props.notes} isDateModalOpen={openDateModal}>
        <div 
          onClick={() => {
            handleOpen();
          }}
          className={"monthItem " + (props.isPartOfMonth ? "partOfMonth " : "notPartOfMonth ") + (isToday ? "curDate" : "")}>
          <p className="monthItemDay">{props.date}</p>
          {
            itemsNotes.slice(0, 3).map((note) => (
              <div className="monthItemNoteItem">
                <div className={"monthItemNotesTypeIconDiv " + (note.type === NoteType.Misc ? "monthItemNotesTypeMiscDiv" : 
                                                            (note.type === NoteType.Reminder ? "monthItemNotesTypeReminderDiv" : "monthItemNotesTypeBirthdayDiv"))}>
                  <img 
                    className={"monthItemNotesTypeIcon"}
                    src={"NoteIcons/notes_" + (note.type === NoteType.Misc ? "misc" : 
                      (note.type === NoteType.Reminder ? "reminder" : "birthday")) + "_icon.png"}></img>
                </div>
                <p className="monthItemNotesText">{note.text.length > characterLimit ? `${note.text.slice(0, characterLimit)}...` : note.text}</p>
              </div>
            ))
          }
          {
            itemsNotes.length > 3 && (
              <p className="monthItemAdditionalNotesMessage">+{itemsNotes.length - 3} more...</p>
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

export default MonthItem;
