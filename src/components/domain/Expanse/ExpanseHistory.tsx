import { useAppSelector } from "../../../hooks/Hooks";

const ExpanseHistory = () => {
  const expanses = useAppSelector((state) => state.expanse.expanseHistory);
  // console.log(expanses)
  return (
    <div className="bg-blue-400 w-48">
      {expanses.map((ex, i) =>( 
      <div key={i} className={ex.amount <0 ?`bg-blue-900`: `bg-pink-600`}>
        <h2>{ex.expanseName}</h2>
        <h3>{ex.amount}</h3>
        </div>
        ))}
{expanses.length===0 && <div className="p-3 my-3">No transaction here</div>}
    </div>
  );
};

export default ExpanseHistory;
