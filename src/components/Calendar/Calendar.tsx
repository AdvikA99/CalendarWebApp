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

function Calendar() {
  const [timeScale, setTimeScale] = useState(TimeScale.Year);

  const handleTimeScaleChange = (newTimeScale : TimeScale) => {
    setTimeScale(newTimeScale);
  };

  return (
    <div id="calendarSection">
      <div id="calendarPadding">
        <TimeScaleSelector onTimeScaleChange={handleTimeScaleChange}></TimeScaleSelector>
        {timeScale === TimeScale.Year && <YearView/>}
        {timeScale === TimeScale.Month && <MonthView/>}
        {timeScale === TimeScale.Week && <WeekView/>}
      </div>
    </div>
  );
}

export default Calendar;
