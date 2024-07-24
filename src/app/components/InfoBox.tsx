import React from 'react';

interface InfoBoxProps {
  model: string;
  year: number;
  mileage: string;
  nickname: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ model, year, mileage, nickname }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Information</h2>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Mileage:</strong> {mileage}</p>
      <p><strong>Nickname:</strong> {nickname}</p>
    </div>
  );
}

export default InfoBox;
