export const useNewTodo = () => {
  const emptyTodo = {
    title: '',
    description: '',
    _id: String(Date.now()),
    status: false,
    dueDate: new Date(),
    priority: 'High',
    tags: ['JavaScript', 'Learning']
  };

  const newTodo = useState('newTodo', () => emptyTodo);

  return { newTodo, emptyTodo };
};
