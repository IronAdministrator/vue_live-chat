<script setup>
import { ref, onMounted, onUpdated, computed, nextTick } from "vue";
import fetchService from "@/composables/fetchService";
import { formatDistanceToNow } from "date-fns";

const {
  fetchedRealtimeData: messages,
  fetchRealtimeData,
  errorFetchedData,
} = fetchService();

const messagesContainer = ref(null);

onMounted(() => {
  fetchRealtimeData("messages");
});

onUpdated(async () => {
  await nextTick();
  scrollToBottom();
});

const formattedMessages = computed(() => {
  if (messages.value) {
    return messages.value.map((message) => {
      let time = formatDistanceToNow(message.createdAt.toDate());
      return { ...message, createdAt: time };
    });
  }
});

const scrollToBottom = () => {
  messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
};
</script>

<template>
  <div class="chat-window">
    <div v-if="errorFetchedData" class="error">{{ errorFetchedData }}</div>
    <div v-if="messages" class="messages-container" ref="messagesContainer">
      <div v-for="message in formattedMessages" :key="message.id" class="single">
        <span class="created-at">{{ message.createdAt }}</span>
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
.messages-container {
  max-height: 400px;
  overflow: auto;
}
</style>
