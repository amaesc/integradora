import React from 'react';
import './Achivements.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerAchivements = ({ drawerOpenAchivements, toggleDrawerAchivements }) => {
    return (
        <div className={`drawerAchivements ${drawerOpenAchivements ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>Achivements</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerAchivements}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>OMICHH Selective</h1>
                <h3>Olimpiada Mexicana de Informática en Chihuahua</h3>
            </div>
            <div className='drawerSquare'>
                <h1>OMI <br/> Attendance</h1>
                <h3>Olimpiada Nacional de Informática en México</h3>
            </div>
            <div className='drawerSquare'>
                <h1>OMI Champion</h1>
                <h3>One of the best performances</h3>
            </div>
            <div className="drawerSquare">
                <h1>ICPC Mexican Selective</h1>
                <h3>Internacional Collegiate Programming Contest</h3> 
            </div>
            <div className="drawerSquare">
                <h1>SOLARCYT - EMPRENDAY Champion</h1>
                <h3>Programming Latinoamerican Contest</h3>
            </div>
            <div className="drawerSquare">
                <h1>Be Alive</h1>
            </div>
        </div>
    );
};

export default DrawerAchivements;