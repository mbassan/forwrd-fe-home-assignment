import { create } from 'zustand';

export const useUsersStore = create((set) => ({
  usersData: [],
  setUsersData: (newUsersData) => set(() => ({ usersData: newUsersData })),
}));
