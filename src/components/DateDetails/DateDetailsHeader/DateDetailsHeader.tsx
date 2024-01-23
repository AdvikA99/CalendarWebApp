import React, { useEffect, useState } from 'react';
import './DateDetailsHeader.css';
import Modal from '@mui/material/Modal';
import FavoriteFactsModal from './FavoriteFactsModal/FavoriteFactsModal';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { amber } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

function DateDetailsHeader(props: any) {
  const theme = useTheme();
  
  const [openFavoriteFactsModal, setOpenFavoriteFactsModal] = useState(false);
  const handleOpen = () => setOpenFavoriteFactsModal(true);
  const handleClose = () => setOpenFavoriteFactsModal(false);

  return (
    <Box id="dateDetailsHeader" sx={{backgroundColor: theme.palette.primary.dark}}>
      <StarRateRoundedIcon 
        id="favoriteFactsModalButton" 
        sx={{fontSize: 32, color: amber[500], "&:hover": {color: "white"}}} 
        onClick={handleOpen}/>
      <button onClick={props.toggleDarkMode}>Dark Mode</button>
      <Modal
        open={openFavoriteFactsModal}
        onClose={handleClose}>
          <div><FavoriteFactsModal favoriteFacts={props.favoriteFacts} setFavoriteFacts={props.setFavoriteFacts}/></div>
      </Modal>
    </Box>
  );
}

export default DateDetailsHeader;
