<template>
  <div class="access-denied-container">
    <h2 class="text-center">Access Denied</h2>
    <p class="text-center">You do not have permission to view this page.</p>
    <div class="text-center">
      <router-link to="/login" class="btn btn-primary">Go to Login</router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.access-denied-container {
  margin-top: 50px;
}
</style>
