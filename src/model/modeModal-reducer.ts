import { createAction, createReducer } from "@reduxjs/toolkit"

const initialStateModeModal = false

export const createModeModalAC = createAction<boolean>('/modeModel/createModeModal')

export const modeModalReducer = createReducer(initialStateModeModal, (builder)=>{
  builder.addCase(createModeModalAC, (_, action)=>action.payload)
})