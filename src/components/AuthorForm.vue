<template>
  <transition name="slide-fade">
    <div v-show="show" class="de-emphasized" role="region" aria-live="assertive">
      <dialog class="author-dialog">
        <form @submit.prevent="saveAuthor">
          <label for="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" v-model="author.firstName" />

          <label for="lastName">First Name</label>
          <input id="lastName" name="lastName" type="text" v-model="author.lastName" />

          <label for="books">Books</label>
          <select id="books" name="books" v-model="author.books" multiple>
            <option :key="book.id" :value="book.id" v-for="book in books">
              {{ book.name }}
            </option>
          </select>
          <div class="actions">
            <button>Save</button>
            <button type="button" @click="onClose">Cancel</button>
          </div>
        </form>
      </dialog>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AuthorForm',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    author: {
      type: Object,
      default: () => ({
        firstName: '',
        lastName: '',
        books: []
      }),
      required: true
    },
    books: {
      type: Array,
      default: () => [],
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
.author-dialog {
  top: 20%;
  z-index: 9;
  display: block;
  padding: 2em 2em 1em;
  border: none;
  border-radius: 1em;
  background: var(--light-gray-color);
  box-shadow: 0.2em 0.2em 0.5em var(--pickled-bluewood-color);
  transition: top 0.2s ease-out;
}

.slide-fade-enter-active .author-dialog {
  top: 0;
}

.author-dialog form {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.author-dialog .actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2em 0 0.5em;
}

.author-dialog .actions button {
  margin: 0 1em 0 0;
  box-shadow: var(--shadow);
}

.author-dialog .actions button:last-child {
  background: white;
  border: 0.1em solid var(--light-green-color);
  color: var(--light-green-color);
}

.de-emphasized:before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pickled-bluewood-color);
  opacity: 0.7;
}
</style>

<docs>
  ```
  const initialState = { show: false };

  <button @click="initialState.show = true">Show Author Form</button>
  <author-form
    :show="initialState.show"
    :author="{
      id: 2,
      firstName: 'Obi Van',
      lastName: 'Kenobi',
      books: []
    }"
    :books="[
    {
      id: 1,
      name: 'Option 1'
    },
    {
      id: 2,
      name: 'Option 2'
    }
    ]"
    :on-save="() => initialState.show = false"
    :on-close="() => initialState.show = false"
  ></author-form>
  ```
</docs>
