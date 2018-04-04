import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: { newMessage: "", oldMessages: [] }
  },
  mutations: {
    updateMessages(state) {
      state.messages.oldMessages.push(state.messages.newMessage);
      state.messages.newMessage = "";
    },
    setOldMessages(state, response) {
      state.messages.oldMessages = response;
    }
  },
  actions: {
    sendMessage: ({ commit }, message) => {
      fetch("http://localhost:3000/messages", {
        method: "post",
        body: JSON.stringify({
          message: message,
          timestamp: new Date().toISOString(),
          users_id: 2
        }),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(response => commit("setOldMessages", response.data))
        .catch(err => console.log(err));
    },
    getMessages: ({ commit }) => {
      fetch("http://localhost:3000/messages")
        .then(response => response.json())
        .then(response => commit("setOldMessages", response.data))
        .catch(err => console.log(err));
    }
  },
  getters: {
    messages: state => state.messages
  }
});
