import { useSetAtom } from 'jotai'
import { useMutation, useQueries, useQuery, useQueryClient } from 'react-query'
import { createSport, getGames, getPosts, getSports } from '../requests'
import { sportsAtom } from '../store/jotai'
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
export const useGetSportsQuery = (p) => {
  const sportStore = useSportStore()
  const setSports = useSetAtom(sportsAtom)
  return useQuery('get-sports', () => getSports(p), {
    onSuccess: (data) => {
      // Jotai
      setSports(data.data)
      // Zustand
      sportStore.setSports(data)
    },
  })
}

export const useCreateSport = (data) => {
  const client = useQueryClient()
  return useMutation(createSport, {
    onSuccess: (data) => {
      /**
       * .invalidateQueries()
       * -> get-sports 쿼리를 stale한 상태로 만듬.
       * -> 즉, 자동적으로 해당 데이터가 보여지는 컴포넌트가 마운트 될 때, query가 다시 실행됨
       */
      // client.invalidateQueries(['get-sports'])

      /**
       * Mutation실행 후, get-sports의 query데이터를 새로 실행해줌
       */
      client.setQueryData('get-sports', (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        }
      })
    },
    onMutate: (newData) => {
      console.log('Mutation이 실행될 때, 실행됨', newData)
      // client.cancelQueries('get-sports')
    },
    onError: (_error, _data, context) => {
      console.log('Query가 에러났을 때')
    },
    onSettled: () => {
      console.log('Query의 성공 여부에 상관없이 query의 실행이 끝난 후 항상 실행됨')
    },
  })
}
