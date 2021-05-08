
import store from '~/store'

export default (firebase) => {

  const collection = firebase.firestore()
    .collection('messages')

  store.messages.store = (content) => {
    const message = {
      createdAt: new Date(),
      content,
      userId: store.auth.currentUser.uid,
      displayName: store.auth.currentUser.displayName,
    }

    console.log(message)
    collection.add(message)
  }

  collection
    .orderBy('createdAt', 'desc')
    .limit(50)
    .onSnapshot((documents) => {
      store.messages.messages = []
      documents.forEach((doc) => {
        const item = doc.data()
        item.id = doc.id
        store.messages.messages.push(item)
      })
    })

}