import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { maxReducer } from "../model/max-reducer.ts"
import { startReducer } from "../model/start-reducer.ts"
import { counterReducer } from "../model/counter-reducer.ts"
import { modeModalReducer } from "../model/modeModal-reducer.ts"

const rootReducer = combineReducers({
  max: maxReducer,
  start: startReducer,
  counter: counterReducer,
  modeModal: modeModalReducer,
})


export const store = configureStore({
  reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch