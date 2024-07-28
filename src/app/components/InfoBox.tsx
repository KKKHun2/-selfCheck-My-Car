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
    <div className="bg-gray-800 text-white pt-4 p-6 rounded-lg shadow-lg w-full max-w-full sm:p-4">
      <h2 className="text-xl font-bold">Car Maintenance Records</h2>
      <div className="mt-4 font-medium  sm:mt-6 sm:text-base">
        <p className='text-lg'><strong>브랜드:</strong> {brand}</p>
      </div>
      <div className="flex flex-col gap-3 mt-2 font-medium text-lg sm:flex-row sm:gap-10 sm:mt-4 pb-2">
        <p><strong>모델명:</strong> {model}</p>
        <p><strong>연식:</strong> {year} 년</p>
        <p><strong>주행거리:</strong> {mileage} K/m</p>
        <p><strong>별명:</strong> {nickname}</p>
      </div>
    </div>
  );
}

export default InfoBox;
