import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export type State = ReturnType<typeof store.getState>

export default store
