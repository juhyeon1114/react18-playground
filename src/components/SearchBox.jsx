import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { textState } from '../store/post'

const SearchBox = () => {
  const [temp, setTemp] = useState('')
  const setText = useSetRecoilState(textState)

  const handleSearch = (e) => {
    e.preventDefault()
    setText(temp)
  }

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)} />
      <button type="submit">검색</button>
    </form>
  )
}

export default SearchBox
