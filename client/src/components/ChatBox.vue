<template>
  <div id="chatbox">
    <div v-for="message in messages.oldMessages" v-bind:key="message.id" class="message">
      <p class="usersId">{{message.users_id}}</p>
      <p v-if="message.message !== null">{{message.message}}
        <small> - {{message.timestamp}}</small>
      </p>
      <div v-if="message.image !== null"><img v-bind:src="message.image">
        <small> - {{message.timestamp}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChatBox",
  computed: mapGetters(["messages"]),
  methods: {
    ...mapActions(["getMessages"])
  },
  mounted() {
    this.getMessages();
  }
};
</script>

<style scoped>
#chatbox {
  height: 90%;
  width: 90vw;
  border: solid;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  text-align: left;
  padding: 0 2rem;
}
.message {
  margin: 0.5rem;
}
img {
  height: 100px;
}

small,
.usersId {
  font-size: 12px;
  color: lightgray;
}
</style>
