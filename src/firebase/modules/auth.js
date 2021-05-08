import store from '~/store'

export default (firebase) => {
  // When a user logs in or out, save that in the store
  firebase.auth().onAuthStateChanged((user) => {
    store.auth.currentUser = user
  })
}