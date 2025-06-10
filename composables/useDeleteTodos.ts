import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { TodoType } from "~/types";

export const useDeleteTodos = () => {
  const { mutate } = useMutation(fetchQueryParams.deleteTodoQueryParams);

  const queryClient = useQueryClient();

  const deleteTodo = (todo: TodoType) => {
    mutate(todo, {
      onSettled: () => {
        queryClient.invalidateQueries();
      }
    });
  };

  return { deleteTodo };
};
