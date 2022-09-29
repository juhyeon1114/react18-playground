import React from 'react'
import { usePostsQuery } from '../queries'

const PostsWithRQ = () => {
  const { status, data, error, isLoading, isError, isFetching, isSuccess } = usePostsQuery()

  const posts = () => {
    if (isLoading) return <div>Loading...</div>
    else if (isError) return 'Err'
    else {
      const posts = data?.data || []
      return posts.map((post) => {
        return <div key={post.id}>{JSON.stringify(post)}</div>
      })
    }
  }

  return (
    <div>
      <div>Posts with RQ: {status}</div>
      {posts()}
    </div>
  )
}

export default PostsWithRQ
