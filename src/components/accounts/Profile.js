import React, { useEffect, useState } from 'react';
import { getBookings } from '../../api/bookings';
import { logout } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Profile</h2>
      {/* TODO: 사용자 정보 표시 */}
      <button onClick={() => navigate('/change-password')}>Change Password</button>
      <button onClick={handleLogout}>Logout</button>
      <h3>Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Court</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.court}</td>
              <td>{booking.start_time}</td>
              <td>{booking.end_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;