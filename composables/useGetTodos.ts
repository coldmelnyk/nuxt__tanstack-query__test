import { useQuery } from "@tanstack/vue-query";

export function useGetTodos() {
  const getTodos = useQuery(fetchQueryParams.getTodosQueryParams);

  return getTodos;
}
