'use client';

import React from 'react';

interface InfoBoxProps {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  nickname: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ brand, model, year, mileage, nickname }) => {
  return (
    <div className="bg-gray-800 text-white pt-8 p-10 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Car Information</h2>
      <div className='mt-6 font-medium text-lg'>
        <p><strong>브랜드:</strong> {brand}</p>
      </div>
      <div className='flex gap-10 mt-1 font-medium text-xl'>
        <p><strong>모델명:</strong> {model}</p>
        <p><strong>연식:</strong> {year}</p>
        <p><strong>주행거리:</strong> {mileage} K/m</p>
        <p><strong>별명:</strong> {nickname}</p>
      </div>

    </div>
  );
}

export default InfoBox;
