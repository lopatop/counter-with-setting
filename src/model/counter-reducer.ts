import { createAction, createReducer } from "@reduxjs/toolkit"

const initialStateCounter=0

export const incrementCounterAC = createAction('counter/incrementCounter')

export const resetCounterAC= createAction<number>('counter/resetCounter')

export const counterReducer = createReducer(initialStateCounter, (builder)=>{
  builder.addCase(incrementCounterAC, state => state+1)
  builder.addCase(resetCounterAC, (_,action) => action.payload)
});