import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './main.css'

const root = document.getElementById('root')

/**
 * 옵션은 글로벌로 설정가능할 뿐만 아니라 각 Query별로도 설정이 가능하다
 *
 * useErrorBoundary: Fallback UI 설정에 대한 옵션
 * staleTime: Query가 실행된 이후로 데이터가 'stale'한 상태로 변하기까지의 시간. 데이터가 stale한 상태가 되면 refetch됨
 * cacheTime: Query가 실행된 이후로 데이터가 캐시에 남아있는 시간
 * refetchinterval: 설정된 시간의 간격으로 polling.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      staleTime: Infinity,
      // cacheTime: Infinity,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
})

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <App />
  </QueryClientProvider>,
)
