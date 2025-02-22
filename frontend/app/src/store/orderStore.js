import { create } from 'zustand';
import { createOrder } from '../api/orderAPI'; // Assuming you have this API function

const useOrderStore = create((set) => ({
  receiver_name: null,
  pickup_address: null,
  pickup_coords: null,
  dropoff_address: null,
  dropoff_coords: null,
  distance: 0,
  schedule: new Date("2025-02-20T14:30:00Z"), // Initializing with a sample schedule
  parcelDetails: {},
  total: null,
  selectedVehicle: null,
  user_id: null,
  status: 'idle',
  error: null,

  // Sync actions
  setReceiverName: (recipient) => {
    set((state) => {
      const newState = { ...state, receiver_name: recipient };
      console.log(recipient,'setReceiverName:', newState);
      return newState;
    });
  },
  setPickup: (pickup) => {
    set((state) => {
      const newState = { ...state, pickup_address: pickup };
      console.log(pickup,'setPickup:', newState);
      return newState;
    });
  },
  setPickupCoords: (coords) => {
    set((state) => {
      const newState = { ...state, pickup_coords: coords };
      console.log(coords,'setPickupCoords:', newState);
      return newState;
    });
  },
  setDropoff: (dropoff) => {
    set((state) => {
      const newState = { ...state, dropoff_address: dropoff };
      console.log(dropoff,'setDropoff:', newState);
      return newState;
    });
  },
  setDropoffCoords: (coords) => {
    set((state) => {
      const newState = { ...state, dropoff_coords: coords };
      console.log(coords,'setDropoffCoords:', newState);
      return newState;
    });
  },
  setDistance: (distance) => {
    set((state) => {
      const newState = { ...state, distance };
      console.log(distance,'setDistance:', newState);
      return newState;
    });
  },
  setSchedule: (schedule) => {
    set((state) => {
      const newState = { ...state, schedule };
      console.log(schedule,'setSchedule:', newState);
      return newState;
    });
  },
  setParcelDetails: (parcelDetails) => {
    set((state) => {
      const newState = { ...state, parcelDetails };
      console.log('setParcelDetails:', newState);
      return newState;
    });
  },
  setTotal: (total) => {
    set((state) => {
      const newState = { ...state, total };
      console.log('setTotal:', newState);
      return newState;
    });
  },
  setSelectedVehicle: (vehicle) => {
    set((state) => {
      const newState = { ...state, selectedVehicle: vehicle };
      console.log(vehicle,'setSelectedVehicle:', newState);
      return newState;
    });
  },

  updateOrderDetails: (details) => {
    set((state) => {
      const newState = { ...state, ...details };
      console.log(details,'updateOrderDetails:', newState);
      return newState;
    });
  },

  resetOrder: () => {
    set((state) => {
      const newState = {
        ...state,
        receiver_name: null,
        pickup_address: null,
        pickup_coords: null,
        dropoff_address: null,
        dropoff_coords: null,
        distance: 0,
        schedule: new Date("2025-02-20T14:30:00Z"),
        parcelDetails: {},
        total: null,
        selectedVehicle: null,
        user_id: null,
        status: 'idle',
        error: null,
      };
      console.log('resetOrder:', newState);
      return newState;
    });
  },

  // Async action to submit the order
  submitOrder: async (orderData) => {
    set({ status: 'loading', error: null });
    try {
      const response = await createOrder(orderData);
      set({ status: 'succeeded' });
      // You can handle the response, e.g., storing the order details
    } catch (error) {
      set({ status: 'failed', error: error.response?.data || 'Error submitting order' });
    }
  },
}));

export default useOrderStore;