<script setup>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";

const emit = defineEmits(["toChat"]);

const email = ref("");
const password = ref("");

const { error, login } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  // !error.value ? console.log('user logged in') : null
  if (!error.value) {
    console.log("user logged in");
    emit("toChat");
    // router.push({name: "ChatroomView"})
  }
};
</script>

<template>
  <div class="login-form">
    <h2>Log in</h2>
    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email" />
      <input type="password" required placeholder="password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button>Log in</button>
    </form>
  </div>
</template>

<style>

</style>
