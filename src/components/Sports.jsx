import React, { Suspense, useEffect } from 'react'
import { useGetSportsQuery } from '../queries'
import { useSportStore } from '../store/zustand'

const Sports = () => {
  const sports = useSportStore((state) => state.sports)
  const { isLoading, isError, refetch } = useGetSportsQuery()

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  return (
    <div>
      {sports.map((sport) => (
        <div key={sport.id}>{JSON.stringify(sport)}</div>
      ))}
    </div>
  )
}

export default Sports
