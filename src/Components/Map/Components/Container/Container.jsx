import { store } from '../../../../Store/bookStore'
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

const ContainerComponent = ({ mapRef }) => {
  const { icon, setIcon } = store(state => state);

  const handleClick = (item) => {
    if(icon.activeIcon != item.label) {
      setIcon(item.label);
    }else{
      setIcon("N/A");
    }
  };
  

  return (
    <div className="container">
      <div className="icons">
        {[
          { icon: faSmoking, 
            label: 'Smoking Area',  
            building: 'Smoking Area',
            floor: '0'
          },
          { icon: faVolleyball, 
            label: 'Volleyball Court', 
            building: 'Volleyball Court',
            floor: '0'
          },
          { icon: faBuilding, 
            label: 'Buildings', 
            building: 'principalBuilding',
            floor: '0'
          },
          { icon: faRestroom, 
            label: 'Restrooms', 
            building: 'Restrooms',
            floor: '1' 
          },
          { icon: faFlask, 
            label: 'Labs', 
            building: 'CNC',
            floor: '0' 
          },
          { icon: faMugSaucer, 
            label: 'Cafeteria', 
            building: 'Cafeteria',
            floor: '0' 
          },
          { icon: faBook, 
            label: 'Library', 
            building: 'Library',
            floor: '0' 
          },
          { icon: faSquareParking, 
            label: 'Parking Spots', 
            building: 'Smoking Area',
            floor: '0' 
          },
        ].map((item, index) => (
          <div 
            key={index} 
            onClick={() => {
              //setIcon(item.label);
              handleClick(item);
            }}
            >
            <div
              className={icon.activeIcon === item.label ? 'icon-active' : 'icon'}
            >
              <FontAwesomeIcon icon={item.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContainerComponent;