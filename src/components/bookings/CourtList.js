import React, { useEffect, useState } from 'react';
import { getCourts } from '../../api/courts';

const CourtList = () => {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    fetchCourts();
  }, []);

  const fetchCourts = async () => {
    try {
      const data = await getCourts();
      setCourts(data);
    } catch (error) {
      console.error('Failed to fetch courts:', error);
    }
  };

  return (
    <div>
      <h2>Courts</h2>
      {courts.map((court) => (
        <div key={court.id}>
          <h3>{court.name}</h3>
          <p>{court.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourtList;