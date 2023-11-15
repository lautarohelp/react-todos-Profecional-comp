import React from 'react';
import { Modal } from '../Modal';
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButtondoButton() {
  const {
    setOpenModal,
    openModal,
} = React.useContext(TodoContext)
  return (
    <button className='CreateBotton' 
    onClick={
      () => 
      {setOpenModal(!openModal)} 
    
    }>+</button>
  );
}

export { CreateTodoButtondoButton }