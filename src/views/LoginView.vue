<template>
  <div class="login-container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" v-model="username" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" v-model="password" class="form-control" required />
          </div>
          <div v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const { loginAuth, loginNoAuth } = useAuth()

const handleLogin = () => {
  const hardcodedUsername = 'authLibraryUser'
  const hardcodedPassword = 'Password123!'

  if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
    loginAuth()
    router.push('/')
  } else {
    loginNoAuth()
    router.push('/')
  }
}
</script>

<style scoped>
.login-container {
  margin-top: 50px;
}
</style>
