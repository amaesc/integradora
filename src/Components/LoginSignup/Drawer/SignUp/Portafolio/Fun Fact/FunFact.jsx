import React from 'react';
import './FunFact.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerFunFact = ({ drawerOpenFunFact, toggleDrawerFunFact }) => {
    return (
        <div className={`drawerFunFact ${drawerOpenFunFact ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>Fun Fact</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerFunFact}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>My B-Day</h1>
                <h3>September 13</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Day 256</h1>
                <h3>Every no leap year equals to my B-Day</h3>
            </div>
            <div className='drawerSquare'>
                <h1>2⁸</h1>
                <h3>Equals to 256</h3>
            </div>
            <div className="drawerSquare">
                <h1>Programmer's day</h1>
                <h3>Celebrated on Day 2⁸</h3> 
            </div>
            <div className="drawerSquare">
                <h1>So...</h1>
            </div>
            <div className="drawerSquare">
                <h1>My B-Day is my profession day!</h1>
                <h3>(Every no-leap year)</h3>
            </div>
        </div>
    );
};

export default DrawerFunFact;