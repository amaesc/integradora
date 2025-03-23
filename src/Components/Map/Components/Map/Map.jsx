import './Map.css';

import * as polygonData from '../../polygonData'
import { store } from '../../../../Store/bookStore'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { 
  MapContainer, 
  TileLayer, 
  Polygon, 
  Polyline, 
  Popup, 
  CircleMarker, 
  useMap, 
  Marker 
} from 'react-leaflet';


const RoomLabel = ({ room, zoomManualLevel = 1 }) => {
  const map = useMap();
  const zoom = map.getZoom();

  const textIcon = L.divIcon({
    className: 'room-label',
    html: `<div style="
      font-size: ${Math.max(8, zoom * zoomManualLevel)}px; 
       
      font-weight: bold; 
      color: black; 
      background: 'transparent'; 
      padding: 2px 0px; 
      text-align: center;
      white-space: nowrap;
    ">${room.name}</div>`,
    iconSize: [100, 30],
    iconAnchor: [50, 15], 
  });

  const center = [
    room.coordinates.reduce((sum, coord) => sum + coord[0], 0) / room.coordinates.length,
    room.coordinates.reduce((sum, coord) => sum + coord[1], 0) / room.coordinates.length,
  ];

  return <Marker position={center} icon={textIcon} />;
};

const MapComponent = ({ 
  selectedBuilding, 
  selectedFloor, 
  setSelectedFloor, 
}
) => {
  const { position, setBothActiveRoomAndRoomId } = store(state => state);
  
  return (
    <div className="map" >
      <MapContainer
        center={[28.661826731863307, -106.04005753418524]}
        zoom={19}
        maxZoom={22}
        minZoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
        className='mapContainerPrincipal'
      >
        <div className='mapContainerDivOne'>
        <div className='mapContainerDivTwo'>
          Floors 
        </div>
        <div 
          className='mapContainerDivThree'
          style={{ background: selectedFloor === 0? '#32CD32' : '#2E8B57' }}
          onClick={() => setSelectedFloor(0)}
        >
          Exterior
        </div>
        <div
          className='mapContainerDivThree'
          style={{ background: selectedFloor === 1 ? '#32CD32' : '#2E8B57' }}
          onClick={() => setSelectedFloor(1)}
        >
          1
        </div>
        <div
          className='mapContainerDivThree'
          style={{ background: selectedFloor === 2 ? '#32CD32' : '#2E8B57' }}
          onClick={() => setSelectedFloor(2)}
        >
          2
        </div>
      </div>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={22}
        />

        {/* WALKABLE AREA */}
        {polygonData.walkableArea[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={polygonData.walkableAreaColor}
            positions={room.coordinates}
            style={{ zIndex: 500 }}
          >
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}

        {/* LINE BORDERS */}
        {polygonData.lineBorders[0].rooms.map((room, index) => (
          <Polyline
            key={index}
            pathOptions={polygonData.limeOptions}
            positions={room.coordinates}
          >
          </Polyline>       
        ))}
        {/* LIBRARY */}
        {polygonData.libraryPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.libraryColor
              : polygonData.libraryColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={1}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* ESPLANADE */}
        {polygonData.esplanadePolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.esplanadeColor
              : polygonData.esplanadeColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
          <RoomLabel key={index} room={room} zoomManualLevel={1}/>
          <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* CAFETERIA */}
        {polygonData.cafeteriaPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.cafeteriaColor
              : polygonData.cafeteriaColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={1}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* VOLLEYBALL */}
        {polygonData.volleyballCourtPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.volleyballCourtColor
              : polygonData.volleyballCourtColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={1}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* PALENQUE */}
        {polygonData.palenquePolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.palenqueColor
              : polygonData.palenqueColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={1.5}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* CNC */}
        {polygonData.cncPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.cncColor
              : polygonData.cncColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={1}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* PARKING */}
        {polygonData.parkingPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.parkingColor
              : polygonData.parkingColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <RoomLabel key={index} room={room} zoomManualLevel={0.5}/>
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* GENERIC BUILDING TWO */}
        {polygonData.genericBuildingTwoPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.genericOptionsColor
              : polygonData.genericOptionsColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* GENERIC BUILDING THREE */}
        {polygonData.genericBuildingThreePolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.genericOptionsColor
              : polygonData.genericOptionsColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}
        {/* GENERIC BUILDING FOUR */}
        {polygonData.genericBuildingFourPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.genericOptionsColor
              : polygonData.genericOptionsColorActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <Popup>{room.name}</Popup>
          </Polygon>
        ))}

        {/* PRINCIPAL BUILDING */}
        {polygonData.principalBuildingPolygons[0].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.principalBuildingFirstFloorColors
              : polygonData.principalBuildingFirstFloorColorsActive
            }
            positions={room.coordinates}
            eventHandlers={{
              click: () => setBothActiveRoomAndRoomId("true", room.name)
            }}
          >
            <Popup>{room.name}</Popup>
          </Polygon>        
        ))}

        {selectedBuilding == 'principalBuilding' && polygonData.principalBuildingPolygons[selectedFloor].rooms.map((room, index) => (
          <Polygon
            key={index}
            pathOptions={position.activeRoom === 'true' && position.roomId === room.name
              ? polygonData.principalBuildingFirstFloorColors[room.name]
              : polygonData.principalBuildingFirstFloorColorsActive[room.name]
            }
            positions={room.coordinates}
          >
            <Popup>
              <h2>{room.name}</h2>
              {room.additionalInfo !== 'N/A' ? (
                <p>{room.additionalInfo}</p>
              ) : null}
            </Popup>
            <RoomLabel key={index} room={room} zoomManualLevel={1}/>
          </Polygon>       
        ))}

        {selectedBuilding == 'principalBuilding' && polygonData.principalBuildingPolygons[selectedFloor].entranceRooms.map((entranceRooms, index) => (
          <CircleMarker
            key={index}
            pathOptions={polygonData.doorColor}
            center={entranceRooms}
            radius={5}
          > 
          </CircleMarker>
        ))}

      </MapContainer>
    </div>
  )
};

export default MapComponent;