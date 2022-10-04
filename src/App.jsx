import React from 'react'
import { RecoilRoot } from 'recoil'
import CounterBody from './components/CounterBody'
import Posts from './components/Posts'
import Games from './components/Games'
import SearchBox from './components/SearchBox'
import Sports from './components/Sports'
import { useGameStore, useSportStore } from './store/zustand'
import { useGetSportsQuery } from './queries'

const App = () => {
  const games = useGameStore((state) => state.filteredGames())
  const setSearchTerm = useSportStore((state) => state.setSearchTerm)
  const searchTerm = useSportStore((state) => state.searchTerm)
  const { refetch } = useGetSportsQuery({ q: searchTerm })

  const refetchSports = async () => {
    await setSearchTerm('Foot')
    refetch()
  }

  return (
    <RecoilRoot>
      <div className="grid-2">
        <div>
          <h1>Recoil</h1>
          <hr />
          <CounterBody></CounterBody>
        </div>

        <div>
          <h1>Recoil</h1>
          <hr />
          <SearchBox></SearchBox>
          <Posts></Posts>
        </div>

        <div>
          <h1>Zustand :{games}</h1>
          <hr />
          <Games></Games>
        </div>

        <div>
          <h1>
            Zustand & Jotai & RQ <button onClick={refetchSports}>Refetch</button>
          </h1>
          <hr />
          <Sports></Sports>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
