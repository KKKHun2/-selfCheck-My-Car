'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Item from './Item';
import Popup from './Popup';
import AddItemPopup from './AddItemPopup';
import YearlyReportPopup from './YearlyReportPopup';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<{ name: string, count: number, records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] }[]>([]);
  const [selectedItem, setSelectedItem] = useState<{ name: string, records: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);
  const [showYearlyReportPopup, setShowYearlyReportPopup] = useState(false);

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

  const handleShowYearlyReport = () => {
    setShowYearlyReportPopup(true);
  };

  const handleCloseYearlyReportPopup = () => {
    setShowYearlyReportPopup(false);
  };

  const handleDeleteItem = () => {
    if (selectedItem) {
      const updatedItems = items.filter(item => item.name !== selectedItem.name);
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
            name={item.name}
            count={item.count}
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
          onDelete={handleDeleteItem} // 팝업에 삭제 기능을 전달합니다
        />
      )}
      {showAddItemPopup && (
        <AddItemPopup
          onClose={() => setShowAddItemPopup(false)}
          onSave={handleAddNewItem}
        />
      )}
      <button
        onClick={handleShowYearlyReport}
        className="mt-4 p-3 rounded bg-white text-gray-800 hover:bg-gray-200 transition"
      >
        이번 년도 점검 내역 보기
      </button>
      {showYearlyReportPopup && (
        <YearlyReportPopup
          onClose={handleCloseYearlyReportPopup}
          records={items.flatMap(item => item.records)}
        />
      )}
    </div>
  );
};

export default ItemList;
