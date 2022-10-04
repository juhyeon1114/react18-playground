import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../store/post'

const SearchBox = () => {
  const [temp, setTemp] = useState('')
  const [text, setText] = useRecoilState(textState)

  const handleChange = (e) => {
    const v = e.target.value
    setTemp(v)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(temp)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={temp} onChange={handleChange} />
      <button type="submit">검색</button>
    </form>
  )
}

export default SearchBox
