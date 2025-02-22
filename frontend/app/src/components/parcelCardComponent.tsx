// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleInfo, faFile, faBox, faGifts, faCouch, faCubes, faBoxOpen,faMotorcycle, faCarSide, faVanShuttle, faTruckPickup, faShip, faHelicopter } from '@fortawesome/free-solid-svg-icons';

// const ParcelType = () => {
//   const [active, setActive] = useState(null);

//   const handleInfoClick = (index) => {
//     setActive(index === active ? null : index); // Toggle the popup visibility
//   };

//   return (
//     <>
//     <h1 id='type'>Parcel Type</h1>
//     <div id="parcel-cards">
//       <div className="icon-box" >
//         <div className={`info-box ${active === 0 ? 'active' : ''}`} onClick={() => handleInfoClick(0)} >
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Document</h3>
//             <FontAwesomeIcon icon={faMotorcycle} className='vehicle-icon'/>
//             <p><strong>Weight:</strong> up to 20kg</p>
//             <p><strong>Size limit (L x W x H):</strong> 0.5 x 0.4 x 0.5 meters</p>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faFile} className="parcel-icon" /> Document
//       </div>

//       <div className="icon-box" >
//         <div className={`info-box ${active === 1 ? 'active' : ''}`} onClick={() => handleInfoClick(1)}>
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Small</h3>
//             <FontAwesomeIcon icon={faCarSide} className='vehicle-icon'/>
//             <p><strong>Weight:</strong> up to 200kg</p>
//             <p><strong>Size limit (L x W x H):</strong> 1 x 0.6 x 0.7 meters</p>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faBox} className="parcel-icon" /> Small
//       </div>

//       <div className="icon-box" >
//         <div className={`info-box ${active === 2 ? 'active' : ''}`} onClick={() => handleInfoClick(2)}>
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Medium</h3>
//             <FontAwesomeIcon icon={faVanShuttle} className='vehicle-icon' />
//             <p><strong>Weight:</strong> up to 300kg</p>
//             <p><strong>Size limit (L x W x H):</strong> 1.2 x 1 x 0.9 meters</p>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faGifts} className="parcel-icon" /> Medium
//       </div>

//       <div className="icon-box" >
//         <div className={`info-box ${active === 3 ? 'active' : ''}`} onClick={() => handleInfoClick(3)}>
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Large</h3>
//             <FontAwesomeIcon icon={faTruckPickup} className='vehicle-icon' />
//             <p><strong>Weight:</strong> up to 800kg</p>
//             <p><strong>Size limit (L x W x H):</strong> 2.7 x 1.5 x 0.5 meters</p>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faCouch} className="parcel-icon" /> Large
//       </div>

//       <div className="icon-box" >
//         <div className={`info-box ${active === 4 ? 'active' : ''}`} onClick={() => handleInfoClick(4)}>
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Extra Large</h3>
//             <FontAwesomeIcon icon={faShip} className='vehicle-icon' />
//             <p><strong>Weight:</strong> up to 1000kg</p>
//             <p><strong>Size limit (L x W x H):</strong> 10 x 10 x 10 meters</p>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faCubes} className="parcel-icon" /> Extra Large
//       </div>

//       <div className="icon-box" >
//         <div className={`info-box ${active === 5 ? 'active' : ''}`} onClick={() => handleInfoClick(5)}>
//           <span className="info-button">
//             <FontAwesomeIcon icon={faCircleInfo} />
//           </span>
//           <div className="info-popup">
//             <h3 className='popup-head'>Custom</h3>
//             <FontAwesomeIcon icon={faHelicopter} className='vehicle-icon' />
//             <p><strong>Weight:</strong> contact customer team</p>
//             <p><strong>Size limit (L x W x H):</strong> contact customer team</p>
//             <h5 id='customer-contact'>Contact us</h5>
//           </div>
//         </div>
//         <FontAwesomeIcon icon={faBoxOpen} className="parcel-icon" /> Custom
//       </div>
//     </div>
//     </>
//   );
// };

// export default ParcelType;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faFile, faBox, faGifts, faCouch, faCubes, faBoxOpen, faMotorcycle, faCarSide, faVanShuttle, faTruckPickup, faShip, faHelicopter } from '@fortawesome/free-solid-svg-icons';
import useOrderStore from '../store/orderStore';
import { suggestVehicle } from '../js/vehicleSuggestion';

const defaultDimensions = {
  DOCUMENT: { length: 35, width: 10, height: 32},
  SMALL: { length: 50, width: 40, height: 50 }, // NSC110 Dio
  MEDIUM: { length: 210, width: 120, height: 110}, // Renault Kangoo
  LARGE: { length: 310, width: 180, height: 180}, // Kia K2700
  EXTRA_LARGE: { length:600, width:195, height: 195}, // Isuzu npr
  CUSTOM: { length: null, width: null, height: null }, 
};

const availableVehicles = [
  { id: 1, type: 'motorcycle', name: 'Motorcycle' },
  { id: 2, type: 'car', name: 'Car' },
  { id: 3, type: 'van', name: 'Van' },
  { id: 4, type: 'truck', name: 'Truck' },
  { id: 5, type: 'ship', name: 'Ship' }
];

const ParcelCategory = ({ onSelectCategory }) => {
  const { updateOrderDetails, setSelectedVehicle } = useOrderStore();
  const [active, setActive] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null); // for selected card

  const handleCardClick = (index, category) => {
    setSelectedCard(index); // set the selected card 
    setActive(index === active ? null : index); // Toggle the popup visibility
  
    const dimensions = defaultDimensions[category];
    
    updateOrderDetails({
      parcelDetails: {
        height: dimensions.height,
        width: dimensions.width,
        length: dimensions.length,
      },
    });
    
    // Use the suggestion function to pick a vehicle based on parcel dimensions.
    // Make sure the dimensions have non-null values
    if (dimensions.length && dimensions.width && dimensions.height) {
      const suggested = suggestVehicle(dimensions, availableVehicles);
      setSelectedVehicle(suggested);
    }
  };

  return (
    <>
      <h1 id='type'>Parcel Type</h1>
      <div id="parcel-cards">
        <div className={`icon-box ${selectedCard === 0 ? 'selected' : ''}`}
          onClick={() => handleCardClick(0, 'DOCUMENT')}
        >
          <div className={`info-box ${active === 0 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Document</h3>
              <FontAwesomeIcon icon={faMotorcycle} className='vehicle-icon'/>
              <p><strong>Weight:</strong> up to 20kg</p>
              <p><strong>Size limit (L x W x H):</strong> 35 x 32 x 10 cm</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faFile} className="parcel-icon" /> Document
        </div>

        <div className={`icon-box ${selectedCard === 1 ? 'selected' : ''}`}
          onClick={() => handleCardClick(1, 'SMALL')}
        >
          <div className={`info-box ${active === 1 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Small</h3>
              <FontAwesomeIcon icon={faCarSide} className='vehicle-icon'/>
              <p><strong>Weight:</strong> up to 200kg</p>
              <p><strong>Size limit (L x W x H):</strong> 50 x 40 x 50 cm </p>
            </div>
          </div>
          <FontAwesomeIcon icon={faBox} className="parcel-icon" /> Small
        </div>

        <div className={`icon-box ${selectedCard === 2 ? 'selected' : ''}`}
          onClick={() => handleCardClick(2, 'MEDIUM')}
        >
          <div className={`info-box ${active === 2 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Medium</h3>
              <FontAwesomeIcon icon={faVanShuttle} className='vehicle-icon' />
              <p><strong>Weight:</strong> up to 300kg</p>
              <p><strong>Size limit (L x W x H):</strong> 210 x 120 x 110 cm </p>
            </div>
          </div>
          <FontAwesomeIcon icon={faGifts} className="parcel-icon" /> Medium
        </div>

        <div className={`icon-box ${selectedCard === 3 ? 'selected' : ''}`}
          onClick={() => handleCardClick(3, 'LARGE')}
        >
          <div className={`info-box ${active === 3 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Large</h3>
              <FontAwesomeIcon icon={faTruckPickup} className='vehicle-icon' />
              <p><strong>Weight:</strong> up to 800kg</p>
              <p><strong>Size limit (L x W x H):</strong> 310 x 180 x 180 cm</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faCouch} className="parcel-icon" /> Large
        </div>

        <div className={`icon-box ${selectedCard === 4 ? 'selected' : ''}`}
          onClick={() => handleCardClick(4, 'EXTRA_LARGE')}
        >
          <div className={`info-box ${active === 4 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Extra Large</h3>
              <FontAwesomeIcon icon={faShip} className='vehicle-icon' />
              <p><strong>Weight:</strong> up to 1000kg</p>
              <p><strong>Size limit (L x W x H):</strong> 600 x 195 x 195 cm</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faCubes} className="parcel-icon" /> Extra Large
        </div>

        <div className={`icon-box ${selectedCard === 5 ? 'selected' : ''}`}
          onClick={() => handleCardClick(5, 'CUSTOM')}
        >
          <div className={`info-box ${active === 5 ? 'active' : ''}`}>
            <span className="info-button">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <div className="info-popup">
              <h3 className='popup-head'>Custom</h3>
              <FontAwesomeIcon icon={faHelicopter} className='vehicle-icon' />
              <p><strong>Weight:</strong> contact customer team</p>
              <p><strong>Size limit (L x W x H):</strong> contact customer team</p>
              <h5 id='customer-contact'>Contact us</h5>
            </div>
          </div>
          <FontAwesomeIcon icon={faBoxOpen} className="parcel-icon" /> Custom
        </div>
      </div>
    </>
  );
};

export default ParcelCategory;
