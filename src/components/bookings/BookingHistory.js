import React, { useEffect, useState } from 'react';
import { getBookings } from '../../api/bookings';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getBookings();
      setBookings(data);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    }
  };

  return (
    <div>
      <h2>Booking History</h2>
      {bookings.map((booking) => (
        <div key={booking.id}>
          <p>Court ID: {booking.court_id}</p>
          <p>Start Time: {booking.start_time}</p>
          <p>End Time: {booking.end_time}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;