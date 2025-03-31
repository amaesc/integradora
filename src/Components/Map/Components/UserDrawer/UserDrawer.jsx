import './UserDrawer.css'
import { store } from '../../../../Store/bookStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const UserDrawerComponent = ({ userDrawerOpen, toggleUserDrawer, setIsUserOverlayVisible }) => {
  
  const navigate = useNavigate();
  const { user } = store(state => state);
  const profilePictureURL = "/userImages/" +  user.profilePhotoURL;
  const userId = user.email.split("@")[0];

  return (
  <div className={`userDrawerMenu ${userDrawerOpen ? 'open' : ''}`}>       
        <div className="userDrawerContent" style={{zIndex: '1100'}}>
          <div className="closeButton" onClick={() => { toggleUserDrawer(); setIsUserOverlayVisible(false); }}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <h2>Profile Picture:</h2>
          {user ? (
              <img src={profilePictureURL} alt={user.firstName} />
            ) : (
              <FontAwesomeIcon icon={faCircleUser} />
            )}
          <div className='personalInformation'>
            <p><strong>Name: </strong> {user.firstName} {user.middleName} {user.lastName} </p>
            <p><strong>UTCH ID: </strong> {userId} </p>
            <p><strong>Group: </strong> {user.groupKey }</p>
            <p><strong>Language Group: </strong> {user.idiomGroupKey} </p>
          </div>

          <div className="userMenuItems">
          <p className="logOutButton" onClick={() => navigate("/")}> Log out </p>
          </div>
        </div>
      </div>
  )
};

export default UserDrawerComponent;