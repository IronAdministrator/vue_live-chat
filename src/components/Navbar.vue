<script setup>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/getUser";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const emit = defineEmits(["toWelcomeView"]);

const { error, logout } = useLogout();
const { user } = getUser();

const handleLogout = async () => {
  await logout();
  if (!error.value) {
    console.log("user logged out!");
    router.push({ name: "WelcomeView" });
  }
  // emit("toWelcomeView");
};
</script>

<template>
  <nav v-if="user">
    <div>
      <p>Hey there {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <button @click="handleLogout">Log out</button>
  </nav>
</template>

<style></style>
