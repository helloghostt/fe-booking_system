
import React from 'react';

const BookingHistory = ({ bookings }) => {
  return (
    <div>
      <h2>예약 내역</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.court} - {booking.date} {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;