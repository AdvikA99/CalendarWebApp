import React from 'react';
import './YearView.css';

function YearView() {
  const daysButtons = []
  for (let i = 0; i < 366; i++) {
    daysButtons.push(<button></button>)
  }

  return (
    <div>
      {daysButtons}
    </div>
  );
}

export default YearView;
