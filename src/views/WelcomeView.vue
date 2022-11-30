<script setup>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';

const isLoggedIn = ref(false);
</script>

<template>
  <div class="welcome container">
    <p>WelcomeView</p>
    <div v-if="!isLoggedIn">
      <SignupForm />
      <p>Already have an account? <span @click="isLoggedIn = true">Log in</span></p>
    </div>
    <div v-else>
      <LoginForm />
      <p>No account yet? <span @click="isLoggedIn = false">Sign up</span></p>
    </div>
  </div>
</template>

<style>
.welcome {
  text-align: center;
  padding: 1.25rem 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    font-style: italic;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>