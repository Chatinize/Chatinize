<template>
  <div class="home">
    <img src="../assets/logo.png">
    <LoginForm/>
    <a href="http://localhost:3000/auth/github">Sign In With Github</a>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>
