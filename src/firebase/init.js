// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6UfxbEUKCzXFdSmcAqwy9dbcfPKqc7cQ',
  authDomain: 'week7-ethan.firebaseapp.com',
  projectId: 'week7-ethan',
  storageBucket: 'week7-ethan.appspot.com',
  messagingSenderId: '259658197656',
  appId: '1:259658197656:web:84342be5e3012391957eed'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
