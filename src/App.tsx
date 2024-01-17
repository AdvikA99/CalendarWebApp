import React from 'react';
import './App.css';
import CalendarView from './components/CalendarView/CalendarView';
import DetailsView from './components/DetailsView/DetailsView';

function App() {
  return (
    <div className="App">
      <CalendarView></CalendarView>
      <DetailsView></DetailsView>
    </div>
  );
}

export default App;
