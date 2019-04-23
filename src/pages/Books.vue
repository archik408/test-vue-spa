<template>
  <main-layout>
    <h1>Books</h1>
    <div class="actions">
      <button @click="addBook">Add New</button>
      <button @click="getBooks">Refresh</button>
    </div>
    <loading v-if="loading">Loading...</loading>
    <book-table :books="books" :on-remove="removeBook" :on-edit="editBook"> </book-table>
  </main-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MainLayout from '../layouts/Main.vue';
import Loading from '../components/Loading.vue';
import BookTable from '../components/BookTable.vue';

export default {
  name: 'BooksPage',
  components: {
    Loading,
    MainLayout,
    BookTable
  },
  computed: {
    ...mapState({
      books: state => state.books.books.data,
      loading: state => state.books.books.loading || state.books.deletedBook.loading,
      error: state => state.books.books.error || state.books.deletedBook.error
    })
  },
  methods: {
    editBook(bookId) {
      this.$router.push(`/book/${bookId}`);
    },
    addBook() {
      this.$router.push('/book');
    },
    ...mapActions('books', ['getBooks', 'removeBook'])
  },
  created() {
    this.$store.dispatch('books/getBooks');
  }
};
</script>

<style scoped>
.actions {
  text-align: right;
}

.actions button {
  margin-right: 0.5em;
  box-shadow: var(--shadow);
}
</style>
