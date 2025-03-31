import React, { useState, useRef } from 'react';
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
import PopupComponent from "./Components/Container/Popup/Popup";

import { icon } from 'leaflet';

const Map = () => {
  const mapRef = useRef();
  const { position } = store(state => state)

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const [isUserOverlayVisible, setIsUserOverlayVisible] = useState(false);
  

  const [selectedBuilding, setSelectedBuilding] = useState('principalBuilding');
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('None');

  const toggleDrawer = () => { setDrawerOpen(!drawerOpen); };
  const toggleUserDrawer = () => { setUserDrawerOpen(!userDrawerOpen); };
  const toggleUserDrawerToFalse = () => { setUserDrawerOpen(false); setDrawerOpen(false)};


  const { user } = store(state => state);
  const profilePictureURL = "/userImages/" +  user.profilePhotoURL;

  return (
    <div className="principalContainer">
      <div 
        className={`userOverlay ${isUserOverlayVisible ? 'open' : ''}`}
        onClick={() => { toggleUserDrawerToFalse(); setIsUserOverlayVisible(false); }}
      >
      </div>

      <div className="drawer">
        <div className="icon" onClick={() => { toggleDrawer(); setIsUserOverlayVisible(true); }}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className="emptySpaceOne"><h1>OnMaps</h1></div>
      <div className="emptySpaceTwo">
        <div className='emptySpaceTwoDivInside'><h2>Selected: {position?.roomId}</h2></div>
      </div>

      <DrawerComponent
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        setIsUserOverlayVisible={setIsUserOverlayVisible}
      />

      <ContainerComponent mapRef={mapRef}/>

      <div style={{
        gridColumn: "3/4", 
        gridRow: "2",
        padding: "20px", 
        zIndex: "1050",
        maxHeight: "60px"
      }}>
        <PopupComponent/>
      </div>
      
      <div className="userDrawer" onClick={() => { toggleUserDrawer(); setIsUserOverlayVisible(true); }}>
        <div className="userIcon">
          {user ? (
            <img src= {profilePictureURL} alt="No img" />
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
        setSelectedFloor={setSelectedFloor}
        mapRef={mapRef}
      />
    </div>
  );
};

export default Map;
