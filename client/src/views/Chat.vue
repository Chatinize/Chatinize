<template>
  <div class="chat">
    <ChatBox />
    <ChatInput />
  </div>
</template>

<script>
import ChatInput from "../components/ChatInput";
import ChatBox from "../components/ChatBox";

export default {
  name: "chat",
  components: {
    ChatInput,
    ChatBox
  }
};
</script>

<style scoped>
.chat {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
