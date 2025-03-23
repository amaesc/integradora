import { store } from '../../../../Store/bookStore'
import * as polygonData from '../../polygonData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBoxComponent = (
  selectedBuilding, 
  selectedFloor, 
  selectedRoom,
) => {
  const {setBothActiveRoomAndRoomId} = store(state => state)

  const renderKeys = (obj, insideLevel = 0) => {
    return Object.keys(obj).map((key, index) => {
      if (
        key.toLowerCase().includes('color') || 
        key.toLowerCase().includes('colors') || 
        key.toLowerCase().includes('coordinates') || 
        key.toLowerCase().includes('options') ||
        key.toLowerCase().includes('walkablearea') ||
        key.toLowerCase().includes('borders')
      ) {
        return null;
      }

      if (typeof obj[key] === 'object' && obj[key] !== null && key != 'entranceRooms') {
        return (
          <div key={index} style={{ marginLeft: '5px' }}>
            <button
              style={{
                color: 'white',
                background: (() => {
                  switch (insideLevel) {
                    case 0:
                      return "green";
                    case 1:
                      return "red";
                    case 2:
                      return "blue";
                    default:
                      return "black";
                  }
                })(),
                borderRadius: '15px',
                
                border: 'none',
                textAlign: 'left',
                padding: '10px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                marginBottom: '5px'
              }}
              onClick={(e) => {
                toggleAccordion(e);
                if(insideLevel === 3) { 
                  setBothActiveRoomAndRoomId("true", obj[key].name);
                }
              }}
            >

            {(() => {
              const position = selectedBuilding + " : " + selectedFloor + " : " + selectedRoom;
              switch(insideLevel) {
                case 0:
                  return insideLevel + " : " + obj[key][0].name;
                case 1:
                  return insideLevel + " : " + obj[key].name;
                case 2: 
                  return "ROOMS";
                case 3:
                    return insideLevel + " : " + obj[key].name + " key: " + key;
                default:
                  return console.log("We have a problem here");
              }
            })()}

            </button>
            <div
              className="accordion-content"
              style={{
                display: 'none',
                marginLeft: '20px',
                paddingLeft: '20px',
                background: 'none'
              }}
            >
              {renderKeys(obj[key], insideLevel + 1)}
            </div>
          </div>
        );
      }
    });
  };

  const toggleAccordion = (e) => {
    const content = e.target.nextElementSibling;
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  };

  return (
    <div className="searchBox">
      <div className="search">
        <input type="text" />
        <div className="icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="jsonInfo">
        <h1>JSON</h1>
        <div style={{ 
          padding: '10px', 
          maxHeight: '600px',
          maxWidth: '280px',
          overflowY: 'auto', 
          overflowX: 'auto'
        }}>
          {renderKeys(polygonData)}
        </div>
      </div>
    </div>
  );
};

export default SearchBoxComponent;