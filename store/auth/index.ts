import { combineReducers, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import firebase, { getAuth, getDB } from '@/utils/firebase'

export interface AuthUser {
  uid: string
  displayName?: string
  photoURL?: string
  email?: string
}

export interface State {
  user?: AuthUser
  ready: boolean
}

interface AuthState {
  user?: firebase.User
}

const waitForAuthToChange = () => {
  return new Promise<AuthState>((resolve, reject) => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      resolve({
        user: user ?? undefined
      })
      unsubscribe()
    }, (err) => {
      reject(err)
      unsubscribe()
    })
  })
}

const createUserIfNotExists = async (state: State) => {
  if (state.ready) {
    return
  }

  const authState = await waitForAuthToChange()
  const fbUser = authState.user
  if (!fbUser) {
    return {
      authState
    }
  }

  const uid = fbUser.uid
  const name = fbUser.displayName ?? undefined
  const photoURL = fbUser.photoURL ?? undefined
  const email = fbUser.email ?? undefined

  const db = getDB()
  const userRef = db.collection('users').doc(uid)
  const user = await userRef.get()
  if (!user.exists) {
    await userRef.set({
      name,
      iconURL: photoURL
    })
  }
  return {
    authState,
    authUser: {
      uid,
      name,
      photoURL,
      email
    }
  }
}

const init = createAsyncThunk<State, void, {
  state: State
}>(
  'user/init',
  async (_, { getState }) => {
    const state = getState()
    console.log('auth store initializing!')
    const result = await createUserIfNotExists(state)
    if (!result) {
      return {
        ready: true
      }
    }
    return {
      user: result.authUser,
      ready: true
    }
  }
)

const initialState: State = {
  ready: false
}
const slice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.fulfilled, (_, action) => {
      console.log('auth store initialized!')
      return {
        ...action.payload
      }
    })
  }
})

const reducer = combineReducers({
  user: slice.reducer
})

export const actions = {
  ...slice.actions,
  init
}
export default reducer
