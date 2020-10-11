import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { State } from '@/store'
import { actions as authActions } from '@/store/auth'

// import styles from '@/styles/DefaultLayout.module.css'

const DefaultLayout: FC<{}> = ({ children }) => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  useEffect(() => {
    if (!user.ready) {
      dispatch(authActions.init())
    }
  })

  return (
    <div>
      {children}
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout
