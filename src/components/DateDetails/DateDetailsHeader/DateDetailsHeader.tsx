import React, { useEffect, useState } from 'react';
import './DateDetailsHeader.css';
import Modal from '@mui/material/Modal';
import FavoriteFactsModal from './FavoriteFactsModal/FavoriteFactsModal';

function DateDetailsHeader() {
  
  const [openFavoriteFactsModal, setOpenFavoriteFactsModal] = useState(true);
  const handleOpen = () => setOpenFavoriteFactsModal(true);
  const handleClose = () => setOpenFavoriteFactsModal(false);



  return (
    <div id="dateDetailsHeader">
      <img id="favoriteFactsModalButton" src="favorite_filled_icon.png" onClick={handleOpen}></img>
      <Modal
        open={openFavoriteFactsModal}
        onClose={handleClose}>
          <div><FavoriteFactsModal/></div>
      </Modal>
    </div>
  );
}

export default DateDetailsHeader;
