import React, { useState } from 'react'
import './LoginSignup.css'
import translations from '../../Language/translation.json'
import { store } from '../../Store/bookStore';
import LanguageComponent from './Drawer/Language/Language'


/*UTCH LOGOS*/
import utchLogo from '../Assets/utchsolologo.png';
import utchText from '../Assets/utch.png';

/*FONT AWESOME ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faLocationDot, faMugSaucer, faBuilding, faSquareParking,
} from '@fortawesome/free-solid-svg-icons';

/*DRAWERS*/
import DrawerContactUs from './Drawer/ContactUs/ContactUs';
import DrawerLogIn from './Drawer/Login/Login';
import DrawerSignUp from './Drawer/SignUp/SignUp';
import DrawerInfo from './Drawer/Info/Info';

const LoginSignup = () => {

    const { language } = store(state => state);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const [drawerOpenContactUs, setDrawerOpenContactUs] = useState(false);
    const [drawerOpenLogIn, setDrawerOpenLogIn] = useState(false);
    const [drawerOpenSignUp, setDrawerOpenSignUp] = useState(false);
    const [drawerOpenInfo, setDrawerOpenInfo] = useState(false);

    const closeOverlay = () => {
        setDrawerOpenContactUs(false);
        setDrawerOpenLogIn(false);
        setDrawerOpenSignUp(false);
        setDrawerOpenInfo(false);
        setIsOverlayVisible(false);
    }

    const toggleDrawerContactUs = () => { setDrawerOpenContactUs(!drawerOpenContactUs); setIsOverlayVisible(!isOverlayVisible); };
    const toggleDrawerLogIn = () => { setDrawerOpenLogIn(!drawerOpenLogIn); setIsOverlayVisible(!isOverlayVisible); };
    const toggleDrawerSignUp = () => { setDrawerOpenSignUp(!drawerOpenSignUp); setIsOverlayVisible(!isOverlayVisible); }
    const toggleDrawerInfo = () => { setDrawerOpenInfo(!drawerOpenInfo); setIsOverlayVisible(!isOverlayVisible); }

    return (
        <div className='background'>
            {/*BACKGROUND SQUARES*/}
            <div class="square"> <h1>BIENVENIDO</h1></div>
            <div class="square"> <h1>BIENVENUE</h1></div>
            <div class="square">
                <div style={{ padding: "10px" }}>
                    <img src={utchLogo} alt="NOT FOUND" />
                </div>
            </div>
            <div class="square">
                <LanguageComponent/>
            </div>
            <div class="square"><div className='fontAwesomeIcon'><FontAwesomeIcon icon={faMugSaucer} /></div></div>
            <div class="square"><div className='fontAwesomeIcon'><FontAwesomeIcon icon={faBuilding} /></div></div>
            <div class="square"><div className='fontAwesomeIcon'><FontAwesomeIcon icon={faSquareParking} /></div></div>
            <div class="square">
                <div className='squareButton'>
                    <h2 className='submit white' onClick={toggleDrawerLogIn}>{translations.Components.LoginSignUp.LogIn[language.lang]}</h2>
                </div>
            </div>
            <div class="square">
                <div className='squareButton'>
                    <h2 className='submit white' onClick={toggleDrawerSignUp}>{translations.Components.LoginSignUp.SignUp[language.lang]}</h2>
                </div>
            </div>
            <div class="square">
                <div className='squareButton'>
                    <h2 className='submit white' onClick={toggleDrawerInfo}>{translations.Components.LoginSignUp.Info[language.lang]}</h2>
                </div>
            </div>
            <div class="square">
                <div className='fontAwesomeIcon'>
                    <FontAwesomeIcon icon={faMapLocationDot} />
                </div>
            </div>
            <div class="square">
                <div className='fontAwesomeIcon'>
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
            </div>
            <div class="square"><img src={utchText} alt="NOT FUND" /></div>
            <div class="square">
                <div className='squareButton'>
                    <h2 className='submit white' onClick={toggleDrawerContactUs}>{translations.Components.LoginSignUp.ContactMe[language.lang]}</h2>
                </div>
            </div>
            <div class="square"><h1>WELCOME</h1></div>

            {/*DRAWER LOG IN - SIGN UP - INFO - CONTAC US*/}
            <DrawerContactUs drawerOpenContactUs={drawerOpenContactUs} toggleDrawerContactUs={toggleDrawerContactUs} />
            <DrawerLogIn drawerOpenLogIn={drawerOpenLogIn} toggleDrawerLogIn={toggleDrawerLogIn} />
            <DrawerSignUp drawerOpenSignUp={drawerOpenSignUp} toggleDrawerSignUp={toggleDrawerSignUp} />
            <DrawerInfo drawerOpenInfo={drawerOpenInfo} toggleDrawerInfo={toggleDrawerInfo} />

            {/*OVERLAY SCREEN*/}
            <div className={`overlay ${isOverlayVisible ? 'open' : ''}`} onClick={closeOverlay}></div>
        </div>
    )
}

export default LoginSignup