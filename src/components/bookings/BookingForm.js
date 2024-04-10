
import React, { useState } from 'react';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 예약 로직 구현
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
      />
      <select
        value={selectedCourt}
        onChange={(e) => setSelectedCourt(e.target.value)}
      >
        {/* 코트 목록 옵션 */}
      </select>
      <button type="submit">예약하기</button>
    </form>
  );
};

export default BookingForm;