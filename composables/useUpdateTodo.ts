import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { TodoType } from "~/types";

export const useUpdateTodos = () => {
  const { mutate } = useMutation(fetchQueryParams.updateTodoQueryParams);

  const queryClient = useQueryClient();

  const updateTodo = (todo: TodoType) => {
    mutate(todo, {
      onSettled: () => {
        queryClient.invalidateQueries();
      },
    });
  };

  return { updateTodo };
};
