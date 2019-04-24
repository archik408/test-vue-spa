<template>
  <div class="container">
    <nav>
      <img class="logo" src="../assets/logo.png" aria-hidden="true" />
      <ul>
        <li>
          <v-link href="/">Home</v-link>
        </li>
        <li>
          <v-link href="/authors">Authors</v-link>
        </li>
        <li>
          <v-link href="/books">Books</v-link>
        </li>
        <li>
          <v-link href="/login">Logout</v-link>
        </li>
      </ul>
    </nav>
    <div role="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue';
export default {
  name: 'MainLayout',
  components: {
    VLink
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  width: 60em;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1em 2em;
  background: var(--gray-color);
}

.container ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
}

.container li {
  margin: 0 1em;
}

.container nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.container .logo {
  height: 2em;
}
</style>
