import { useQuery } from 'react-query'
import { getPosts } from '../requests'

export const usePostsQuery = () => useQuery('posts', getPosts)
