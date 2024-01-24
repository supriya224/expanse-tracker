// import Balance from "../../components/core/Balance"

import { Balance, ExpanseHistory, IncompleteExpanse, Transaction } from "../../components"

const Home = () => {
  return (
    <div className=" container w-[30rem] h-[20rem] flex flex-col shadow-lg shadow-black text-center p-9  bg-purple-200">
      <Balance/>
      <IncompleteExpanse/>
      <ExpanseHistory/>
      <Transaction/>
    </div>
  )
}

export default Home