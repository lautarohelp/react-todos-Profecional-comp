import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const{ item: todos, saveItem: saveTodos,sincronizeItem: sincronizeTodo, loading ,error} = useLocalStorage('TODO_v1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;



  const searchTodos = todos.filter( (todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  })

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        complete: false,
      });
      saveTodos(newTodos);
    }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    if (newTodos[todoIndex].complete === true) {
      newTodos[todoIndex].complete = false
      saveTodos(newTodos);
    }else {
      newTodos[todoIndex].complete = true
      saveTodos(newTodos);
    }
    
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);

  }

  const states = {
    error,
    loading,
    searchTodos,
    totalTodos,
    completedTodos,
    completeTodo,
    openModal,
    searchValue,
  }
  
  const stateUpdaters = {
  todos,
  setSearchValue,
  addTodo,
  deleteTodo,
  setOpenModal,
  sincronizeTodo,
    };

    return { states, stateUpdaters };
}

/* const defaultTodos = [
  { text: 'cortar cebolla', complete: true},
  { text: 'bañarme', complete: false},
  { text: 'hablar con alguien', complete: true},
  { text: 'nafta', complete: false},
] 

  localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos));
  localStorage.removeItem('TODO_V1')
  */


export { useTodos }