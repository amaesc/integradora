import React from 'react';
import './Info.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const DrawerInfo = ({ drawerOpenInfo, toggleDrawerInfo }) => {
    return (
        <div className={`drawerInfo ${drawerOpenInfo ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>INFO</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerInfo}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>Software Version 0.0.1</h1>
                <h1>Created by Alberto's Team</h1>
                <h1>03 - 03 - 2025</h1>
            </div>
        </div>
    );
};

export default DrawerInfo;