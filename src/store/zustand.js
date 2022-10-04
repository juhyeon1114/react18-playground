import { useQuery } from 'react-query'
import create from 'zustand'
import { getGames, getSports } from '../requests'

export const useGameStore = create((set, get) => ({
  games: [],
  getGames: async (p) => {
    const req = await getGames(p)
    set({ games: req.data })
  },
  filteredGames: () => {
    const games = get().games
    return games.map((v) => v.id).join(',')
  },
}))

export const useSportStore = create((set, get, store) => ({
  sports: [],
  searchTerm: '',
  setSports: (data) => {
    const state = store.getState()
    set({ ...state, sports: data.data })
    console.log('data', data)
  },
  setSearchTerm: (data) => {
    set({ searchTerm: data })
    console.log('STATE', data, store.getState())
  },
}))
