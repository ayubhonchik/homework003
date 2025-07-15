import { create } from 'zustand'

type Store = {
  token: string | null
  setToken: (token: string) => void
}

export const useStore = create<Store>()((set) => ({
  token: null,
  setToken: (token) => set({ token })
}))
