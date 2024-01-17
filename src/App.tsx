import React from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import DateDetails from './components/DateDetails/DateDetails';

function App() {
  return (
    <div id="app">
      <Calendar></Calendar>
      <DateDetails></DateDetails>
    </div>
  );
}

export default App;
