import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faRestroom,
  faFlask,
  faMugSaucer,
  faBook,
  faSmoking,
  faSquareParking,
  faVolleyball,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const DrawerComponent = (drawerOpen, toggleDrawer, setAction) => (
  <div className={`drawerMenu ${drawerOpen ? 'openn' : ''}`}>
        <div className="drawerContent">
          <div className="closeButton" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="menuItems">
            <div className="item" onClick={() => setAction("faSmoking")}>
              <FontAwesomeIcon icon={faSmoking} />
              Smoking Area
            </div>
            <div className="item" onClick={() => setAction("faVolleyball")}>
              <FontAwesomeIcon icon={faVolleyball} />
              Volleyball Court
            </div>
            <div className="item" onClick={() => setAction("faBuilding")}>
              <FontAwesomeIcon icon={faBuilding} />
              Buildings
            </div>
            <div className="item" onClick={() => setAction("faRestroom")}>
              <FontAwesomeIcon icon={faRestroom} />
              Restrooms
            </div>
            <div className="item" onClick={() => setAction("faFlask")}>
              <FontAwesomeIcon icon={faFlask} />
              Labs
            </div>
            <div className="item" onClick={() => setAction("faMugSaucer")}>
              <FontAwesomeIcon icon={faMugSaucer} />
              Cafeteria
            </div>
            <div className="item" onClick={() => setAction("faBook")}>
              <FontAwesomeIcon icon={faBook} />
              Library
            </div>
            <div className="item" onClick={() => setAction("faSquareParking")}>
              <FontAwesomeIcon icon={faSquareParking} />
              Parking Spots
            </div>
          </div>
        </div>
      </div>
);

export default DrawerComponent;