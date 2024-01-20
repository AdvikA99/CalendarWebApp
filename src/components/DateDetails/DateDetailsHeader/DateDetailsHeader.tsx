import React, { useEffect, useState } from 'react';
import './DateDetailsHeader.css';
import Modal from '@mui/material/Modal';
import FavoriteFactsModal from './FavoriteFactsModal/FavoriteFactsModal';

function DateDetailsHeader(props: any) {
  
  const [openFavoriteFactsModal, setOpenFavoriteFactsModal] = useState(false);
  const handleOpen = () => setOpenFavoriteFactsModal(true);
  const handleClose = () => setOpenFavoriteFactsModal(false);


  return (
    <div id="dateDetailsHeader">
      <img id="favoriteFactsModalButton" src="favorite_filled_icon.png" onClick={handleOpen}></img>
      <Modal
        open={openFavoriteFactsModal}
        onClose={handleClose}>
          <div><FavoriteFactsModal favoriteFacts={props.favoriteFacts} setFavoriteFacts={props.setFavoriteFacts}/></div>
      </Modal>
    </div>
  );
}

export default DateDetailsHeader;
