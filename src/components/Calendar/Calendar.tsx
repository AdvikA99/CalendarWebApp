import React, { useState } from 'react';
import './Calendar.css';
import TimeScaleSelector from './TimeScaleSelector/TimeScaleSelector';
import YearView from './YearView/YearView';
import MonthView from './MonthsView/MonthView';
import WeekView from './WeekView/WeekView';

export enum TimeScale {
  Year,
  Month,
  Week
}

function Calendar(props: any) {
  const [timeScale, setTimeScale] = useState(TimeScale.Year);

  const handleTimeScaleChange = (newTimeScale : TimeScale) => {
    setTimeScale(newTimeScale);
  };

  return (
    <div id="calendarSection">
      <TimeScaleSelector curTimeScale={timeScale} onTimeScaleChange={handleTimeScaleChange}></TimeScaleSelector>
        {timeScale === TimeScale.Year && <YearView notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>}
        {timeScale === TimeScale.Month && <MonthView/>}
        {timeScale === TimeScale.Week && <WeekView/>}
    </div>
  );
}

export default Calendar;
