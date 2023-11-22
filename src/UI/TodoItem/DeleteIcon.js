import React from "react";
import { AiOutlineClose } from 'react-icons/ai';


function DeleteIcon( {onDelete}) {
  return (
    <span
    onClick={onDelete}
    >
    <AiOutlineClose 
    type="Delete"
    
    className='spanX'/>
    </span>
    );
}

export { DeleteIcon }