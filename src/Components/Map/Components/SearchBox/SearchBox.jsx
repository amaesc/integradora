import { store } from '../../../../Store/bookStore'
import React, { useState, useRef } from 'react';
import * as polygonData from '../../polygonData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faFolderMinus } from '@fortawesome/free-solid-svg-icons';

const SearchBoxComponent = (
  selectedBuilding,
  selectedFloor,
  selectedRoom,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setBothActiveRoomAndRoomId } = store(state => state)
  const [position, setPosition] = useState({ x: 1490, y: 75 });
  const [isDragging, setIsDragging] = useState(false);
  const searchBoxRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const toggleDropdown = () => {
    console.log("toggleDropDown: ", isDragging);
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e) => {
    console.log("HandleMouseDown: ", isDragging);
    setIsDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp: ", isDragging);
    setIsDragging(false);
  };

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
                if (insideLevel === 3) {
                  setBothActiveRoomAndRoomId("true", obj[key].name);
                }
              }}
            >

              {(() => {
                const position = selectedBuilding + " : " + selectedFloor + " : " + selectedRoom;
                switch (insideLevel) {
                  case 0:
                    return obj[key][0].name;
                  case 1:
                    return obj[key].name;
                  case 2:
                    return "ROOMS";
                  case 3:
                    return obj[key].name;
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
    <div
      ref={searchBoxRef}
      className="searchBox"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        maxHeight: isOpen ? "" : "100px",
        zIndex: 1000,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="jsonInfo">
        <h1
          onClick={() => { !isDragging && toggleDropdown() }}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Search <FontAwesomeIcon icon={isOpen ? faFolderMinus : faFolderPlus} />
        </h1>
        {isOpen && (
          <div
            style={{
              padding: "10px",
              maxHeight: "600px",
              maxWidth: "280px",
              overflow: "auto"
            }}
          >
            {renderKeys(polygonData)}
          </div>
        )}
      </div>
    </div>
  );

};

export default SearchBoxComponent;


