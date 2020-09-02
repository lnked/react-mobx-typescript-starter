import { useState } from 'react';

export const useTodoState = (initialValue: any[] = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,

    addTodo: (todoText: string) => {
      setTodos([...todos, todoText]);
    },

    deleteTodo: (todoIndex: number) => {
      const newTodos = todos
        .filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },
  };
};

