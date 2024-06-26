import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBooking } from '../../api/bookings';

const BookingForm = () => {
  const [courtId, setCourtId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBooking(courtId, startTime, endTime);
      navigate('/bookings');
    } catch (error) {
      console.error('Failed to create booking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Court ID"
        value={courtId}
        onChange={(e) => setCourtId(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Start Time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="End Time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button type="submit">Create Booking</button>
    </form>
  );
};

export default BookingForm;