<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  console.log(email.value, password.value);
};

</script>

<template>
  <div class="login-form">
    <h2>Log in</h2>
    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
    </form>
  </div>
</template>

<style>

</style>