<template>
  <div id="chatbox">
    <ul>
      <li v-for="message in messages.oldMessages" v-bind:key="message.id">{{message.message}}</li>
    </ul>
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
}
ul {
  list-style: none;
}
li {
  border-top: 1px solid lightgray;
}
</style>
