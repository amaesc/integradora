import "./Drawer.css";
import LanguageComponent from '../../../LoginSignup/Drawer/Language/Language'
import { useNavigate } from 'react-router-dom';
import { store } from '../../../../Store/bookStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const DrawerComponent = ({ drawerOpen, toggleDrawer, setIsUserOverlayVisible }) => {
  const { user, setUser } = store(state => state);
  const navigate = useNavigate();
  return (
    <div className={`drawerMenu ${drawerOpen ? 'open' : ''}`}>
      <div className="drawerContent">
        <div className="closeButton" onClick={() => { toggleDrawer(); setIsUserOverlayVisible(false); }}>
          <FontAwesomeIcon icon={faClose} />
        </div>

        <div>
          <div className="drawerSubtitle">
            <h1>Pages</h1>
          </div>
          <h2 
            className= {user.isAdmin ? 'drawerOptions' : 'drawerOptionsNoAccess'}
            onClick={user.isAdmin ? () => navigate('/administrator') : () => {}}
          >
            Administrative
          </h2>
          <h2 className="drawerOptions" onClick={() => setUser(false)}>Stadistics</h2>


          <LanguageComponent />

        </div>
      </div>
    </div>
  );
};

export default DrawerComponent;