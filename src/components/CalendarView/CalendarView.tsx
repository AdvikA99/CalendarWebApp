import React, { useState } from 'react';
import './CalendarView.css';
import TimeScaleSelector from './TimeScaleSelector';
import YearView from './YearView';
import MonthView from './MonthView';
import WeekView from './WeekView';

export enum TimeScale {
  Year,
  Month,
  Week
}

function CalendarView() {
  const [timeScale, setTimeScale] = useState(TimeScale.Year);

  const handleTimeScaleChange = (newTimeScale : TimeScale) => {
    setTimeScale(newTimeScale);
  };

  return (
    <div className="mainContainer">
      <TimeScaleSelector onTimeScaleChange={handleTimeScaleChange}></TimeScaleSelector>
      {timeScale === TimeScale.Year && <YearView/>}
      {timeScale === TimeScale.Month && <MonthView/>}
      {timeScale === TimeScale.Week && <WeekView/>}
    </div>
  );
}

export default CalendarView;
