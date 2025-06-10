<script setup lang="ts">
const { $VueQueryDevtools } = useNuxtApp();

const VueQueryDevtools = $VueQueryDevtools;
</script>

<template>
  <Fox />

  <VueQueryDevtools />
</template>
