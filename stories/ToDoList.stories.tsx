import { Provider } from 'react-redux'
import ToDoList from '@/components/ToDoList'
import store from '@/store'

export default { title: 'ToDoList' }

export const Default = () => (
  <Provider store={store}>
    <ToDoList />
  </Provider>
)
