<script setup>
import useLogout from "@/composables/useLogout";

const { error, logout } = useLogout();

const handleLogout = async () => {
  await logout();
  if (!error.value) {
    console.log("user logged out!");
  }
};
</script>

<template>
  <nav>
    <div>
      <p>Hey there... Name</p>
      <p class="email">Currently logged in as ...Email</p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <button @click="handleLogout">Log out</button>
  </nav>
</template>

<style></style>
