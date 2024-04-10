
import React from 'react';
import BookingForm from '../components/bookings/BookingForm';
import BookingHistory from '../components/bookings/BookingHistory';

const Booking = () => {
  return (
    <div>
      <h1>예약하기</h1>
      <BookingForm />
      <BookingHistory />
    </div>
  );
};

export default Booking;