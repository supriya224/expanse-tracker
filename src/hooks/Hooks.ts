import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "../redux/store";
// import { RootState } from "@reduxjs/toolkit/query";

export const useAppDispatch:()=>AppDispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector