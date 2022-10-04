import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { postsState } from '../store/post'

const Posts = () => {
  const { state, contents } = useRecoilValueLoadable(postsState)

  switch (state) {
    case 'hasValue':
      return (
        <div>
          <div>Posts</div>
          {contents.map((post) => {
            return <div key={post.id}>{JSON.stringify(post)}</div>
          })}
        </div>
      )
    case 'loading':
      return <div>Loading...</div>
    case 'hasError':
      return 'Err'
  }
}

export default Posts
