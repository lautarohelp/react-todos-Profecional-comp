import React from "react";
import { RxCheck } from 'react-icons/rx';

function CompleteIcon({complete, onComplete}) {
  return (
  <span 
  onClick={onComplete}
  ><RxCheck 
    type="Check"
    color={complete ? 'green' : 'black'}
  className={`spanV ${complete && "spanVactive"}`}
    
/>
  </span>);
}

export { CompleteIcon }