import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//  here we create an interface
interface ExpanseState {
  balance: number;
  expanse: number;
  income: number;
  expanseHistory: {
    expanseName: string;
    amount: number | string;
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
    addExpanseHistory: (state, action: PayloadAction<IExpanse>) => {
      if (typeof action.payload.amount !== "number") {
        state.expanseHistory.push({ 
            expanseName: action.payload.expanseName,
            amount:parseFloat(action.payload.amount),
         });
      }
    },
  },
});
