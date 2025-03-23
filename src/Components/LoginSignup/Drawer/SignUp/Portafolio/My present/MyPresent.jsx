import React from 'react';
import './MyPresent.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const DrawerMyPresent = ({ drawerOpenMyPresent, toggleDrawerMyPresent }) => {
    return (
        <div className={`drawerMyPresent ${drawerOpenMyPresent ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>My present</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerMyPresent}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <h1>Constantemente aprendiendo</h1>
                <h3>React, Formik y JS</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Estudiando</h1>
                <h3>Saliendo adelante en mi carrera y ayudando a mis compañeros</h3>
            </div>
            <div className='drawerSquare'>
                <h1>Reaprendiendo</h1>
                <h3>Después de un tiempo en pausa, estoy retomando el ritmo</h3>
            </div>
            <div className="drawerSquare">
                <h1>Habilidades Blandas</h1>
                <h3>Aprendiendo a convivir con los demás</h3> 
            </div>
            <div className="drawerSquare">
                <h1>Preparandome</h1>
                <h3>Aprendiendo lo que se usa y como se maneja mi ambiente laboral para estar listo</h3>
            </div>
            <div className="drawerSquare">
                <h1>Centrado</h1>
                <h3>Se lo que quiero y ahora se como conseguirlo</h3>
            </div>
        </div>
    );
};

export default DrawerMyPresent;