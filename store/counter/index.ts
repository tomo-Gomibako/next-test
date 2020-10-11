import { combineReducers, createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'counter/count',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const reducer = combineReducers({
  count: slice.reducer
})

export const actions = slice.actions
export default reducer
