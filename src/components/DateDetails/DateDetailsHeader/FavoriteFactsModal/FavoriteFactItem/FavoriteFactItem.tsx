import React, { useEffect, useState } from 'react';
import './FavoriteFactItem.css';

function FavoriteFactItem(props: any) {
  return (
    <div className="favoriteFactItem">
      <p><span className="favoriteFactItemYear">({props.fact.year})</span> {props.fact.fact}</p>
      
    </div>
  );
}

export default FavoriteFactItem;
