import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'
import todoReducer from './todo'

const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    todo: todoReducer
  }
})

export type State = ReturnType<typeof store.getState>

export default store
