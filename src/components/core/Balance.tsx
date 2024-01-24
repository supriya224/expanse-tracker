
import { useAppSelector } from '../../hooks/Hooks'

const Balance = () => {
  const balance= useAppSelector((state)=>state.expanse.balance)
  return (
    <div className=' font-bold'>your balance:<span className='text-gray-500'>${balance}</span></div>
  )
}

export default Balance