import axios from 'axios';

export const createBooking = async (courtId, startTime, endTime) => {
  try {
    const response = await axios.post('/bookings/create/', { court: courtId, start_time: startTime, end_time: endTime });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBookings = async () => {
  try {
    const response = await axios.get('/bookings/');
    return response.data;
  } catch (error) {
    throw error;
  }
};