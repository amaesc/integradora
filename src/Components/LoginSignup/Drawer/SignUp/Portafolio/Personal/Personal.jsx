import React from 'react';
import './Personal.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerPersonal = ({ drawerOpenPersonal, toggleDrawerPersonal }) => {
    return (
        <div className={`drawerPersonal ${drawerOpenPersonal ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>Personal Information</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerPersonal}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>First Name</h1>
                <h3>Alberto</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Middle Name</h1>
                <h3>Sep / 13 / 2003</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Last Name</h1>
                <h3>Chihuahua Chihuahua, México</h3>
            </div>
            <div className="drawerSquare">
                <h1>Birthday</h1>
                <h3>Spanish - Native</h3> 
                <h3>English - C1</h3>
            </div>
            <div className="drawerSquare">
            </div>
            <div className="drawerSquare">
                <h1>Enter</h1>
            </div>
        </div>
    );
};

export default DrawerPersonal;