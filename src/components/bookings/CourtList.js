
import React from 'react';

const CourtList = ({ courts }) => {
  return (
    <div>
      <h2>코트 목록</h2>
      <ul>
        {courts.map((court) => (
          <li key={court.id}>{court.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourtList;