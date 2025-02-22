// // import React, { useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

// // // The DestinationBox component receives the setter functions as props
// // interface Props {
// //   setPickupCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
// //   setDropoffCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
// // }

// // const DestinationBox: React.FC<Props> = ({ setPickupCoords, setDropoffCoords }) => {
// //   const [pickup, setPickup] = useState('');
// //   const [dropoff, setDropoff] = useState('');

// //   // Function to handle the geocoding request
// //   const geocodeAddress = async (address: string) => {
// //     const geocoder = new google.maps.Geocoder();
// //     return new Promise<google.maps.LatLng | null>((resolve, reject) => {
// //       geocoder.geocode({ address }, (results, status) => {
// //         if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
// //           resolve(results[0].geometry.location);
// //         } else {
// //           reject("Geocoding failed");
// //         }
// //       });
// //     });
// //   };

// //   // Handle form submit
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       const pickupLocation = await geocodeAddress(pickup);
// //       const dropoffLocation = await geocodeAddress(dropoff);

// //       setPickupCoords(pickupLocation);
// //       setDropoffCoords(dropoffLocation);
// //     } catch (error) {
// //       console.error('Error geocoding address:', error);
// //     }
// //   };

// //   return (
// //     <div className="destination-container">
// //       <form onSubmit={handleSubmit}>
// //         <div id="first-box">
// //           <div id="location-icons">
// //             <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
// //             <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
// //           </div>
// //           <div id="second-box">
// //             <input
// //               type="text"
// //               name="pickup"
// //               id="pickup"
// //               value={pickup}
// //               onChange={(e) => setPickup(e.target.value)}
// //               placeholder="Pick-up"
// //             />
// //             <input
// //               type="text"
// //               name="dropoff"
// //               id="dropoff"
// //               value={dropoff}
// //               onChange={(e) => setDropoff(e.target.value)}
// //               placeholder="Drop-off"
// //             />
// //           </div>
// //           <button id="next-btn" type="submit">
// //             <FontAwesomeIcon icon={faArrowRightLong} id="next-icon" />
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default DestinationBox;
// import React, { useState, useRef, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

// interface Props {
//   setPickupCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
//   setDropoffCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
// }

// const DestinationBox: React.FC<Props> = ({ setPickupCoords, setDropoffCoords }) => {
//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');
//   const [loading, setLoading] = useState(false);  // Loading state for feedback
//   const pickupInputRef = useRef<HTMLInputElement>(null);
//   const dropoffInputRef = useRef<HTMLInputElement>(null);

//   const geocodeAddress = async (address: string) => {
//     const geocoder = new google.maps.Geocoder();
//     return new Promise<google.maps.LatLng | null>((resolve, reject) => {
//       geocoder.geocode({ address }, (results, status) => {
//         if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
//           resolve(results[0].geometry.location);
//         } else {
//           reject(new Error("Geocoding failed"));
//         }
//       });
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);  // Set loading to true while geocoding

//     try {
//       const pickupLocation = await geocodeAddress(pickup);
//       const dropoffLocation = await geocodeAddress(dropoff);

//       setPickupCoords(pickupLocation);
//       setDropoffCoords(dropoffLocation);
//     } catch (error) {
//       console.error('Error geocoding address:', error);
//     } finally {
//       setLoading(false);  // Reset loading state after geocoding
//     }
//   };

//   useEffect(() => {
//     // No need for autocomplete setup now, so this can be removed
//   }, []);

//   return (
//     <div className="destination-container">
//       <form onSubmit={handleSubmit}>
//         <div id="first-box">
//           <div id="location-icons">
//             <FontAwesomeIcon icon={faLocationDot} id="location-icon" aria-label="Pick-up Location" />
//             <FontAwesomeIcon icon={faLocationDot} id="location-icon" aria-label="Drop-off Location" />
//           </div>
//           <div id="second-box">
//             <input
//               ref={pickupInputRef}
//               type="text"
//               name="pickup"
//               id="pickup"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               placeholder="Pick-up"
//             />
//             <input
//               ref={dropoffInputRef}
//               type="text"
//               name="dropoff"
//               id="dropoff"
//               value={dropoff}
//               onChange={(e) => setDropoff(e.target.value)}
//               placeholder="Drop-off"
//             />
//           </div>
//           <button id="next-btn" type="submit" disabled={loading}>
//             {loading ? 'Loading...' : <FontAwesomeIcon icon={faArrowRightLong} id="next-icon" />}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DestinationBox;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

// // The DestinationBox component receives the setter functions as props
// interface Props {
//   setPickupCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
//   setDropoffCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
// }

// const DestinationBox: React.FC<Props> = ({ setPickupCoords, setDropoffCoords }) => {
//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');

//   // Function to handle the geocoding request
//   const geocodeAddress = async (address: string) => {
//     const geocoder = new google.maps.Geocoder();
//     return new Promise<google.maps.LatLng | null>((resolve, reject) => {
//       geocoder.geocode({ address }, (results, status) => {
//         if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
//           resolve(results[0].geometry.location);
//         } else {
//           reject("Geocoding failed");
//         }
//       });
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const pickupLocation = await geocodeAddress(pickup);
//       const dropoffLocation = await geocodeAddress(dropoff);

//       setPickupCoords(pickupLocation);
//       setDropoffCoords(dropoffLocation);
//     } catch (error) {
//       console.error('Error geocoding address:', error);
//     }
//   };

//   return (
//     <div className="destination-container">
//       <form onSubmit={handleSubmit}>
//         <div id="first-box">
//           <div id="location-icons">
//             <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
//             <FontAwesomeIcon icon={faLocationDot} id="location-icon" />
//           </div>
//           <div id="second-box">
//             <input
//               type="text"
//               name="pickup"
//               id="pickup"
//               value={pickup}
//               onChange={(e) => setPickup(e.target.value)}
//               placeholder="Pick-up"
//             />
//             <input
//               type="text"
//               name="dropoff"
//               id="dropoff"
//               value={dropoff}
//               onChange={(e) => setDropoff(e.target.value)}
//               placeholder="Drop-off"
//             />
//           </div>
//           <button id="next-btn" type="submit">
//             <FontAwesomeIcon icon={faArrowRightLong} id="next-icon" />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DestinationBox;

// AQUI EMPIEZA ANGELA
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import useOrderStore from '../store/orderStore';
// import MapComponent from './mapComponent';
import { useNavigate } from 'react-router-dom';

interface Props {
  setPickup: React.Dispatch<React.SetStateAction<string | null>>;
  setPickupCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
  setDropoff: React.Dispatch<React.SetStateAction<string | null>>;
  setDropoffCoords: React.Dispatch<React.SetStateAction<google.maps.LatLng | null>>;
}

const DestinationBox: React.FC<Props> = () => {
  const [pickupInput, setPickupInput] = useState('');
  const [dropoffInput, setDropoffInput] = useState('');
  const [loading, setLoading] = useState(false);

  const { setPickup, setPickupCoords, setDropoff, setDropoffCoords } = useOrderStore();

  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropoffInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/schedule");
  };

  const geocodeAddress = async (address: string) => {
    const geocoder = new google.maps.Geocoder();
    return new Promise<google.maps.LatLng | null>((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
          resolve(results[0].geometry.location);
        } else {
          reject(new Error("Geocoding failed"));
        }
      });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true while geocoding

    try {
      const pickupLocation = await geocodeAddress(pickupInput);
      const dropoffLocation = await geocodeAddress(dropoffInput);

      const pickupCoordsArray = pickupLocation ? [pickupLocation.lat(), pickupLocation.lng()] : null;
      const dropoffCoordsArray = dropoffLocation ? [dropoffLocation.lat(), dropoffLocation.lng()] : null;

      console.log("Location added");

      setPickup(pickupInput);
      setDropoff(dropoffInput);
      setPickupCoords(pickupCoordsArray);
      setDropoffCoords(dropoffCoordsArray);
    
    } catch (error) {
      console.error('Error geocoding address:', error);
    } finally {
      setLoading(false);  // Reset loading state after geocoding
    }
  };

  useEffect(() => {
    // No need for autocomplete setup now, so this can be removed
  }, []);

  return (
    <div className="destination-container">
      <form onSubmit={handleSubmit}>
        <div id="first-box">
          <div id="location-icons">
            <FontAwesomeIcon icon={faLocationDot} id="location-icon" aria-label="Pick-up Location" />
            <FontAwesomeIcon icon={faLocationDot} id="location-icon" aria-label="Drop-off Location" />
          </div>
          <div id="second-box">
            <input
              ref={pickupInputRef}
              type="text"
              name="pickup"
              id="pickup"
              value={pickupInput}
              onChange={(e) => setPickupInput(e.target.value)}
              placeholder="Pick-up"
            />
            <input
              ref={dropoffInputRef}
              type="text"
              name="dropoff"
              id="dropoff"
              value={dropoffInput}
              onChange={(e) => setDropoffInput(e.target.value)}
              placeholder="Drop-off"
            />
          </div>
          <button id="next-btn" type="submit" disabled={loading}
          onClick={handleNextClick}>
            {loading ? 'Loading...' : <FontAwesomeIcon icon={faArrowRightLong} id="next-icon" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DestinationBox;