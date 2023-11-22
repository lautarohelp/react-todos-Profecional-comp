import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const{ item: todos, saveItem: saveTodos,sincronizeItem: sincronizeTodo, loading ,error} = useLocalStorage('TODO_v2', []);
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
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text,
      id,
    });
    saveTodos(newTodos);
  }
  
  const getTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    return todos[todoIndex]
  }


  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    if (newTodos[todoIndex].complete === true) {
      newTodos[todoIndex].complete = false
      saveTodos(newTodos);
    }else {
      newTodos[todoIndex].complete = true
      saveTodos(newTodos);
    }
    
  }

  
  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    if (newTodos[todoIndex].complete === true) {
      newTodos[todoIndex].complete = false
      saveTodos(newTodos);
    }else {
      newTodos[todoIndex].text = newText;
      saveTodos(newTodos);
    }
    
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
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
    searchValue,
    getTodo,
  }
  
  const stateUpdaters = {
  todos,
  setSearchValue,
  addTodo,
  deleteTodo,
  editTodo,
  sincronizeTodo,
    };

    return { states, stateUpdaters };
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }
  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1;
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