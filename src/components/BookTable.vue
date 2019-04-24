<template>
  <table class="books-table">
    <tr>
      <th>Name</th>
      <th>Actions</th>
    </tr>
    <tr :key="book.id" v-for="book in books">
      <td>{{ book.name }}</td>
      <td>
        <button @click="() => onEdit(book.id)" aria-label="edit">
          <font-awesome-icon icon="edit" />
        </button>
        <button @click="() => onRemove(book.id)" aria-label="remove">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'BookTable',
  props: {
    books: {
      type: Array,
      default: () => [],
      required: true
    },
    onRemove: {
      type: Function,
      default: f => f,
      required: true
    },
    onEdit: {
      type: Function,
      default: f => f,
      required: true
    }
  }
};
</script>

<style scoped>
.books-table {
  width: 100%;
  margin: 1em 0;
  color: white;
  box-shadow: var(--shadow);
}

.books-table th {
  padding: 0.5em;
  background: var(--light-green-color);
}

.books-table td {
  padding: 0.8em;
  background: var(--pickled-bluewood-color);
}

.books-table td:last-child {
  text-align: center;
  width: 15%;
}

.books-table button {
  margin: 0.25em;
}
</style>

<docs>
  ```
  <book-table
    :books="[
      {
        id: 1,
        name: 'The Green Mile'
      },
      {
        id: 2,
        name: 'The Dark Tower'
      }
    ]"
    :on-edit="f => f"
    :on-remove="f => f"
  ></book-table>
  ```
</docs>
