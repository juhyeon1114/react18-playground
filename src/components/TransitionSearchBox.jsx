import React, { useState, useTransition } from 'react'

const Result = ({ query }) => {
  console.log(query)

  return <div>Result : {query}</div>
}

const TransitionSearchBox = () => {
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value)
    startTransition(() => {
      setQuery(e.target.value)
    })
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />

      {isPending ? <div>loading...</div> : <div>None</div>}
      <Result query={query}></Result>
    </>
  )
}

export default TransitionSearchBox
