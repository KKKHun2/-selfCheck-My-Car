'use client';

import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import Item from './Item';
import Popup from './Popup';
import AddItemPopup from './AddItemPopup';
import YearlyReportPopup from './YearlyReportPopup';
import { v4 as uuidv4 } from 'uuid';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<{ id: string, name: string, count: number, records: { id: string, part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] }[]>([]);
  const [selectedItem, setSelectedItem] = useState<{ id: string, name: string, records: { id: string, part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);
  const [showYearlyReportPopup, setShowYearlyReportPopup] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const handleItemClick = (item: { id: string, name: string, records: { id: string, part: string, date: string, laborCost: string, partsCost: string, totalCost: string }[] }) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleAddNewItem = (newItem: { name: string }) => {
    const itemExists = items.some(item => item.name === newItem.name);

    if (itemExists) {
      alert('같은 이름의 아이템이 이미 존재합니다.');
    } else {
      const updatedItems = [...items, { id: uuidv4(), name: newItem.name, count: 0, records: [] }];
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      setShowAddItemPopup(false);
    }
  };

  const handleAddRecord = (record: { part: string, date: string, laborCost: string, partsCost: string, totalCost: string }) => {
    if (selectedItem) {
      const updatedRecord = { ...record, id: uuidv4() }; // 각 기록에 uuid 추가
      const updatedItems = items.map(item =>
        item.id === selectedItem.id
          ? { ...item, records: [...item.records, updatedRecord], count: item.records.length + 1 }
          : item
      );
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      handleClosePopup();
    }
  };

  const handleDeleteRecord = (recordId: string) => {
    if (selectedItem) {
      const updatedItems = items.map(item => {
        if (item.id === selectedItem.id) {
          const updatedRecords = item.records.filter(record => record.id !== recordId);
          return { ...item, records: updatedRecords, count: updatedRecords.length }; // count 업데이트
        }
        return item;
      });
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      handleClosePopup();
    }
  };

  const handleDeleteItem = () => {
    if (selectedItem) {
      const updatedItems = items.filter(item => item.id !== selectedItem.id);
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
      handleClosePopup();
    }
  };

  const handleShowYearlyReport = () => {
    setShowYearlyReportPopup(true);
  };

  const handleCloseYearlyReportPopup = () => {
    setShowYearlyReportPopup(false);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <Item
            key={item.id} // id를 key로 사용
            name={item.name}
            count={item.count}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAddItemPopup(true)}
        className="mt-4 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition flex items-center justify-center"
        style={{ width: '60px', height: '60px' }}
      >
        <PlusIcon className="h-6 w-6" />
      </button>
      {showPopup && selectedItem && (
        <Popup
          item={selectedItem}
          onClose={handleClosePopup}
          onSave={handleAddRecord}
          onDeleteRecord={handleDeleteRecord} // 기록 삭제 콜백
          onDeleteItem={handleDeleteItem} // 아이템 삭제 콜백
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
        className="mt-4 p-3 rounded bg-white font-semibold text-gray-800 hover:bg-gray-200 transition"
      >
        {currentYear}년도 점검 내역 보기
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
