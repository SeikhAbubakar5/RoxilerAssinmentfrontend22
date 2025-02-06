import React from 'react';
import "./Dropdown.css"

const Dropdown = ({ selectedMonth, onChange }) => {
    const months = [ "January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className=' dropDown'>
            <select value={selectedMonth} onChange={(e) => onChange(e.target.value)}>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
