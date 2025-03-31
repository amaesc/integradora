import React from 'react';
import './ContactUs.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const DrawerContactUs = ({ drawerOpenContactUs, toggleDrawerContactUs }) => {
    return (
        <div className={`drawerMenuContactUs ${drawerOpenContactUs ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>CONTACT US</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerContactUs}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <div
                    className="fontAwesomeIcon"
                    onClick={() => (window.location.href = "https://www.youtube.com/watch?v=sGpdwChbOy0&list=RDsGpdwChbOy0&start_radio=1")}
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
            <div className="drawerSquare">
                <div
                    className="fontAwesomeIcon"
                    onClick={() => (window.location.href = "https://www.youtube.com/watch?v=sGpdwChbOy0&list=RDsGpdwChbOy0&start_radio=1")}
                >
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
            <div className="drawerSquare">
                <div
                    className="fontAwesomeIcon"
                    onClick={() => (window.location.href = "https://www.youtube.com/watch?v=sGpdwChbOy0&list=RDsGpdwChbOy0&start_radio=1")}
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>
        </div>
    );
};

export default DrawerContactUs;