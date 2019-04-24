<template>
  <table class="authors-table">
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Books</th>
      <th>Actions</th>
    </tr>
    <tr :key="author.id" v-for="author in authors">
      <td>{{ author.firstName }}</td>
      <td>{{ author.lastName }}</td>
      <td>{{ author.books.join(', ') }}</td>
      <td>
        <button @click="() => onEdit(author.id)" aria-label="edit">
          <font-awesome-icon icon="edit" />
        </button>
        <button @click="() => onRemove(author.id)" aria-label="remove">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'AuthorTable',
  props: {
    authors: {
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
.authors-table {
  width: 100%;
  margin: 1em 0;
  color: white;
  box-shadow: var(--shadow);
}

.authors-table th {
  padding: 0.5em;
  background: var(--light-green-color);
}

.authors-table td {
  padding: 0.8em;
  background: var(--pickled-bluewood-color);
}

.authors-table td:last-child {
  text-align: center;
  width: 15%;
}

.authors-table button {
  margin: 0.25em;
}
</style>

<docs>
  ```
  <author-table
    :authors="[
      {
        id: 1,
        firstName: 'Stephen',
        lastName: 'King',
        books: [1, 2, 3, 4]
      },
      {
        id: 2,
        firstName: 'Robert',
        lastName: 'Louis Stevenson',
        books: [5, 6, 7]
      }
    ]"
    :on-edit="f => f"
    :on-remove="f => f"
  ></author-table>
  ```
</docs>
