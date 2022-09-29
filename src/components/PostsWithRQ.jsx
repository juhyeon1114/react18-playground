import React from 'react'
import { useGetPostsQuery, useTestPolling } from '../queries'

const MillisecondText = () => {
  const polling = useTestPolling()

  if (polling.isSuccess) return <span>{JSON.stringify(polling.data.valueOf())}</span>
  else return <span>none</span>
}

const Posts = () => {
  const { status, data, error, isLoading, isError, isFetching, isSuccess } = useGetPostsQuery()

  if (isLoading) return <div>Loading...</div>
  else if (isError) return 'Err'
  else {
    const posts = data?.data || []
    return posts.map((post) => {
      return <div key={post.id}>{JSON.stringify(post)}</div>
    })
  }
}

const PostsWithRQ = () => {
  return (
    <div>
      Posts with RQ <MillisecondText />
      <Posts></Posts>
    </div>
  )
}

export default PostsWithRQ
