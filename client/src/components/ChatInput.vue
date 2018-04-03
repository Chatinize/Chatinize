<template>
    <div>
        <form v-on:submit.prevent="sendMessage" action="">
            <label for="message">Message</label>
            <input v-model="messages.newMessage" type="text" name="message" id="message">
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChatInput",
  computed: mapGetters(["messages"]),
  methods: mapActions(["sendMessage"])
};
</script>

<style scoped>
#message {
  width: 45vw;
}
</style>
