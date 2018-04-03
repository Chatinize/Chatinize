import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: { newMessage: "", oldMessages: ["Hey"] }
  },
  mutations: {
    updateMessages(state) {
      state.messages.oldMessages.push(state.messages.newMessage);
      state.messages.newMessage = "";
    }
  },
  actions: {
    sendMessage: ({ commit }) => commit("updateMessages")
  },
  getters: {
    messages: state => state.messages
  }
});
