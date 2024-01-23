import React from 'react'
import { useAppSelector } from '../../hooks/Hooks'

const Balance = () => {
  const balance= useAppSelector((state)=>state.expanse.balance)
  return (
    <div>your balance:<span>${balance}</span></div>
  )
}

export default Balance