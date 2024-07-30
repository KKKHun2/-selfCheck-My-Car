'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import InfoBox from '../components/InfoBox';
import ItemList from '../components/ItemList';

const Dashboard: React.FC = () => {
  const [info, setInfo] = useState<{ brand: string; model: string; year: number; mileage: number; nickname: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedInfo = localStorage.getItem('carInfo');
    if (storedInfo) {
      const parsedInfo = JSON.parse(storedInfo);
      setInfo({
        brand: parsedInfo.brand,
        model: parsedInfo.model,
        year: parseInt(parsedInfo.year, 10),
        mileage: parsedInfo.mileage,
        nickname: parsedInfo.nickname
      });
    }
  }, []);

  if (!info) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        기록된 정보가 없습니다. 정보 페이지에서 정보 입력 부탁드려요!
        <button
          onClick={() => router.push('/firstStep')}
          className="mt-4 p-3 rounded bg-gray-200 text-black hover:bg-gray-400 transition"
        >
          입력 페이지로 이동
        </button>
      </div>
    );
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
