<script lang="ts" setup>
import type { TodoType } from "~/types";

const props = defineProps<{
  todos: TodoType[];
}>();
</script>

<template>
  <section class="grid">
    <Todo v-for="todo in props.todos" :key="todo._id" :todo />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  flex-direction: column;
  max-width: 70%;
  gap: 10px;
}
</style>
