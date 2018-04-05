<template>
  <div id="chatbox">
    <div v-for="message in messages.oldMessages" v-bind:key="message.id">

      <p v-if="message.message !== null">{{message.message}}
        <small> - {{message.timestamp}}</small>
      </p>
      <div v-if="message.image !== null"><img v-bind:src="message.image" alt="">
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
  height: 50vh;
  width: 50vw;
  border: solid;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  text-align: left;
  padding: 0 2rem;
}
ul {
  list-style: none;
}
li {
  border-top: 1px solid lightgray;
}
img {
  height: 100px;
}
</style>
