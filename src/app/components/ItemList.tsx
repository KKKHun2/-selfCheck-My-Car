'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Item from './Item';
import Popup from './Popup';
import AddItemPopup from './AddItemPopup';

const ItemList: React.FC = () => {
  // 상태 정의
  const [items, setItems] = useState<{ name: string, count: number, records: { part: string, date: string, price: string }[] }[]>([]);
  const [selectedItem, setSelectedItem] = useState<{ name: string, records: { part: string, date: string, price: string }[] } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);

  // 컴포넌트 마운트 시 로컬 스토리지에서 아이템 로드
  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // 아이템 클릭 시 팝업 열기
  const handleItemClick = (item: { name: string, records: { part: string, date: string, price: string }[] }) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  // 팝업 닫기
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  // 새 아이템 추가
  const handleAddNewItem = (newItem: { name: string }) => {
    const updatedItems = [...items, { name: newItem.name, count: 0, records: [] }];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setShowAddItemPopup(false);
  };

  // 점검 기록 추가
  const handleAddRecord = (record: { part: string, date: string, price: string }) => {
    if (selectedItem) {
      const updatedItems = items.map(item =>
        item.name === selectedItem.name
          ? { ...item, records: [...item.records, record], count: item.count + 1 }
          : item
      );
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      handleClosePopup();
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <Item
            key={index}
            name={`${item.name} - ${item.count} 횟수`}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAddItemPopup(true)}
        className="mt-10 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition flex items-center justify-center"
        style={{ width: '60px', height: '60px' }}
      >
        <PlusIcon className="h-6 w-6" />
      </button>
      {showPopup && selectedItem && (
        <Popup
          item={selectedItem}
          onClose={handleClosePopup}
          onSave={handleAddRecord}
        />
      )}
      {showAddItemPopup && (
        <AddItemPopup
          onClose={() => setShowAddItemPopup(false)}
          onSave={handleAddNewItem}
        />
      )}
    </div>
  );
};

export default ItemList;
