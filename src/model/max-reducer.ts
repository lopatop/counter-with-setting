import { createAction, createReducer } from "@reduxjs/toolkit"


const initialStateMax = 5
export const maxCounterValueAC = createAction<number>('max/maxCounterValue')

export const maxReducer = createReducer(initialStateMax, (builder)=>{
  builder.addCase(maxCounterValueAC, (_, action)=>action.payload)
})
