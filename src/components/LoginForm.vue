<template>
  <form @submit.prevent="onSubmit">
    <input name="username" type="text" placeholder="Username" aria-label="username" />
    <input name="password" type="password" placeholder="Password" aria-label="password" />
    <button>Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
      default: f => f
    }
  }
};
</script>

<style scoped>
form {
  width: 12em;
  text-align: right;
}

form > * {
  margin: 1em 0 0;
}
</style>

<docs>
  ```
  <login-form :on-submit="f => f"></login-form>
  ```
</docs>
