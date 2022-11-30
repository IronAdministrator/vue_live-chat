<script setup>
import useSignup from '@/composables/useSignup';
import { ref } from 'vue';

const displayName = ref('');
const email = ref('');
const password = ref('');

const {error, signup} = useSignup()

const handleSubmit = async () => {
  console.log(displayName.value, email.value, password.value);
  await signup(email.value, password.value, displayName.value)
  console.log('user signed up');
};

</script>

<template>
  <div class="signup-form">
    <h2>Sign up</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div v-if="error" class="error">{{error}}</div>
      <button>Sign Up</button>
    </form>
  </div>
  
</template>

<style>
.error {
  color: lightcoral;
  font-weight: bold;
}
</style>