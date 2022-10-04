import { useQueries, useQuery } from 'react-query'
import { getGames, getPosts, getSports } from '../requests'
import { useSportStore } from '../store/zustand'

export const useGetPostsQuery = (p) => useQuery('posts', () => getPosts(p))
export const useGetGamesQuery = (p) =>
  useQuery('games', () => getGames(p), {
    // select: (data) => data.data.map((game) => game.name),
  })
export const useGetAllData = () => {
  return useQueries([
    { queryKey: 'posts', queryFn: getPosts },
    { queryKey: 'games', queryFn: getGames },
  ])
}
export const useTestPolling = () =>
  useQuery('test-polling', () => new Date(), {
    refetchInterval: 500,
  })
export const useGetSportsQuery = (p) =>
  useQuery(
    'sports',
    () => {
      return getSports(p)
    },
    { enabled: false, onSuccess: useSportStore().setSports },
  )
