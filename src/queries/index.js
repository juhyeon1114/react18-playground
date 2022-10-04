import { useQueries, useQuery } from 'react-query'
import { getGames, getPosts } from '../requests'

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
