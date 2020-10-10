import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import todoReducer from './todo'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  }
})

export type State = ReturnType<typeof store.getState>

export default store
