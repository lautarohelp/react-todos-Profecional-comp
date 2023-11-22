import React from "react";
import { AiFillEdit } from "react-icons/ai";
import './TodoItem.css';

function EditIcon({onEdit}) {
  return (
  <span 
  onClick={onEdit}
  ><AiFillEdit  
    type="Edit"
    className="EdditIcon"
/>
  </span>);
}

export { EditIcon }