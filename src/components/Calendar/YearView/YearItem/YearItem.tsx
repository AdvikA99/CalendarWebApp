import React, { useEffect, useState } from 'react';
import './YearItem.css';
import DateItemTooltip from '../../DateItemTooltip/DateItemTooltip';
import Modal from '@mui/material/Modal';
import DateModal from '../../DateModal/DateModal';
import { Note, getFormattedDate } from '../../../../App';

export function dateFromDay(dayInYear : number) : Date {
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, 0);
  return new Date(date.setDate(dayInYear)); // add the number of days
}

function YearItem(props : any) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const itemDate = dateFromDay(props.dayInYear);
  const curDate = new Date();

  useEffect(() => {
    if ((props.notes as Note[]).filter((note) => note.date === getFormattedDate(itemDate)).length > 0) {
      setBackgroundColor(`var(--year-item-color-${itemDate.getMonth() % 3}B`);
    } else {
      setBackgroundColor("transparent");
    }
  }, [props.notes]);

  return (
    <div>
      <DateItemTooltip itemDate={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote} isDateModalOpen={openDateModal}>
        <button 
          className={"yearItem yearItemMonth" + itemDate.getMonth() + (curDate.getMonth() === itemDate.getMonth() && curDate.getDate() == itemDate.getDate() ? " selected" : "")}
          onClick={() => {
            handleOpen();
          }}
          style={{backgroundColor: backgroundColor}}>
            {itemDate.getDate()}
        </button>
      </DateItemTooltip>
      <Modal
        open={openDateModal}
        onClose={handleClose}>
          <div><DateModal date={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/></div>
      </Modal>
    </div>
  );
}

export default YearItem;
