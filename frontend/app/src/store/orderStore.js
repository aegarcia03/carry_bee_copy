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
  setReceiverName: (recipient) => set({ receiver_name: recipient }),
  setPickup: (pickup) => set({ pickup_address: pickup }),
  setPickupCoords: (coords) => set({ pickup_coords: coords }),
  setDropoff: (dropoff) => set({ dropoff_address: dropoff }),
  setDropoffCoords: (coords) => set({ dropoff_coords: coords }),
  setDistance: (distance) => set({ distance }),
  setSchedule: (schedule) => set({ schedule }),
  setParcelDetails: (parcelDetails) => set({ parcelDetails }),
  setTotal: (total) => set({ total }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),

  updateOrderDetails: (details) => set((state) => ({ ...state, ...details })),

  resetOrder: () => set({
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
  }),

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
