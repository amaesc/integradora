import React from 'react';
import './ContactUs.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const DrawerContactUs = ({ drawerOpenContactUs, toggleDrawerContactUs }) => {
    return (
        <div className={`drawerMenuContactUs ${drawerOpenContactUs ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>CONTACT ME</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerContactUs}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon'>
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon'>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
            <div className="drawerSquare"><h1>LEAVE ME A MESSAGE!</h1></div>
            <div className="drawerSquare">
                <div className='squareButton'>
                    <div className='fontAwesomeIcon' style={{ padding: "10px"}}>
                        <FontAwesomeIcon icon={faPaperPlane} style={{height: "5rem"}}/>
                    </div>
                    <h3>Create Message</h3>
                </div>
            </div>
        </div>
    );
};

export default DrawerContactUs;