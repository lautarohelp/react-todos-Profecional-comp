import React from 'react';
import './TodoSarch.css';

function TodoSarch({searchValue,setSearchValue,loading}) {


  return (
    <input placeholder="Search"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    disabled={loading}
    />
  );
}

export { TodoSarch };