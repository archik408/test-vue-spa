<template>
  <div class="container">
    <h1>Login</h1>
    <login-form :on-submit="go"></login-form>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  methods: {
    go() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
