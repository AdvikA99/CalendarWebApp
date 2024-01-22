import React from 'react';
import './MonthItem.css';

function MonthItem(props : any) {

  return (
    <div className={"monthItem " + (props.isPartOfMonth ? "partOfMonth" : "notPartOfMonth")}>
      <p className="monthItemDay">{props.date}</p>
    </div>
  );
}

export default MonthItem;
