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
#message {
  width: 90vw;
}

form {
  width: 100%;
}

input {
  width: 95%;
}

button {
  width: 5%;
  background-color: #42b983;
}

input,
button {
  height: 2rem;
}
</style>
