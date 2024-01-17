import React from 'react';
import './TimeScaleSelector.css';
import { TimeScale } from '../Calendar';

function TimeScaleSelector(props : any) {

  const handleTimeScaleClick = (newTimeScale : TimeScale) => {
    props.onTimeScaleChange(newTimeScale);
  };

  return (
    <div id="timeSelectorRow">
      <div id="timeSelectorButtonsContainer">
        <button className={"timeSelectorButton " + (props.curTimeScale === TimeScale.Year ? "selectedTimeScale" : "")}
                onClick={() => handleTimeScaleClick(TimeScale.Year)}>Year</button>
        <button className={"timeSelectorButton " + (props.curTimeScale === TimeScale.Month ? "selectedTimeScale" : "")}
                onClick={() => handleTimeScaleClick(TimeScale.Month)}>Month</button>
        <button className={"timeSelectorButton " + (props.curTimeScale === TimeScale.Week ? "selectedTimeScale" : "")}
                onClick={() => handleTimeScaleClick(TimeScale.Week)}>Week</button>
      </div>
    </div>
  );
}

export default TimeScaleSelector;
