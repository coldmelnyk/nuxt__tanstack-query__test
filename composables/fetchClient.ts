import axios from 'axios';

import type { TodoType } from '~/types';

const fetchApiValues = {
  baseUrl: 'https://shrimo.com/fake-api/todos',
  todosQueryKey: ['todos']
};

export const fetchQueryParams = {
  getTodosQueryParams: {
    queryKey: fetchApiValues.todosQueryKey,
    queryFn: () =>
      axios
        .get(fetchApiValues.baseUrl)
        .then(res => res)
        .catch(() => alert('Failed to fetch todos!'))
  },
  updateTodoQueryParams: {
    queryKey: fetchApiValues.todosQueryKey,
    mutationFn: (todo: TodoType) =>
      axios
        .put(`${fetchApiValues.baseUrl}/${todo._id}`, todo)
        .then(() => {
          alert('Todo was successfully updated!');
        })
        .catch(() => {
          alert('Fail while updating!');
        })
  },
  deleteTodoQueryParams: {
    queryKey: fetchApiValues.todosQueryKey,
    mutationFn: (todo: TodoType) =>
      axios
        .delete(`${fetchApiValues.baseUrl}/${todo._id}`)
        .then(() => {
          alert('Todo was successfully deleted!');
        })
        .catch(() => {
          alert('Fail while deleting!');
        })
  },
  addTodoQueryParams: {
    queryKey: fetchApiValues.todosQueryKey,
    mutationFn: (todo: TodoType) =>
      axios
        .post(`${fetchApiValues.baseUrl}`, todo)
        .then(() => {
          alert('Todo was successfully added!');
        })
        .catch(() => {
          alert('Fail while adding!');
        })
  }
};
