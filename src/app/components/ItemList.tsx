'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Item from './Item';
import Popup from './Popup';
import AddItemPopup from './AddItemPopup';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<{ name: string, count: number, records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] }[]>([]);
  const [selectedItem, setSelectedItem] = useState<{ name: string, records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const handleItemClick = (item: { name: string, records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] }) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleAddNewItem = (newItem: { name: string }) => {
    const updatedItems = [...items, { name: newItem.name, count: 0, records: [] }];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setShowAddItemPopup(false);
  };

  const handleAddRecord = (record: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }) => {
    if (selectedItem) {
      // 기존 기록이 있는지 확인합니다. 같은 날짜가 이미 존재하면 추가하지 않습니다.
      const recordExists = selectedItem.records.some(r => r.date === record.date);

      if (!recordExists) {
        const updatedItems = items.map(item =>
          item.name === selectedItem.name
            ? { ...item, records: [...item.records, record], count: item.records.length + 1 }
            : item
        );
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
        handleClosePopup();
      } else {
        alert('이미 같은 날짜의 점검 기록이 있습니다.');
      }
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
