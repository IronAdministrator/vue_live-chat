<script setup>
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import NewChatForm from "@/components/NewChatForm.vue";

const route = useRoute();
const router = useRouter();

const { user } = getUser();

//! all redirect on log out experiment functions (they all work!). Moved redirect after logout to navbar component
// watch(
//   () => user.value,
//   (newValue, oldValue) => {
//     console.log("new:", newValue, "old:", oldValue);
//     if (newValue !== oldValue) {
//       router.push({ name: "WelcomeView" });
//     }
//   }
// );

// watch(user, () => {
//   console.log("user from watch func: ", user);
//   if (!user.value) {
//     router.push({ name: "WelcomeView" });
//   }
// });

// const redirectToWelcomeView = () => {
//   if (!user.value) {
//     router.push({ name: "WelcomeView" });
//   }
// };
//! all redirect on log out experiment functions (they all work!). Moved redirect after logout to navbar component
</script>

<template>
  <div class="container">
    <Navbar @toWelcomeView="redirectToWelcomeView" />
    <NewChatForm />
  </div>
</template>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
