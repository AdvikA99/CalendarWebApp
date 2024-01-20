import React, { useState } from 'react';
import './YearItemTooltip.css';

function YearItemTooltip(props : any) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div id="yearItemTooltipParent">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </div>
      {isTooltipVisible && (
        <div id="yearItemTooltip">
          <p>Test 1 2 3 4 5</p>
        </div>
      )}
    </div>
  );
}

export default YearItemTooltip;
