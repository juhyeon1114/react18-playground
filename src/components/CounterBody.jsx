import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countState, percent } from '../store/count'

const CounterBody = () => {
  const [count, setCount] = useRecoilState(countState)
  const pr = useRecoilValue(percent)

  const handlePlus = () => {
    count < 100 && setCount(count + 1)
  }

  const handleMinus = () => {
    count > 0 && setCount(count - 1)
  }

  return (
    <div>
      <div>{count}</div>
      <div>{pr}</div>
      <button onClick={() => handlePlus()}>+</button>
      <button onClick={() => handleMinus()}>-</button>
    </div>
  )
}

export default CounterBody
