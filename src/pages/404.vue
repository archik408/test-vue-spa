<template>
  <div class="error">
    <main-layout>
      <h1>404 Page Not Found</h1>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  name: 'Page404',
  components: {
    MainLayout
  }
};
</script>

<style scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-green-color);
}
</style>
