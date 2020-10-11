import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit'

export interface ToDoItem {
  id?: string
  text: string
  checked: boolean
}

const idGenerator = () => ('0000000' + Math.floor(Math.random() * 2821109907456).toString(36)).slice(-8)

const addItem = (todos: ToDoItem[], newItem: ToDoItem) => {
  if (!newItem.id) {
    while (true) {
      const id = idGenerator()
      if (!todos.filter((item) => item.id === id).length) {
        newItem.id = id
        break
      }
    }
  }
  return [...todos, newItem]
}

const initialState: ToDoItem[] = [{
  id: '1',
  text: 'hoge',
  checked: false
}, {
  id: '2',
  text: 'fuga',
  checked: false
}, {
  id: '3',
  text: 'hoga',
  checked: false
}, {
  id: '4',
  text: 'fuge',
  checked: false
}]
const slice = createSlice({
  name: 'todo/todo',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ToDoItem[]>) => {
      let ret: ToDoItem[] = []
      for (const item of action.payload) {
        ret = addItem(state, item)
      }
      return ret
    },
    add: (state, action: PayloadAction<ToDoItem>) => addItem(state, action.payload),
    delete: (state, action: PayloadAction<string>) => state.filter((item) => item.id !== action.payload),
    check: (state, action: PayloadAction<{
      id: string,
      checked: boolean
    }>) => state.map((item) => item.id === action.payload.id ? {
      ...item,
      checked: action.payload.checked
    } : item)
  }
})

const reducer = combineReducers({
  list: slice.reducer
})

export const actions = slice.actions
export default reducer
