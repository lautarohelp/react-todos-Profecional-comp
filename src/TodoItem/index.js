import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import './TodoItem.css'


function TodoItem(prompt) {
  return (
    <li className='itemns-textos'>
      <CompleteIcon complete={prompt.complete} onComplete={prompt.onComplete}/>
      {/* <span className={`spanV ${prompt.complete && "spanVactive"}`}
      onClick={prompt.onComplete}
      >V</span> */}
      <p className={`text ${prompt.complete && "texto-hecho"}`}
      >{prompt.text}</p>

      <DeleteIcon onDelete={prompt.onDelete}/>
      {/* <span className='spanX'
      onClick={prompt.onDelete}
      >X</span> */}
    </li>
  );
}

export { TodoItem }