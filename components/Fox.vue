<script lang="ts" setup>
import { useGetFox } from "~/composables/useGetFox";

const { isFetched, isPending, data, error } = useGetFox();
</script>

<template>
  <section v-if="isFetched && data">
    <h1>Random fox:</h1>

    <a :href="data.link">
      <img :src="data.image" alt="fox-img" />
    </a>
  </section>

  <section v-if="isPending">
    <h1>Loading...</h1>
  </section>

  <section v-if="error">
    <h1>Failed to fetch data from server!</h1>
  </section>
</template>
