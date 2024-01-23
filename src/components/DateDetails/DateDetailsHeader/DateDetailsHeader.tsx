import React, { useEffect, useState } from 'react';
import './DateDetailsHeader.css';
import Modal from '@mui/material/Modal';
import FavoriteFactsModal from './FavoriteFactsModal/FavoriteFactsModal';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { amber } from '@mui/material/colors';

function DateDetailsHeader(props: any) {
  
  const [openFavoriteFactsModal, setOpenFavoriteFactsModal] = useState(false);
  const handleOpen = () => setOpenFavoriteFactsModal(true);
  const handleClose = () => setOpenFavoriteFactsModal(false);


  return (
    <div id="dateDetailsHeader">
      <StarRateRoundedIcon 
        id="favoriteFactsModalButton" 
        sx={{fontSize: 32, color: amber[500], "&:hover": {color: "white"}}} 
        onClick={handleOpen}/>
      <Modal
        open={openFavoriteFactsModal}
        onClose={handleClose}>
          <div><FavoriteFactsModal favoriteFacts={props.favoriteFacts} setFavoriteFacts={props.setFavoriteFacts}/></div>
      </Modal>
    </div>
  );
}

export default DateDetailsHeader;
