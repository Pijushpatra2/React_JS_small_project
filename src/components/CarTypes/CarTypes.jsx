import React, { useState } from 'react';
import SuperBike from './CarTypesData/SuperBike/SuperBike';
import Scooty from './CarTypesData/Scooty/Scooty';
import OffroadingBike from './CarTypesData/OffroadingBike/OffroadingBike';
import CruiserBike from './CarTypesData/CruiserBike/CuiserBike';
import { Button } from '@mui/material';

import "./style.css";

const CarTypes = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className='tabSection'>
        <div className="headding1"><p>ALL TYPES</p></div>
        <div className="headding2"><p>Browse by Type</p></div>
        <div className="tab-buttons">
            <Button variant='text'size='small' onClick={() => handleChange('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>
              Super Bike
            </Button>
            <Button variant='text'size='small'  onClick={() => handleChange('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>
              Cruiser Bike
            </Button>
            <Button variant='text'size='small' onClick={() => handleChange('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>
              Scooty
            </Button>
            <Button variant='text'size='small' onClick={() => handleChange('tab4')} className={activeTab === 'tab4' ? 'active' : ''}>
              Offroading
            </Button>
        </div>
        <div className="tab-content">
          {activeTab === 'tab1' && <div><SuperBike/></div>}
          {activeTab === 'tab2' && <div><CruiserBike/></div>}
          {activeTab === 'tab3' && <div><Scooty/></div>}
          {activeTab === 'tab4' && <div><OffroadingBike/></div>}
        </div>
      </div>
    </>
  );
};

export default CarTypes;
