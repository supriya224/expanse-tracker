import { configureStore } from "@reduxjs/toolkit";
import expanseReducer from './feature/expanceSlice'

export const store= configureStore({
    reducer:{
        expanse:expanseReducer
    },
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch