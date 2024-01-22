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
  const [curMonth, setCurMonth] = useState(new Date().getMonth());
  const [curYear, setCurYear] = useState(new Date().getFullYear());

  const handleTimeScaleChange = (newTimeScale : TimeScale) => {
    setTimeScale(newTimeScale);
  };

  const handlePreviousMonth = () => {
    let newMonth = curMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      setCurYear(curYear - 1);
    }
    setCurMonth(newMonth);
  }

  const handleNextMonth = () => {
    let newMonth = curMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      setCurYear(curYear + 1);
    }
    setCurMonth(newMonth);
  }

  return (
    <div id="calendarSection">
      <TimeScaleSelector curTimeScale={timeScale} onTimeScaleChange={handleTimeScaleChange}></TimeScaleSelector>
        {timeScale === TimeScale.Year && 
          <YearView notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>}
        {timeScale === TimeScale.Month && 
          <MonthView 
            curYear={curYear}
            curMonth={curMonth} 
            handlePreviousMonth={handlePreviousMonth} 
            handleNextMonth={handleNextMonth}/>}
        {timeScale === TimeScale.Week && 
          <WeekView/>}
    </div>
  );
}

export default Calendar;
