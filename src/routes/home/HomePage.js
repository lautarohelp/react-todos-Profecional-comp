/* import logo from './platzi.webp'; */
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { TodoHeader } from '../../UI/TodoHeader';
import { TodoList } from '../../UI/TodoList';
import { TodoItem } from '../../UI/TodoItem';
import { TodosLoading } from '../../UI/TodosLoading';
import { TodosError } from '../../UI/TodosError';
import { EmptyTodos } from '../../UI/EmptyTodos/.index';
import { CreateTodoButtondoButton } from '../../UI/CreateTodoButtondoButton';
import { FailTodos } from '../../UI/FailTodos';
import { TodoCounter } from '../../UI/TodoCounter';
import { TodoSarch } from '../../UI/TodoSarch';
import { useTodos } from '../useTodos';
import { ChangeAlert } from '../../UI/ChangeAlert';



function HomePage() {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  const {
    states,
    stateUpdaters,
} = useTodos();
  
  const {
    error,
    loading,
    searchTodos,
    totalTodos,
    completedTodos,
    completeTodo,
   /*  openModal, */
    searchValue,
  } = states;

  const {
    todos,
    setSearchValue,
    /* addTodo */
    deleteTodo,
    /* setOpenModal, */
    sincronizeTodo,
  } = stateUpdaters;

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
        params={params}
        setParams={setParams}
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
          key={todo.id}
          text={todo.text}
          complete={todo.complete}
          onEdit={() => navigate('/edit/' + todo.id, {state: {todo}},)}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
    />
      )}
    </TodoList>

  <CreateTodoButtondoButton 
  onClick={() => navigate('/new')}
  /* setOpenModal={setOpenModal}
  openModa={openModal} */
  />

  {/* {openModal && (
    <Modal>
      <TodoForm 
        addTodo={addTodo}
        setOpenModal={setOpenModal}/>
    </Modal>
  )} */}

  <ChangeAlert 
    sincronize={sincronizeTodo}
  />
  </>
);
}


export {HomePage};
