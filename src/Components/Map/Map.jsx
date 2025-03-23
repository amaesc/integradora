import React, { useState } from 'react';
import './Map.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../Store/bookStore';

//IMPORT COMPONENTS
import SearchBoxComponent from './Components/SearchBox/SearchBox';
import MapComponent from './Components/Map/Map';
import ContainerComponent from './Components/Container/Container';
import UserDrawerComponent from './Components/UserDrawer/UserDrawer';
import DrawerComponent from './Components/Drawer/Drawer';
import { icon } from 'leaflet';

const Map = () => {
  const { position } = store(state => state)

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [isUserOverlayVisible, setIsUserOverlayVisible] = useState(false);
  

  const [selectedBuilding, setSelectedBuilding] = useState('principalBuilding');
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('None');

  const toggleDrawer = () => { setDrawerOpen(!drawerOpen); };
  const toggleUserDrawer = () => { setUserDrawerOpen(!userDrawerOpen); };
  const toggleUserDrawerToFalse = () => { setUserDrawerOpen(false); };


  const users = [
    { id: 1, profilePic: "/images/alice.jpg" },
    { id: 2, profilePic: require("./example.jpg") },
    { id: 3, profilePic: "/images/charlie.jpg" },
  ];
  
  const userIdToShow = 2; 
  const user = users.find((u) => u.id === userIdToShow);

  return (
    <div className="principalContainer">
      <div 
        className={`userOverlay ${isUserOverlayVisible ? 'open' : ''}`}
        onClick={() => { toggleUserDrawerToFalse(); setIsUserOverlayVisible(false); }}
      >
      </div>

      <div className="drawer">
        <div className="icon" onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className="emptySpaceOne"><h1>OnMaps</h1></div>
      <div className="emptySpaceTwo">
        <div className='emptySpaceTwoDivInside'><h2>Selected: {position?.roomId}</h2></div>
      </div>

      <DrawerComponent/>
      <ContainerComponent/>
      
      <div className="userDrawer" onClick={() => { toggleUserDrawer(); setIsUserOverlayVisible(true); }}>
        <div className="userIcon">
          {user ? (
            <img src={user.profilePic} alt={user.name} />
          ) : (
            <FontAwesomeIcon icon={faCircleUser} />
          )}
        </div>
      </div>

      <UserDrawerComponent
        userDrawerOpen={userDrawerOpen}
        toggleUserDrawer={toggleUserDrawer}
        setIsUserOverlayVisible={setIsUserOverlayVisible}
      />

      <SearchBoxComponent 
        selectedBuilding={selectedBuilding} 
        selectedFloor={selectedFloor}
        selectedRoom={selectedRoom}
        setSelectedBuilding={setSelectedBuilding} 
        setSelectedFloor={setSelectedFloor}
        setSelectedRoom={setSelectedRoom}
      />
      <MapComponent 
        selectedBuilding={selectedBuilding} 
        selectedFloor={selectedFloor}
        selectedRoom={selectedRoom}
        setSelectedBuilding={setSelectedBuilding} 
        setSelectedFloor={setSelectedFloor}
        setSelectedRoom={setSelectedRoom}
      />
    </div>
  );
};

export default Map;
