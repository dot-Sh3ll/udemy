import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

// les logs firebase
// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDYifF3aY7bKtustZcGJgbYX17aEiVtcGA',
  authDomain: 'chatbox-a4555.firebaseapp.com',
  databaseURL: 'https://chatbox-a4555.firebaseio.com',
  projectId: 'chatbox-a4555',
  storageBucket: 'chatbox-a4555.appspot.com',
  messagingSenderId: '873328164202',
  appId: '1:873328164202:web:3a3985aaeb2be8a6fff913',
  measurementId: 'G-6T2SLLBG2M'
})


// sorte de component de Rebase
const base = Rebase.createClass(firebase.database())

// initialisation de la base de donnée
export { firebaseApp }
// pour gérer la base de donnée (comme quand on appelle une fonction)
export default base
