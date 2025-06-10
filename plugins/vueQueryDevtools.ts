import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

export default defineNuxtPlugin((nuxt) => {
  nuxt.provide("VueQueryDevtools", VueQueryDevtools);
});
