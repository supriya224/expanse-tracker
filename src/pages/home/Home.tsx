// import Balance from "../../components/core/Balance"

import { Balance, ExpanseHistory, IncompleteExpanse, Transaction } from "../../components"

const Home = () => {
  return (
    <div className="container flex flex-col shadow-lg shadow-black text-center bg-purple-200">
      <Balance/>
      <IncompleteExpanse/>
      <ExpanseHistory/>
      <Transaction/>
    </div>
  )
}

export default Home