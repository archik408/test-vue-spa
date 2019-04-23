<template>
  <div class="loading" role="progressbar" aria-live="assertive">
    <p>Loading</p>
    <div aria-hidden="true" class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vmax;
  width: 100vmax;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--pickled-bluewood-color);
  opacity: 0.7;
  color: var(--light-green-color);
  font-size: 1.25em;
  z-index: 10;
}
.spinner {
  height: 2em;
  width: 2em;
  border-radius: 50%;
  background: var(--pickled-bluewood-color);
  border: 0.25em solid transparent;
  border-top-color: var(--shamrock-green-color);
  border-bottom-color: var(--dark-green-color);
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.7;
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
  }
}
</style>
