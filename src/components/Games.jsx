import React, { memo, useCallback, useEffect, useState } from 'react'
import { useTestPolling } from '../queries'
import { useGameStore } from '../store/z-game'
import { debounce } from 'lodash'

const MillisecondText = () => {
  const polling = useTestPolling()

  if (polling.isSuccess) return <span>{JSON.stringify(polling.data.valueOf())}</span>
  else return <span>none</span>
}

const Games = memo(() => {
  const [term, setTerm] = useState('')
  const games = useGameStore((state) => state.games)
  const getGames = useGameStore((state) => state.getGames)

  useEffect(() => {
    getGames()
  }, [])

  const handleChange = async (e) => {
    const v = e.target.value
    setTerm(v)
    search(e.target.value)
  }

  const search = useCallback(
    debounce((q) => {
      getGames({ q })
    }, 300),
    [],
  )

  return (
    <div>
      <div>
        Posts with RQ <MillisecondText />
      </div>
      <input type="text" value={term} onChange={handleChange} />
      {games.map((game) => (
        <div key={game.id}>{JSON.stringify(game)}</div>
      ))}
    </div>
  )
})

export default Games
