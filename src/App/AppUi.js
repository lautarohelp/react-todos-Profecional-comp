import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSarch } from '../TodoSarch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos/.index';
import { CreateTodoButtondoButton } from '../CreateTodoButtondoButton';
import { TodoContext } from '../TodoContext';
import { FailTodos } from '../FailTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI(){
  const {
      loading,
      todos,
      error,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
  } = React.useContext(TodoContext);


  return (
    <> {/* tambien lo podemos hacer React.fragment */}

    <TodoCounter /* complete={completedTodos} total={totalTodos} */ />
    <TodoSarch 
/*       searchValue={searchValue}
      setSearchValue={setSearchValue} */
    />
      <TodoList>
      {loading && 
      <>
        <TodosLoading/>
        <TodosLoading/>
        <TodosLoading/>
      </>}
      {error && <TodosError/>}
      {(!loading && todos.length === 0 ) && <EmptyTodos />}
      {(!loading && todos.length !== 0) && (!loading && searchTodos.length === 0) && <FailTodos />}

      {searchTodos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        complete={todo.complete}
        onComplete={() => completeTodo(todo.text)}
        onDelete={() => deleteTodo(todo.text)}
      />
    ))}
    
    </TodoList>

    <CreateTodoButtondoButton />

    {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
    )}

    </>
  );
}

export {AppUI};