import React from 'react';
import './WeekView.css';
import { months } from '../../../App';
import WeekItem from './WeekItem/WeekItem';

const dayHeaders = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WeekView(props : any) {
  const getDateOffset = (offset : number) => {
    if (offset === 0) {
      return props.curWeekStartDate;
    }
    return new Date(props.curWeekStartDate.getFullYear(), props.curWeekStartDate.getMonth(), props.curWeekStartDate.getDate() + offset);
  };

  const getHeader = () => {
    const curWeekEndDate = new Date(props.curWeekStartDate.getFullYear(), props.curWeekStartDate.getMonth(), props.curWeekStartDate.getDate() + 6);
    if (props.curWeekStartDate.getMonth() === curWeekEndDate.getMonth()) {
      return months[props.curWeekStartDate.getMonth()] + " " + props.curWeekStartDate.getFullYear();
    } else {
      return months[props.curWeekStartDate.getMonth()] + " " + props.curWeekStartDate.getFullYear() + " - " + months[curWeekEndDate.getMonth()] + " " + curWeekEndDate.getFullYear();
    }
  }

  return (
    <div id="weekViewSection">
      <div id="weekSelectorRow">
        <button className="weekSelectorButton" onClick={props.handlePreviousWeek}>ᐊ</button>
        <p id="currentMonthText">{getHeader()}</p>
        <button className="weekSelectorButton" onClick={props.handleNextWeek}>ᐅ</button>
      </div>

      {
        dayHeaders.map((day, index) => (
          <div className="weekRow">
            <p className="weekDayHeader">{day}</p>
            <WeekItem
              date={getDateOffset(index)}
              notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}>
            </WeekItem>
          </div>
        ))
      }
    </div>
  );
}

export default WeekView;
