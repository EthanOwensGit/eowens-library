<template>
  <div class="logout-container">
    <div class="row">
      <div class="col-md-6 offset-md-3 text-center">
        <h1>Are you sure you want to logout?</h1>
        <button @click="confirmLogout" class="btn btn-danger mt-4">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '../router'

const router = useRouter()
const { logout } = useAuth()

const confirmLogout = () => {
  logout()
  router.push('/login')
}
</script>

<style scoped>
.logout-container {
  margin-top: 50px;
  text-align: center;
}
</style>
