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
} from '@fortawesome/free-solid-svg-icons';

const ContainerComponent = ({ action, setAction }) => (
  <div className="container">
        <div className="icons">
          {/* Action icons for user selection */}
          {[
            { icon: faSmoking, label: 'Smoking Area' },
            { icon: faVolleyball, label: 'Volleyball Court' },
            { icon: faBuilding, label: 'Buildings' },
            { icon: faRestroom, label: 'Restrooms' },
            { icon: faFlask, label: 'Labs' },
            { icon: faMugSaucer, label: 'Cafeteria' },
            { icon: faBook, label: 'Library' },
            { icon: faSquareParking, label: 'Parking Spots' },
          ].map((item, index) => (
            <div key={index}>
              <div
                className={action === item.label ? 'icon-active' : 'icon'}
                onClick={() => setAction(item.label)}
              >
                <FontAwesomeIcon icon={item.icon} />
              </div>
              {action === item.label ? <div className="underline"></div> : <div></div>}
            </div>
          ))}
        </div>
      </div>
);

export default ContainerComponent;