/* import logo from './platzi.webp'; */
import React from 'react';

import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos/.index';
import { CreateTodoButtondoButton } from '../CreateTodoButtondoButton';
import { FailTodos } from '../FailTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoCounter } from '../TodoCounter';
import { TodoSarch } from '../TodoSarch';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';



function App() {
  const {
    loading,
    todos,
    error,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    openModa,
    sincronizeTodo,
} = useTodos();
  
return (
  <> {/* tambien lo podemos hacer React.fragment */}

    <TodoHeader loading={loading}>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSarch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>

    <TodoList 
      error={error}
      loading={loading}
      searchTodos={searchTodos}
      todos={todos}
      totalTodos={totalTodos}
      searchText={searchValue}

      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={(searchText) => <FailTodos searchText={searchText}/>}
      /* render= { todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          complete={todo.complete}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
    />
      )} */
    >
      { todo => (
        <TodoItem 
          key={todo.text}
          text={todo.text}
          complete={todo.complete}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
    />
      )}
    </TodoList>

  <CreateTodoButtondoButton 
  setOpenModal={setOpenModal}
  openModa={openModa}
  />

  {openModal && (
    <Modal>
      <TodoForm 
        addTodo={addTodo}
        setOpenModal={setOpenModal}/>
    </Modal>
  )}

  <ChangeAlert 
    sincronize={sincronizeTodo}
  />
  </>
);
}


export default App;
