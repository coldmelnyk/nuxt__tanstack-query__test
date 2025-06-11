<script lang="ts" setup>
  import type { TodoType } from '~/types';

  const { addTodo } = useAddTodo();
  const { newTodo } = useNewTodo();

  const handleAddTodo = (todo: TodoType) => {
    addTodo(todo);
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const rawedNewTodo = toRaw(newTodo.value);
    let formattedStatus;

    switch (rawedNewTodo.status) {
      case false:
        formattedStatus = 'Not Started';
        break;
      case true:
        formattedStatus = 'Completed';
        break;
    }

    const todoToAdd = {
      ...rawedNewTodo,
      status: formattedStatus
    };

    handleAddTodo(todoToAdd);
  };
</script>

<template>
  <section>
    <form
      class="form"
      v-on:submit="handleSubmit"
    >
      <input
        type="text"
        v-model="newTodo.title"
        placeholder="title"
      />

      <textarea
        v-model="newTodo.description"
        placeholder="description"
        name="description"
        id=""
      ></textarea>

      <label
        class="status-label"
        for="status"
      >
        <span>status</span>
        <input
          v-model="newTodo.status"
          type="checkbox"
          name="status"
          id="status"
        />
      </label>

      <button type="submit">Save new todo</button>
    </form>
  </section>
</template>

<style scoped>
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
    padding: 20px;

    border: 1px solid black;
  }

  .status-label {
    display: flex;
    align-items: center;
  }
</style>
