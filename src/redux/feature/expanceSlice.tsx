import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import Balance from "../../components/core/Balance";

//  here we create an interface
interface ExpanseState {
  balance: number;
  expanse: number;
  income: number;
  expanseHistory: {
    expanseName: string;
    amount: number;
  }[];
}
export interface IExpanse {
  expanseName: string;
  amount: number | string;
}
const initialState: ExpanseState = {
  balance: 0,
  expanse: 0,
  income: 0,
  expanseHistory: [],
};

export const expanseSlice = createSlice({
  name: "expanse",
  initialState,
  reducers: {
    addExpanseToHistory: (state, action: PayloadAction<IExpanse>) => {
      if (typeof action.payload.amount !== "number") {
        state.expanseHistory.push({
          expanseName: action.payload.expanseName,
          amount: parseFloat(action.payload.amount),
        });
      }
    },
    calculateBalance: (state, action: PayloadAction<void>) => {
      state.balance = state.expanseHistory.reduce(
        (acc, ex) => acc + ex.amount,
        0
      );
    },
    calculateIncome: (state, action: PayloadAction<void>) => {
      state.income = state.expanseHistory.reduce((acc, ex) => {
        if (ex.amount > 0) {
          return Math.abs(acc + ex.amount);
        }
        return acc;
      }, 0);
    },
    calculateExpanse: (state, action: PayloadAction<void>) => {
      state.expanse = state.expanseHistory.reduce((acc, ex) => {
        if (ex.amount > 0) {
          return Math.abs(acc + ex.amount);
        }
        return acc;
      }, 0);
    },
  },
});
export const {
  calculateBalance,
  calculateIncome,
  calculateExpanse,
  addExpanseToHistory
}=expanseSlice.actions

export default expanseSlice.reducer