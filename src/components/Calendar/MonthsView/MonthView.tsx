import React from 'react';
import './MonthView.css';
import MonthItem from './MonthItem/MonthItem';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

interface MonthItem {
  isPartOfMonth: boolean,
  month: number,
  date: number
}

function MonthView(props : any) {

  const numDaysInMonth = new Date(props.curYear, props.curMonth + 1, 0).getDate();
  const daysInMonth = Array.from({ length: numDaysInMonth }, (_, index) => ({isPartOfMonth: true, month: props.curMonth, date: index + 1}));
  const startDay = new Date(props.curYear, props.curMonth, 1).getDay();

  // Create an array with empty slots for the days before the first day of the month
  const prevMonth = new Date(props.curYear, props.curMonth - 1).getMonth();
  const prevMonthDays = Array.from({ length: startDay }, (_, index) => ({isPartOfMonth: false, month: prevMonth, date: new Date(props.curYear, props.curMonth, 1 - (startDay - index)).getDate()}));
  
  const monthViewDays = [...prevMonthDays, ...daysInMonth];
  // Chunk the days array into weeks (arrays of 7 days)
  const weeks = Array.from({ length: Math.ceil(monthViewDays.length / 7) }, (_, index) =>
    monthViewDays.slice(index * 7, (index + 1) * 7)
  );

  const lastRowDays = weeks[weeks.length - 1].length;
  const nextMonth = new Date(props.curYear, props.curMonth + 1).getMonth();
  for(let i = lastRowDays, j = 1; i < 7; i++, j++) {
    weeks[weeks.length - 1].push({isPartOfMonth: false, month: nextMonth, date: j});
  }
  
  return (
    <div id="monthViewSection">
      <div id="monthSelectorRow">
        <button className="monthSelectorButton" onClick={props.handlePreviousMonth}>ᐊ</button>
        <p id="currentMonthText">{months[props.curMonth] + " " + props.curYear}</p>
        <button className="monthSelectorButton" onClick={props.handleNextMonth}>ᐅ</button>
      </div>

      <div className="monthRow"> 
        <div className="monthRowHeader">Sunday</div>
        <div className="monthRowHeader">Monday</div>
        <div className="monthRowHeader">Tuesday</div>
        <div className="monthRowHeader">Wednesday</div>
        <div className="monthRowHeader">Thursday</div>
        <div className="monthRowHeader">Friday</div>
        <div className="monthRowHeader">Saturday</div>
      </div>

      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="monthRow">
          {week.map((day, dayIndex) => (
            <MonthItem 
              key={dayIndex} 
              isPartOfMonth={day.isPartOfMonth} 
              year={props.curYear} 
              month={day.month} 
              date={day.date}
              notes={props.notes} saveNewNote={props.saveNewNote} deleteNote={props.deleteNote}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MonthView;
