<template>
  <a :href="href" :class="{ active: isActive }" @click.prevent="go">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'VLink',
  props: {
    href: {
      type: String,
      default: '#',
      required: true
    }
  },
  computed: {
    isActive() {
      return this.$router && this.href === this.$router.currentRoute.path;
    }
  },
  methods: {
    go() {
      this.$router && this.$router.push(this.href);
    }
  }
};
</script>

<style scoped>
a {
  color: var(--light-green-color);
}

a:hover {
  opacity: 0.6;
  cursor: pointer;
}

.active {
  opacity: 0.6;
  text-decoration: none;
}
</style>

<docs>
  ```
  <v-link :href="'#'">V-Link Example</v-link>
  ```
</docs>
