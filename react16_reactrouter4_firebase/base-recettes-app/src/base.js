import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTDif3htXr0NrA8wEF-9EuV5BVOS1Ysr0",
  authDomain: "recettes-14afa.firebaseapp.com",
  databaseURL: "https://recettes-14afa.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
