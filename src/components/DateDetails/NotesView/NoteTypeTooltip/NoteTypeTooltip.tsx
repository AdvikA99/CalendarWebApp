import React, { useEffect, useState } from 'react';
import './NoteTypeTooltip.css';

function NoteTypeTooltip(props: any) {

  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div id="noteTypeTooltipParent" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
      {isTooltipVisible && (
        <div id="noteTypeTooltip">
          TESTING TESTING 1 2 1 2
        </div>
      )}
    </div>
  );
}

export default NoteTypeTooltip;
