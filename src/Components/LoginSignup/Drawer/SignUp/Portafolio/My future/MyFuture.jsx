import React from 'react';
import './MyFuture.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerMyFuture = ({ drawerOpenMyFuture, toggleDrawerMyFuture }) => {
    return (
        <div className={`drawerMyFuture ${drawerOpenMyFuture ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>My Future</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerMyFuture}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>Enfoque</h1>
                <h3>En Desarrollo de Software con enfásis de Backend</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Habilidades Blandas</h1>
                <h3>Manejo de equipos como todo un SCRUM Master</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Maestro</h1>
                <h3>Dar clases es mi pasión y quiero inspirar a los demás</h3>
            </div>
            <div className="drawerSquare">
                <h1>Idioms</h1>
                <h3>C2 en Inglés, Aprender Chino Mandarín y entretenerme con el Noruego</h3>
            </div>
            <div className="drawerSquare">
                <h1>Trabajo Remoto</h1>
                <h3>Ganar dólares y gastar en pesos</h3>
            </div>
            <div className="drawerSquare">
                <h1>Construir mi casa</h1>
                <h3>Mi pequeño proyecto personal</h3>
            </div>
        </div>
    );
};

export default DrawerMyFuture;