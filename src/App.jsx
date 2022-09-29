import React from 'react'
import { RecoilRoot } from 'recoil'
import CounterBody from './components/CounterBody'
import Posts from './components/Posts'
import PostsWithRQ from './components/PostsWithRQ'
import PostsWrapper from './components/PostsWrapper'
import SearchBox from './components/SearchBox'

const App = () => {
  return (
    <RecoilRoot>
      <h1>Counter</h1>
      <hr />
      <CounterBody></CounterBody>
      <hr />
      <SearchBox></SearchBox>
      <PostsWrapper>
        <Posts></Posts>
        <PostsWithRQ></PostsWithRQ>
      </PostsWrapper>
      <hr />
    </RecoilRoot>
  )
}

export default App
