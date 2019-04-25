<template>
  <form class="book-form" @submit.prevent="saveAuthor">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" v-model="book.name" />

    <div class="actions">
      <button>Save</button>
      <button type="button" @click="onClose">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BookForm',
  props: {
    book: {
      type: Object,
      default: () => ({
        name: ''
      }),
      required: true
    },
    onSave: {
      type: Function,
      default: f => f,
      required: true
    },
    onClose: {
      type: Function,
      default: f => f,
      required: true
    }
  },
  methods: {
    saveAuthor() {
      this.onSave(this.author);
    }
  }
};
</script>

<style scoped>
.book-form {
  max-width: 15em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
  border-radius: 0.5em;
  background: var(--light-gray-color);
  box-shadow: 0.2em 0.2em 0.5em var(--pickled-bluewood-color);
}

.book-form .actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2em 0 0.5em;
}

.book-form .actions button {
  margin: 0 1em 0 0;
  box-shadow: var(--shadow);
}

.book-form .actions button:last-child {
  background: white;
  border: 0.1em solid var(--light-green-color);
  color: var(--light-green-color);
}
</style>

<docs>
  ```
  <book-form
    :book="{
      id: 1,
      name: 'Silmarillion'
    }"
    :on-save="f => f"
    :on-close="f => f"
  ></book-form>
  ```
</docs>
