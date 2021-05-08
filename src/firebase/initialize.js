
import auth from './modules/auth'
import messages from './modules/messages'

const initializeFirebase = () => {

  var config = {
    apiKey: process.env.GRIDSOME_FIREBASE_API_KEY,
    authDomain: process.env.GRIDSOME_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GRIDSOME_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GRIDSOME_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GRIDSOME_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GRIDSOME_FIREBASE_APP_ID,
    measurementId: process.env.GRIDSOME_FIREBASE_MEASUREMENT_ID
  }

  firebase.initializeApp(config)

  auth(firebase)
  messages(firebase)

}

if (typeof window !== 'undefined') {
  if (typeof firebase !== 'undefined') initializeFirebase()
  else {
    window.addEventListener('firebase-loaded', initializeFirebase)
    console.log('%c Awaiting firebase!', 'background: #f5820b; color: #ffcb2c');
  }
}
