import React from 'react';
import './YearItem.css';

function dateFromDay(dayInYear : number) : Date {
  const currentYear = new Date().getFullYear();
  const date = new Date(currentYear, 0);
  return new Date(date.setDate(dayInYear)); // add the number of days
}

function YearItem(props : any) {
  const itemDate = dateFromDay(props.dayInYear);
  const curDate = new Date();

  return (
    <button className={"yearItem yearItemMonth" + itemDate.getMonth() + (curDate.getMonth() === itemDate.getMonth() && curDate.getDate() == itemDate.getDate() ? " selected" : "")}>{itemDate.getDate()}</button>
  );
}

export default YearItem;
