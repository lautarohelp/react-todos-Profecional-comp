import React from 'react';
/* import { Modal } from '../Modal'; */
import './CreateTodoButton.css'


function CreateTodoButtondoButton({setOpenModal,
  openModal}) {
  return (
    <button className='CreateBotton' 
    onClick={
      () => 
      {setOpenModal(!openModal)} 
    
    }>+</button>
  );
}

export { CreateTodoButtondoButton }