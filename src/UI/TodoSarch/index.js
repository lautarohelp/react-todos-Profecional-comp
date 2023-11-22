import React, { useEffect } from 'react';
import './TodoSarch.css';

function TodoSarch({searchValue,setSearchValue,loading,params,setParams}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  
    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearchValue(search);
  }, [params]);


  return (
    <input placeholder="Search"
    value={searchValue}
    onChange={/* (event) => {
      setSearchValue(event.target.value);
    } */
    onSearchValueChange
  }
    disabled={loading}
    />
  );
}

export { TodoSarch };