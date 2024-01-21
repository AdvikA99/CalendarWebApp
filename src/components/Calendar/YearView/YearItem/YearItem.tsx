import React, { useState } from 'react';
import './YearItem.css';
import YearItemTooltip from '../YearItemTooltip/YearItemTooltip';
import Modal from '@mui/material/Modal';
import DateModal from '../../DateModal/DateModal';

export function dateFromDay(dayInYear : number) : Date {
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, 0);
  return new Date(date.setDate(dayInYear)); // add the number of days
}

function YearItem(props : any) {
  const [openDateModal, setOpenDateModal] = useState(false);
  const handleOpen = () => setOpenDateModal(true);
  const handleClose = () => setOpenDateModal(false);

  const itemDate = dateFromDay(props.dayInYear);
  const curDate = new Date();

  return (
    <YearItemTooltip itemDate={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote} isDateModalOpen={openDateModal}>
      <button 
        className={"yearItem yearItemMonth" + itemDate.getMonth() + (curDate.getMonth() === itemDate.getMonth() && curDate.getDate() == itemDate.getDate() ? " selected" : "")}
        onClick={() => {
          handleOpen();
        }}>
          {itemDate.getDate()}
      </button>
      <Modal
        open={openDateModal}
        onClose={handleClose}>
          <div><DateModal date={itemDate} notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/></div>
      </Modal>
    </YearItemTooltip>
  );
}

export default YearItem;
