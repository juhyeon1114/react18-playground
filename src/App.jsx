import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import CounterBody from './components/CounterBody'
import Posts from './components/Posts'
import Games from './components/Games'
import SearchBox from './components/SearchBox'
import { useGameStore } from './store/z-game'

const App = () => {
  const games = useGameStore((state) => state.filteredGames())

  return (
    <RecoilRoot>
      <h1>Recoil</h1>
      <hr />
      <CounterBody></CounterBody>

      <br />

      <h1>Recoil</h1>
      <hr />
      <SearchBox></SearchBox>
      <Posts></Posts>

      <br></br>

      <h1>Zustand :{JSON.stringify(games)}</h1>
      <hr />
      <Games></Games>

      <br />

      {/* <h1>Transition</h1>
      <hr />
      <TransitionSearchBox></TransitionSearchBox> */}
    </RecoilRoot>
  )
}

export default App
