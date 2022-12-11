<script setup>
import { onMounted } from "vue";
import fetchService from "@/composables/fetchService";

const {
  fetchedRealtimeData: messages,
  fetchRealtimeData,
  errorFetchedData,
} = fetchService();

onMounted(() => {
  fetchRealtimeData("messages");
});
</script>

<template>
  <div class="chat-window">
    <div v-if="errorFetchedData" class="error">{{ errorFetchedData }}</div>
    <div v-if="messages" class="messages">
      <div v-for="message in messages" :key="message.id" class="single">
        <span class="created-at">{{ message.createdAt.toDate() }}</span>
        <span class="name">{{ message.name }}</span
        ><span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
