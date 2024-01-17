import React from 'react';
import './YearItem.css';

function dateFromDay(dayInYear : number) : Date {
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, 0);
  return new Date(date.setDate(dayInYear)); // add the number of days
}

function YearItem(props : any) {
  const date = dateFromDay(props.dayInYear);

  return (
    <button className={"yearItem yearItemMonth" + date.getMonth()}>{date.getDate()}</button>
  );
}

export default YearItem;
