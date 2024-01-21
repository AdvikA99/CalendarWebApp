import React, { useEffect, useState } from 'react';
import './DateDetails.css';
import FactDisplay from './FactDisplay/FactDisplay';
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';
import NotesView from './NotesView/NotesView';
import DateDetailsHeader from './DateDetailsHeader/DateDetailsHeader';

export interface FavoriteFact {
  factListKey: string,
  factInd: number,
}

function DateDetails(props : any) {
  const [favoriteFacts, setFavoriteFacts] = useState<FavoriteFact[]>([]);

  useEffect(() => {
    setFavoriteFacts(JSON.parse(localStorage.getItem("favoriteFacts") || '[]'));
  }, []);

  return (
    <div id="detailsSection">
      <DateDetailsHeader favoriteFacts={favoriteFacts} setFavoriteFacts={setFavoriteFacts}></DateDetailsHeader>
      <DateTimeDisplay></DateTimeDisplay>
      <FactDisplay favoriteFacts={favoriteFacts} setFavoriteFacts={setFavoriteFacts}></FactDisplay>
      <NotesView notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}></NotesView>
    </div>
  );
}

export default DateDetails;
