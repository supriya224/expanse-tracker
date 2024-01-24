import { useState } from "react";
import { useAppDispatch } from "../../hooks/Hooks";
import { IExpanse, addExpanseToHistory } from "../../redux/feature/expanceSlice";

const Transaction = () => {
  const dispatch = useAppDispatch();

  const [expanse, setExpanse] = useState<IExpanse>({
    expanseName: "",
    amount: "",
  });
  const onChange = <K extends keyof IExpanse>(key: K, value: IExpanse[K]) => {
    setExpanse({ ...expanse, [key]: value });
    // console.log(setExpanse())
  };
  // console.log(onChange())
  return (
    <div>
      <h3 className=" items-center border-black border-b text-3xl">
        Add New transaction
      </h3>
      <form className="flex-col">
        <div className="mt-2">
          <label>Text:</label>
          <input
            type="text"
            name="expanseName"
            placeholder="enter text"
            className="p-2"
            onChange={(e) =>
              onChange(e.target.name as keyof IExpanse, e.target.value)
            }
          />
        </div>

        <br />
        <div className="mt-2">
          <label>Amount:</label>
          <input  name="amount" type="text" placeholder="enter amount" className="p-2" />
        </div>
      </form>

      <button className="bg-red-800 p-2 mt-3"
        onClick={() => {
          if (
            typeof expanse.amount === "string" &&
            !isNaN(parseFloat(expanse.amount))
          ) {
            dispatch(addExpanseToHistory(expanse));
            
          }
          // console.log("jello")
        }}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default Transaction;
