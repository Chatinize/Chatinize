<template>
  <div id="message">
    <form v-on:submit.prevent='$store.dispatch("sendMessage", messages)' action="">
      <input v-model="messages.newMessage" type="text" name="message" placeholder="Message">
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChatInput",
  computed: mapGetters(["messages"])
};
</script>

<style scoped>
input {
  width: 75vw;
}

button {
  width: 15vw;
  background-color: #42b983;
}

input,
button {
  height: 2rem;
}
</style>
