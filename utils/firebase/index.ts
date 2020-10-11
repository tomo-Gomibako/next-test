import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBZj7K-61GQwbM8WIOkyUyxRxR16hHEtf4',
    authDomain: 'test-5183e.firebaseapp.com',
    databaseURL: 'https://test-5183e.firebaseio.com',
    projectId: 'test-5183e',
    storageBucket: 'test-5183e.appspot.com',
    messagingSenderId: '103937709281',
    appId: '1:103937709281:web:b79335933f8391cb36d3a0',
    measurementId: 'G-KKL19TT422'
  })
  firebase.analytics()
}

export const getApp = () => firebase
export const getDB = () => firebase.firestore()
export const getAuth = () => firebase.auth()
export const logout = async () => {
  await firebase.auth().signOut()
}
export const loginGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
  return await firebase.auth().getRedirectResult()
}
export const loginTwitter = async () => {
  const provider = new firebase.auth.TwitterAuthProvider()
  firebase.auth().signInWithRedirect(provider)
  return await firebase.auth().getRedirectResult()
}

export default firebase
