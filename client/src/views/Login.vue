<template>
  <div class="home">
    <img src="../assets/logo.png">
    <LoginForm/>
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
