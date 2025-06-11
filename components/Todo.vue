<script lang="ts" setup>
  import type { TodoType } from '~/types';

  const props = defineProps<{
    todo: TodoType;
  }>();

  const { deleteTodo } = useDeleteTodos();
  const { updateTodo } = useUpdateTodos();

  const handleDeletingOfTodo = () => {
    deleteTodo(props.todo);
  };

  const handleUpdateTodo = () => {
    const newStatus =
      props.todo.status === 'Completed' ? 'Not Started' : 'Completed';

    const newTodo = {
      ...props.todo,
      status: newStatus
    };

    updateTodo(newTodo);
  };
</script>

<template>
  <article class="todo">
    <input
      type="checkbox"
      :checked="todo.status === 'Completed' ? true : false"
      name="status"
      id="status"
      v-on:click="handleUpdateTodo"
    />

    <h1>{{ todo.title }}</h1>

    <p>{{ todo.description }}</p>

    <button v-on:click="handleDeletingOfTodo">Delete</button>
  </article>
</template>

<style scoped>
  .todo {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
  }
</style>
