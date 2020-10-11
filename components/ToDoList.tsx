import { useDispatch, useSelector } from 'react-redux'

import { State } from '@/store'
import { actions as todoActions } from '@/store/todo'

import styles from '@/styles/ToDoList.module.css'

const ToDoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: State) => state.todo.list)

  const { check } = todoActions

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label htmlFor={todo.id}>
            <input
              checked={todo.checked}
              name={todo.id}
              onChange={() => dispatch(check({
                id: todo.id ?? '_',
                checked: !todo.checked
              }))}
              type='checkbox'
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  )
}

export default ToDoList
