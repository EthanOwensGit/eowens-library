// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const firebaseApp = initializeApp(firebaseConfig)
