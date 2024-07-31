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
      <h2 className="text-2xl font-bold">Car Maintenance Records</h2>
      <div className="mt-4 font-medium sm:mt-6 sm:text-base">
        <p><strong className='text-lg'>브랜드:</strong> <span className='text-lg'>{brand}</span></p>
      </div>
      <div className="flex flex-col gap-3 mt-2 font-medium text-lg sm:flex-row sm:gap-10 sm:mt-4 pb-2">
        <div><strong className='text-lg'>모델명:</strong> <span className='text-lg'>{model}</span></div>
        <div><strong className='text-lg'>연식:</strong> <span className='text-lg'>{year} 년</span></div>
        <div><strong className='text-lg'>주행거리:</strong> <span className='text-lg'>{mileage} K/m</span></div>
        <div><strong className='text-lg'>별명:</strong> <span className='text-lg'>{nickname}</span></div>
      </div>
    </div>
  );
}

export default InfoBox;
