import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = 0

export const startCounterValueAC = createAction<number>('start/ startCounterValue')

export const startReducer = createReducer(initialState,(builder)=>{
  builder.addCase(startCounterValueAC, (_, action)=>action.payload )
})