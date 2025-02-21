// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle, faCarSide, faVanShuttle, faTruckPickup, faShip, faHelicopter } from '@fortawesome/free-solid-svg-icons';
// import '../css/vehicleOptions.css';

// const VehicleType = () => {
//   return (
//     <>
//       <h1 id='type'>Available Vehicles</h1>
//       <div id="vehicle-cards">
//         <div className="icon-box">
//           <FontAwesomeIcon icon={faMotorcycle} className='vehicle-icon'/>
//           <p>Motorcycle</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faCarSide} className='vehicle-icon'/>
//           <p>Car</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faVanShuttle} className='vehicle-icon'/>
//           <p>Van</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faTruckPickup} className='vehicle-icon'/>
//           <p>Truck</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faShip} className='vehicle-icon'/>
//           <p>Ship</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faHelicopter} className='vehicle-icon'/>
//           <p>Helicopter</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VehicleType;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle, faCarSide, faVanShuttle, faTruckPickup, faShip, faHelicopter } from '@fortawesome/free-solid-svg-icons';
// import '../css/vehicleOptions.css';

// const VehicleType = () => {
//   return (
//     <>
//       <h1 id='type'>Available Vehicles</h1>
//       <div id="vehicle-cards">
//         <div className="icon-box">
//           <FontAwesomeIcon icon={faMotorcycle} className='vehicle-icon'/>
//           <p>Motorcycle</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faCarSide} className='vehicle-icon'/>
//           <p>Car</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faVanShuttle} className='vehicle-icon'/>
//           <p>Van</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faTruckPickup} className='vehicle-icon'/>
//           <p>Truck</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faShip} className='vehicle-icon'/>
//           <p>Ship</p>
//         </div>

//         <div className="icon-box">
//           <FontAwesomeIcon icon={faHelicopter} className='vehicle-icon'/>
//           <p>Helicopter</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VehicleType;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faCarSide, faVanShuttle, faTruckPickup, faShip, faHelicopter } from '@fortawesome/free-solid-svg-icons';
import '../css/vehicleOptions.css';
import useOrderStore from '../store/orderStore';

const VehicleType = () => {
  const selectedVehicle = useOrderStore((state) => state.selectedVehicle);

  const vehicles = [
    { id: 1, type: 'motorcycle', name: 'Motorcycle', icon: faMotorcycle },
    { id: 2, type: 'car', name: 'Car', icon: faCarSide },
    { id: 3, type: 'van', name: 'Van', icon: faVanShuttle },
    { id: 4, type: 'truck', name: 'Truck', icon: faTruckPickup },
    { id: 5, type: 'ship', name: 'Ship', icon: faShip },
    { id: 6, type: 'helicopter', name: 'Helicopter', icon: faHelicopter },
  ];

  const handleCardClick = (vehicle) => {
    useOrderStore.getState().setSelectedVehicle(vehicle); // Update the selected vehicle in the store
    console.log('Vehicle selected:', vehicle);
  };

  return (
    <>
      <h1 id="type">Available Vehicles</h1>
      <div id="vehicle-cards">
        {vehicles.map((vehicle) => {
          const isSelected = selectedVehicle && selectedVehicle.id === vehicle.id;
          return (
            <div 
              key={vehicle.id} 
              className="icon-box"
              style={{
                border: isSelected ? '2px solid green' : '1px solid #ccc',
                padding: '1rem',
                borderRadius: '5px'
              }}
            >
              <FontAwesomeIcon icon={vehicle.icon} className="vehicle-icon" />
              <p>{vehicle.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VehicleType;
