import React, { useState } from 'react';
import TransactionTable from './components/Table/Table';
import Statistics from './components/Statistics/Statistics';
import BarChart from './components/Barcharts/Barcharts';
import Dropdown from './components/Dropdown/Dropdown';
import "./App.css"
const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");

  return (
    <div className="App">
      <h1>Transaction Dashboard</h1>
      <Dropdown selectedMonth={selectedMonth} onChange={setSelectedMonth} />
      <TransactionTable selectedMonth={selectedMonth} />
      <div className='merge'>
        <Statistics selectedMonth={selectedMonth} />
        <BarChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default App;