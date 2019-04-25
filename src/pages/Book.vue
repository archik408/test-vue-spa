<template>
  <main-layout>
    <loading v-if="loading">Loading...</loading>
    <div class="book-page">
      <h1>Book #{{ dirtyBook.id }}</h1>
      <book-form :book="dirtyBook" :on-save="saveBook" :on-close="cancelSave"></book-form>
    </div>
  </main-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainLayout from '../layouts/Main';
import BookForm from '../components/BookForm';
import Loading from '../components/Loading.vue';

export default {
  name: 'BookPage',
  components: {
    BookForm,
    Loading,
    MainLayout
  },
  computed: {
    dirtyBook() {
      return this.isNew() ? { ...this.book } : { name: '', id: Date.now() };
    },
    ...mapState({
      book: state => state.books.book.data,
      loading: state => state.books.book.loading || state.books.createdBook.loading || state.books.updatedBook.loading,
      error: state => state.books.book.error || state.books.createdBook.error || state.books.updatedBook.error
    })
  },
  methods: {
    cancelSave() {
      this.$router && this.$router.push('/books');
    },
    saveBook() {
      this.isNew() ? this.updateBook(this.dirtyBook) : this.createBook(this.dirtyBook);
      return this.$router && this.$router.push('/books');
    },
    isNew() {
      return this.$router.currentRoute.params.id;
    },
    ...mapActions('books', ['createBook', 'updateBook'])
  },
  created() {
    const identifier = this.isNew();

    if (identifier) {
      this.$store.dispatch('books/getBook', identifier);
    }
  }
};
</script>

<style scoped>
.book-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
