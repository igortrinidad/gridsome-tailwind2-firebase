const body = document.getElementsByTagName('body')[0]
const started = Date.now()

const loadScriptAsync = (script) => {
  return new Promise(function(resolve) {
    const scriptElement = document.createElement('script')
    scriptElement.type = 'text/javascript'
    scriptElement.onload = function() {
      console.log(`%c Loaded ${script.name}`, 'background: #CDDC39; color: #000000');
      resolve();
    }
    scriptElement.onreadystatechange = function () {
      if (this.readyState == 'complete') scriptElement.onload()
    }
    scriptElement.src = script.src
    console.log(`%c Loading ${script.name}`, 'background: #FFEB3B; color: #000000');
    body.appendChild(scriptElement)
  })
}

const FIREBASE_VERSION = '8.5.0'

const firebaseApp = loadScriptAsync({
  rel: 'javascript',
  name: 'firebase-app.js',
  src: `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`
})

const firebaseAuth = loadScriptAsync({
  rel: 'javascript',
  name: 'firebase-auth.js',
  src: `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-auth.js`
})

const firebaseFirestore = loadScriptAsync({
  rel: 'javascript',
  name: 'firebase-firestore.js',
  src: `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-firestore.js`
})

Promise.all([firebaseApp, firebaseAuth, firebaseFirestore]).then(() => {
  console.log(`%c Firebase loaded in ${Date.now() - started}ms`, 'background: #ffcb2c; color: #f5820b')
  window.dispatchEvent(new Event('firebase-loaded'))
})