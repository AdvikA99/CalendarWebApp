import React, { useEffect, useState } from 'react';
import './FavoriteFactItem.css';
import Modal from '@mui/material/Modal';
import ConfirmRemoveFavoriteFactModal from '../ConfirmRemoveFavoriteFactModal/ConfirmRemoveFavoriteFactModal';

function FavoriteFactItem(props: any) {
  const [openConfirmRemoveFavoriteFactModal, setOpenConfirmRemoveFavoriteFactModal] = useState(false);
  const handleOpen = () => setOpenConfirmRemoveFavoriteFactModal(true);
  const handleClose = () => setOpenConfirmRemoveFavoriteFactModal(false);

  return (
    <div className="favoriteFactItem">
      <button className="removeFavoriteFactButton" onClick={handleOpen}>X</button>
      <p><span className="favoriteFactItemYear">({props.fact.year})</span> {props.fact.fact}</p>

      <Modal
        open={openConfirmRemoveFavoriteFactModal}
        onClose={handleClose}>
          <div><ConfirmRemoveFavoriteFactModal onConfirmRemove={props.onRemoveFavoriteFact} onCancel={handleClose}/></div>
      </Modal>
    </div>
  );
}

export default FavoriteFactItem;
