<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="chatParent">
      <ChatBox />
      <ChatInput />
    </div>
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
#chatParent {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
