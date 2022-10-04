import { useAtomValue } from 'jotai'
import React, { useEffect, useState } from 'react'
import { useCreateSport, useGetSportsQuery } from '../queries'
import { sportsAtom } from '../store/jotai'
import { useSportStore } from '../store/zustand'

const Sports = () => {
  const [name, setname] = useState('')
  const jSports = useAtomValue(sportsAtom)
  const sports = useSportStore((state) => state.sports)
  const { isLoading, isError, isFetching } = useGetSportsQuery()
  const { mutate: createSport, isLoading: loading } = useCreateSport()

  const handleChange = (e) => {
    setname(e.target.value)
  }

  const handleKeyUp = async (e) => {
    if (e.code !== 'Enter' || loading) return
    setname('')
    createSport({ name })
  }

  if (isLoading || isFetching) return <div>Loading...</div>
  if (isError) return <div>Error...</div>
  if (loading) return <div>Creating...</div>

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleChange} onKeyUp={handleKeyUp} />
      </div>
      <div>
        {jSports.map((sport) => (
          <div key={sport.id}>
            {sport.id}: {sport.name}
          </div>
        ))}
      </div>
      <br />
      <div>
        {sports.map((sport) => (
          <div key={sport.id}>
            {sport.id}: {sport.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default Sports
