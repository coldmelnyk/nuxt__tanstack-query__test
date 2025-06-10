import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { TodoType } from "~/types";

export const useAddTodo = () => {
  const { mutate } = useMutation(fetchQueryParams.addTodoQueryParams);
  const { newTodo, emptyTodo } = useNewTodo();

  const queryClient = useQueryClient();

  const addTodo = (todo: TodoType) => {
    mutate(todo, {
      onSettled: () => {
        queryClient.invalidateQueries();
        newTodo.value = emptyTodo;
      },
    });
  };

  return { addTodo };
};
