import React, { useState } from 'react';
import DatePicker from 'react-datepicker';


const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h1>Date Picker</h1>
      <h4>Click on the search box to select a date</h4>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default ReactDatePicker;