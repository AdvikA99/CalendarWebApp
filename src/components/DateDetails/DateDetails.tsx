import React, { useEffect, useState } from 'react';
import './DateDetails.css';
import FactDisplay from './FactDisplay/FactDisplay';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import NotesView from './NotesView/NotesView';
import DateDetailsHeader from './DateDetailsHeader/DateDetailsHeader';

function DateDetails() {
  
  return (
    <div id="detailsSection">
      <DateDetailsHeader></DateDetailsHeader>
      <DateTimeDisplay></DateTimeDisplay>
      <FactDisplay></FactDisplay>
      <NotesView></NotesView>
    </div>
  );
}

export default DateDetails;
