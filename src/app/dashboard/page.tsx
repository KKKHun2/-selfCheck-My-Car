'use client';

import React, { useEffect, useState } from 'react';
import InfoBox from '../components/InfoBox';
import ItemList from '../components/ItemList';

const Dashboard: React.FC = () => {
  const [info, setInfo] = useState<{ brand: string; model: string; year: number; mileage: number; nickname: string } | null>(null);

  useEffect(() => {
    // 로컬 스토리지에서 정보 읽기
    const storedInfo = localStorage.getItem('carInfo');
    if (storedInfo) {
      const parsedInfo = JSON.parse(storedInfo);
      setInfo({
        brand: parsedInfo.brand,
        model: parsedInfo.model,
        year: parseInt(parsedInfo.year, 10),  // Ensure year is a number
        mileage: parsedInfo.mileage,  // Default value for mileage
        nickname: parsedInfo.nickname
      });
    }
  }, []);

  if (!info) {
    return <div className="flex items-center justify-center h-screen text-white">정보가 없습니다. 입력 페이지로 이동하세요.</div>;
  }

  return (
    <div className='p-4'>
        <div className="mb-4">
            <InfoBox
              brand={info.brand}
              model={info.model}
              year={info.year}
              mileage={info.mileage}
              nickname={info.nickname}
            />
        </div>
        <ItemList />
    </div>
  );
}

export default Dashboard;