<template>
    <div id="chatbox">
        <ul>
            <li v-for="message in messages.oldMessages">{{message}}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ChatBox",
  computed: mapGetters(["messages"]),
  methods: {
    ...mapActions([])
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
</style>
