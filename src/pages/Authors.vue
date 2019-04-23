<template>
  <main-layout>
    <h1>Authors</h1>
    <div class="actions">
      <button @click="toggleAuthorForm">Add New</button>
      <button @click="getAuthors">Refresh</button>
    </div>
    <loading v-if="loading">Loading...</loading>
    <author-table :authors="authorsWithBooks" :on-remove="removeAuthor" :on-edit="editAuthor"> </author-table>
    <author-form
      :show="showAddAuthorForm"
      :author="author"
      :books="books"
      :on-save="saveAuthor"
      :on-close="closeAuthorForm"
    ></author-form>
  </main-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MainLayout from '../layouts/Main.vue';
import Loading from '../components/Loading.vue';
import AuthorForm from '../components/AuthorForm.vue';
import AuthorTable from '../components/AuthorTable.vue';

export default {
  name: 'AuthorsPage',
  components: {
    Loading,
    MainLayout,
    AuthorForm,
    AuthorTable
  },
  computed: {
    ...mapState({
      books: state => state.books.books.data,
      authors: state => state.authors.authors.data,
      loading: state =>
        state.books.books.loading ||
        state.authors.authors.loading ||
        state.authors.deletedAuthor.loading ||
        state.authors.createdAuthor.loading ||
        state.authors.updatedAuthor.loading,
      error: state =>
        state.books.books.error ||
        state.authors.authors.error ||
        state.authors.deletedAuthor.error ||
        state.authors.createdAuthor.error ||
        state.authors.updatedAuthor.error
    }),
    authorsWithBooks() {
      return this.$store.getters['authors/getAuthors'].data;
    }
  },
  data: function() {
    return {
      showAddAuthorForm: false,
      author: {
        firstName: '',
        lastName: '',
        books: []
      }
    };
  },
  methods: {
    saveAuthor(author) {
      const index = this.authors.findIndex(a => a.id === author.id);

      if (index > -1) {
        this.updateAuthor(author);
      } else {
        this.createAuthor(author);
      }

      this.resetAuthor();
      this.toggleAuthorForm();
    },

    editAuthor(authorId) {
      this.author = { ...this.authors.find(a => a.id === authorId) } || {};
      this.toggleAuthorForm();
    },

    closeAuthorForm() {
      this.resetAuthor();
      this.toggleAuthorForm();
    },

    toggleAuthorForm() {
      this.showAddAuthorForm = !this.showAddAuthorForm;
    },

    resetAuthor() {
      this.author = {
        firstName: '',
        lastName: '',
        books: []
      };
    },

    ...mapActions('authors', ['getAuthors', 'removeAuthor', 'createAuthor', 'updateAuthor'])
  },
  created() {
    this.$store.dispatch('authors/getAuthors');
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
