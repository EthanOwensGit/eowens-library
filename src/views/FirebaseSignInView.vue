<template>
  <div class="block center">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p><button @click="signin">Sign in via Firebase</button></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Firebase Sign In Successful.')
      router.push('/')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log(error.code)
    })
}
</script>

<style>
.block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh; /* Makes the div take up the full height of the viewport */
}

.center input,
.center button {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
}
</style>
