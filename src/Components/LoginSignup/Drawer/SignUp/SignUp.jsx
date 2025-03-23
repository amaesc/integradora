import React,  {useState} from 'react';
import './SignUp.css'

/*FONT AWESOME  ICONS*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

/*My Portafolio Components */
import DrawerPersonal from './Portafolio/Personal/Personal'
import DrawerAcademic from './Portafolio/Academic/Academic'
import DrawerLaboral from './Portafolio/Laboral/Laboral'
import DrawerAchivements from './Portafolio/Achivements/Achivements'
import DrawerMyPresent from './Portafolio/My present/MyPresent'
import DrawerMyFuture from './Portafolio/My future/MyFuture'
import DrawerFunFact from './Portafolio/Fun Fact/FunFact'

const DrawerSignUp = ({ drawerOpenSignUp, toggleDrawerSignUp }) => {
    const [drawerOpenPersonal, setDrawerOpenPersonal] = useState(false);
    const [drawerOpenAcademic, setDrawerOpenAcademic] = useState(false);
    const [drawerOpenLaboral, setDrawerOpenLaboral] = useState(false);
    const [drawerOpenAchivements, setDrawerOpenAchivements] = useState(false);
    const [drawerOpenMyPresent, setDrawerOpenMyPresent] = useState(false);
    const [drawerOpenMyFuture, setDrawerOpenMyFuture] = useState(false);
    const [drawerOpenFunFact, setDrawerOpenFunFact] = useState(false);

    const [isPersonalOverlayVisible, setIsPersonalOverlayVisible] = useState(false);

    const closePersonalOverlay = () => { 
        setDrawerOpenPersonal(false); 
        setDrawerOpenAcademic(false);
        setDrawerOpenLaboral(false);
        setDrawerOpenAchivements(false);
        setDrawerOpenMyPresent(false);
        setDrawerOpenMyFuture(false);
        setDrawerOpenFunFact(false);
        setIsPersonalOverlayVisible(false); 
    };
    const toggleDrawerPersonal = () => { setDrawerOpenPersonal(!drawerOpenPersonal); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };
    const toggleDrawerAcademic = () => { setDrawerOpenAcademic(!drawerOpenAcademic); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };
    const toggleDrawerLaboral = () => { setDrawerOpenLaboral(!drawerOpenLaboral); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };    
    const toggleDrawerAchivements = () => {setDrawerOpenAchivements(!drawerOpenAchivements); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };
    const toggleDrawerMyPresent = () => {setDrawerOpenMyPresent(!drawerOpenMyPresent); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };
    const toggleDrawerMyFuture = () => {setDrawerOpenMyFuture(!drawerOpenMyFuture); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };
    const toggleDrawerFunFact = () => {setDrawerOpenFunFact(!drawerOpenFunFact); setIsPersonalOverlayVisible(!isPersonalOverlayVisible) };

    return (
        <div className={`drawerSignUp ${drawerOpenSignUp ? 'open' : ''}`}>
            <div className="drawerSquare"><h1>ABOUT ME</h1></div>
            <div className="drawerSquare">
                <div className='fontAwesomeIcon' onClick={toggleDrawerSignUp}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
            <div className="drawerSquare">
                <div className='squareButton' onClick={toggleDrawerPersonal}>
                    <h1>Personal Info</h1>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerAcademic}>
                <div className='squareButton'>
                    <h1>Email</h1>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerLaboral}>
                <div className='squareButton'>
                    <h1>Academic Info</h1>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerAchivements}>
                <div className='squareButton'>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerMyPresent}>
                <div className='squareButton'>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerMyFuture}>
                <div className='squareButton'>
                </div>
            </div>
            <div className="drawerSquare" onClick={toggleDrawerFunFact}>
                <div className='squareButton'>
                    <h1>Fun Fact</h1>
                </div>
            </div>
            <div className="drawerSquare">
            </div>

            {/* PERSONAL DRAWERS */}
            <DrawerPersonal drawerOpenPersonal={drawerOpenPersonal} toggleDrawerPersonal={toggleDrawerPersonal} />
            <DrawerAcademic drawerOpenAcademic={drawerOpenAcademic} toggleDrawerAcademic={toggleDrawerAcademic} />
            <DrawerLaboral drawerOpenLaboral={drawerOpenLaboral} toggleDrawerLaboral={toggleDrawerLaboral} />
            <DrawerAchivements drawerOpenAchivements={drawerOpenAchivements} toggleDrawerAchivements={toggleDrawerAchivements} />
            <DrawerMyPresent drawerOpenMyPresent={drawerOpenMyPresent} toggleDrawerMyPresent={toggleDrawerMyPresent} />
            <DrawerMyFuture drawerOpenMyFuture={drawerOpenMyFuture} toggleDrawerMyFuture={toggleDrawerMyFuture} />
            <DrawerFunFact drawerOpenFunFact={drawerOpenFunFact} toggleDrawerFunFact={toggleDrawerFunFact} />

            {/* PERSONAL OVERLAY */}
            <div className={`personalOverlay ${isPersonalOverlayVisible ? 'open' : ''}`} onClick={closePersonalOverlay}></div>
        </div>
    );
};

export default DrawerSignUp;