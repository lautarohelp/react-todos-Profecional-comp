import React from 'react';
/* import { Modal } from '../Modal'; */
import './CreateTodoButton.css'


function CreateTodoButtondoButton( props){
  return (
    <button className='CreateBotton' 
    onClick={props.onClick}>+</button>
  );
}

export { CreateTodoButtondoButton }