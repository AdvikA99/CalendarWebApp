import React from 'react';
import './YearView.css';
import YearItem from './YearItem/YearItem';

function YearView() {
  const daysButtons = []
  for (let i = 0; i < 366; i++) {
    daysButtons.push(<YearItem key={i + 1} dayInYear={i + 1}></YearItem>)
  }

  return (
    <div id="yearItemContainer">
      {daysButtons}
    </div>
  );
}

export default YearView;
