import React from 'react';
import './TodoSarch.css';
import { TodoContext } from '../TodoContext';

function TodoSarch() {
  const {
      searchValue,
      setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <input placeholder="Search"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />
  );
}

export { TodoSarch };