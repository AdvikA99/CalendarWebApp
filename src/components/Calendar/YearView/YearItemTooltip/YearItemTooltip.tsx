import React, { useState, useRef, useEffect } from 'react';
import './YearItemTooltip.css';
import { dateFromDay } from '../YearItem/YearItem';

function YearItemTooltip(props : any) {
  const tooltipParentRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [leftPosition, setLeftPosition] = useState('50%');
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const [showOnTop, setShowOnTop] = useState(true);

  useEffect(() => {
    const updatePosition = () => {
      if (tooltipParentRef.current && tooltipRef.current) {
        const rectParent = tooltipParentRef.current.getBoundingClientRect();
        const rect = tooltipRef.current.getBoundingClientRect();
        
        const x1 = rectParent.x + rectParent.width/2 - rect.width/2;
        const x2 = Math.max(16, x1) - rect.width/2 + rectParent.width/2;
        setLeftPosition(`calc(${x2 - x1}px)`);

        setShowOnTop(rectParent.y - rect.height >= 8);
      }
    };

    // Initial update
    updatePosition();

    window.addEventListener('resize', updatePosition);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [isTooltipVisible]);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const date = dateFromDay(props.dayInYear);
  const month = date.toLocaleString('default', { month: 'long' });
  const dateSuffix = (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31 ? "st" :
                        (date.getDate() === 2 || date.getDate() === 22 ? "nd" : 
                          (date.getDate() === 3 || date.getDate() === 23 ? "rd" : "th")));

  return (
    <div id="yearItemTooltipParent" ref={tooltipParentRef}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </div>
      {isTooltipVisible && (   
        <div id="yearItemTooltipArrow" className={showOnTop ? "yearItemTooltipArrowTop" : "yearItemTooltiArrowBottom"}></div>
      )}
      {isTooltipVisible && (
        <div 
          id="yearItemTooltip" 
          ref={tooltipRef} 
          style={{left: leftPosition}}
          className={showOnTop ? "yearItemTooltipTop" : "yearItemTooltipBottom"}>
          <p>{month} {date.getDate() + dateSuffix}</p>
        </div>
      )}
    </div>
  );
}

export default YearItemTooltip;
