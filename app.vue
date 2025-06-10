<script setup lang="ts">
const { $VueQueryDevtools } = useNuxtApp();
const { data, isFetched, isPending, error } = useGetTodos();

const VueQueryDevtools = $VueQueryDevtools;
</script>

<template>
  <AddTodoForm />

  <TodoList v-if="isFetched && data" :todos="data.data" />

  <h1 v-else-if="isPending">Loading todos data...</h1>

  <h1 v-else-if="error">Error while fetching todos!</h1>

  <VueQueryDevtools />
</template>
