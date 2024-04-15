import React from 'react';
import BookingForm from '../components/bookings/BookingForm';
import BookingHistory from '../components/bookings/BookingHistory';

const Booking = () => {
  return (
    <div>
      <h2>Booking</h2>
      <BookingForm />
      <BookingHistory />
    </div>
  );
};

export default Booking;