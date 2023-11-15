import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render

  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && props.todos.length === 0 ) && props.onEmptyTodos()}
    
      {(!!props.totalTodos && props.searchTodos.length === 0 ) && props.onEmptySearchResults(props.searchText)}

      {(!props.loading && !props.error) && props.searchTodos.map(renderFunc)}
    </section>
  );
}

export { TodoList };