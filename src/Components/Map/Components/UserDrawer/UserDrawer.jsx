import './UserDrawer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const UserDrawerComponent = ({ userDrawerOpen, toggleUserDrawer, setIsUserOverlayVisible }) => {

  const users = [
    { id: 1, profilePic: "/images/alice.jpg" },
    { id: 2, profilePic: require("../../../../userImages/1121150100.jpeg") },
    { id: 3, profilePic: "/images/charlie.jpg" },
  ];
  
  const userIdToShow = 2; 
  const user = users.find((u) => u.id === userIdToShow);

  return (
  <div className={`userDrawerMenu ${userDrawerOpen ? 'open' : ''}`}>       
        <div className="userDrawerContent" style={{zIndex: '1100'}}>
          <div className="closeButton" onClick={() => { toggleUserDrawer(); setIsUserOverlayVisible(false); }}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <h2>Profile Picture:</h2>
          {user ? (
              <img src={user.profilePic} alt={user.name} />
            ) : (
              <FontAwesomeIcon icon={faCircleUser} />
            )}
          <div className='personalInformation'>
            <p><strong>Name: </strong> Alberto Márquez Escamilla</p>
            <p><strong>UTCH ID: </strong> 1121150100</p>
            <p><strong>Group: </strong> TIDBIS31M</p>
            <p><strong>Language Group: </strong> TerceroAvanzado3_BLOQUE 2_M</p>
          </div>

          <div className="userMenuItems">
            <p className='logOutButton'>Log out</p>
          </div>
        </div>
      </div>
  )
};

export default UserDrawerComponent;