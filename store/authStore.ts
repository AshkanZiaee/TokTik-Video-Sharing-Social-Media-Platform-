import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

import { URL } from "../utils";

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const response = await axios.get(`${URL}/api/users`);

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(
  persist(authStore, {
    name: "auth",
  })
);

export default useAuthStore;
