import styles from '../styles/ToDoList.module.css'

export default function ToDoList () {
  const todos = [
    'hoge',
    'fuga',
    'hoga',
    'fuge'
  ]
  return (
    <div className={styles.container}>
      {todos.map((todo, i) => (
        <div key={i}>
          <label htmlFor={`${i}`}>
            <input type='checkbox' name={`${i}`} />
            {todo}
          </label>
        </div>
      ))}
    </div>
  )
}
