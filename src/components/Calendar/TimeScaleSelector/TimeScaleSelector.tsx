import React from 'react';
import './TimeScaleSelector.css';
import { TimeScale } from '../Calendar';

function TimeScaleSelector(props : any) {

  const handleTimeScaleClick = (newTimeScale : TimeScale) => {
    props.onTimeScaleChange(newTimeScale);
  };

  return (
    <div>
      <button onClick={() => handleTimeScaleClick(TimeScale.Year)}>Year</button>
      <button onClick={() => handleTimeScaleClick(TimeScale.Month)}>Month</button>
      <button onClick={() => handleTimeScaleClick(TimeScale.Week)}>Week</button>
    </div>
  );
}

export default TimeScaleSelector;
