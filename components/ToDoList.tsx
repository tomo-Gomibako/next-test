import { useDispatch, useSelector } from 'react-redux'

import { State } from '@/store'
import { actions as todoActions } from '@/store/todo'

import classNames from 'classnames'
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
            <span className={classNames({
              [styles.done]: todo.checked
            })}
            >
              {todo.text}
            </span>
          </label>
        </div>
      ))}
    </div>
  )
}

export default ToDoList
