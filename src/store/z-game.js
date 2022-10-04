import create from 'zustand'
import { getGames } from '../requests'

export const useGameStore = create((set, get) => ({
  games: [],
  getGames: async (p) => {
    const req = await getGames(p)
    console.log('zustand', req)
    set({ games: req.data })
  },
  filteredGames: () => {
    const games = get().games
    return games.map((v) => v.name)
  },
}))
