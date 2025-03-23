import React from 'react';
import './Laboral.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerLaboral = ({ drawerOpenLaboral, toggleDrawerLaboral }) => {
    return (
        <div className={`drawerLaboral ${drawerOpenLaboral ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>Laboral Information</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerLaboral}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>Restaurants</h1>
                <h3>Mesero y Bartender</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Fabric</h1>
                <h3>Operator</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Atención al cliente</h1>
                <h3>Chihuahua Chihuahua, México</h3>
            </div>
            <div className="drawerSquare">
                <h1>JR Developer</h1>
                <h3>Spanish - Native</h3>
                <h3>English - C1</h3>
            </div>
            <div className="drawerSquare">
                <h1>OMI Teacher</h1>
                <h3>Dar clases para la olimpiada</h3>
            </div>
            <div className="drawerSquare">
                <h1>Mantenimiento de Hardware</h1>
                <h3>Depende la temporada</h3>
            </div>
        </div>
    );
};

export default DrawerLaboral;

