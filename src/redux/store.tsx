import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

type CounterState = {
    value: number
}

const initialStateCounter1: CounterState = {
    value: 0,
}

const counterSlice1 = createSlice({
    name:'counter1',
    initialState: initialStateCounter1,
    reducers:{
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state,action:PayloadAction<number>) => {
            state.value = state.value + action.payload;
        }
    }
})

export const {
    increment,
    decrement,
    incrementByAmount
} =counterSlice1.actions


export const store = configureStore({
    reducer:{
        counter1SliceState:counterSlice1.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type ROOTState = ReturnType<typeof store.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<ROOTState>()