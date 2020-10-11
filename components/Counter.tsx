import { useDispatch, useSelector } from 'react-redux'

import { State } from '@/store'
import { actions as counterActions } from '@/store/counter'

import styles from '@/styles/Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: State) => state.counter.count)

  const { increment, decrement } = counterActions

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          {count}
        </div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </main>
    </div>
  )
}

export default Counter
