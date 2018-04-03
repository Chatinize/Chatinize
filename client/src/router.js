import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Chat from "./views/Chat.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    }
  ]
});
