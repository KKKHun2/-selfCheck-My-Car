import React from 'react';
import InfoBox from './components/InfoBox';
import ItemList from './components/ItemList';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <InfoBox
          model="Tesla Model S"
          year={2022}
          mileage="5000 km"
          nickname="Electro Beast"
        />
      </div>
      <ItemList />
    </div>
  );
}

export default Home;
