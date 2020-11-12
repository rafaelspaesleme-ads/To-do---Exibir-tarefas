import { useState } from 'react';

const InitialValue = () => {
  const [todos, setTodos] = useState(null);
 
  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    }
  };
}

export default InitialValue;
