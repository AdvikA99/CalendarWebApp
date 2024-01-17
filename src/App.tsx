import React from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import DateDetails from './components/DateDetails/DateDetails';

function App() {
  return (
    <div className="App">
      <Calendar></Calendar>
      <DateDetails></DateDetails>
    </div>
  );
}

export default App;
