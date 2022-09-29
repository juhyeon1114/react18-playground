import { useQueries, useQuery } from 'react-query'
import { getGames, getPosts } from '../requests'

export const useGetPostsQuery = (p) => useQuery('posts', (p) => getPosts(p))
export const useGetGamesQuery = () => useQuery('games', getGames)
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
