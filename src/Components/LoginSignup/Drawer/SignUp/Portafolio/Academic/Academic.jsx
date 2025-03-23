import React from 'react';
import './Academic.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerAcademic = ({ drawerOpenAcademic, toggleDrawerAcademic }) => {
    return (
        <div className={`drawerAcademic ${drawerOpenAcademic ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>Academic Information</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerAcademic}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquareSignUp">
                <h1>Email</h1>
            </div>
            <div className='drawerSquareSignUp'>
                
            </div>
            <div className='drawerSquareSignUp'>
            
            </div>
            <div className="drawerSquareSignUp">
                
            </div>
            <div className="drawerSquareSignUp">
                <h1>UTCH BIS Student</h1>
                <h3>Information Technologies Multiplataform Development</h3>
            </div>
            <div className="drawerSquareSignUp">
                <h1>Enter</h1>
            </div>
        </div>
    );
};

export default DrawerAcademic;