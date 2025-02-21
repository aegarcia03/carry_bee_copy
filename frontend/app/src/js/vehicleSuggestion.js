// src/utils/vehicleSuggestion.js

export const suggestVehicle = (parcelDetails, availableVehicles) => {
    const { length, width, height } = parcelDetails;
    const volume = length * width * height;
  
    if (volume <= 35 * 10 * 32) {
      // Document or very small parcel - suggest a motorcycle
      return availableVehicles.find(v => v.type === 'Motorcycle') || null;
    } else if (volume <= 50 * 40 * 50) {
      // Small parcel
      return availableVehicles.find(v => v.type === 'Car') || null;
    } else if (volume <= 210 * 120 * 110) {
      // Medium parcel - suggest a van
      return availableVehicles.find(v => v.type === 'Van') || null;
    } else if (volume <= 310 * 180 * 180) {
      // Large parcel - suggest a truck pickup
      return availableVehicles.find(v => v.type === 'Truck') || null;
    } else {
        // Just following the icons
      return availableVehicles.find(v => v.type === 'Ship') || null;
    }
  };
  