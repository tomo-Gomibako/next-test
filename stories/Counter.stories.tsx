import { Provider } from 'react-redux'
import Counter from '@/components/Counter'
import store from '@/store'

export default { title: 'Counter' }

export const Default = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
)
