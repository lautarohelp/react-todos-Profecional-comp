import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import {EditIcon} from './EditIcon'
import './TodoItem.css'


function TodoItem(prompt) {
  return (
    <li className='itemns-textos'>
      <CompleteIcon 
      complete={prompt.complete} 
      //onEdit={prompt.onEdit}
      onComplete={prompt.onComplete}
      />
      {/* <span className={`spanV ${prompt.complete && "spanVactive"}`}
      onClick={prompt.onComplete}
      >V</span> */}
      <p className={`text ${prompt.complete && "texto-hecho"}`}
      >{prompt.text}</p>
      <div>
      <EditIcon onEdit={prompt.onEdit}/>
      <DeleteIcon onDelete={prompt.onDelete}/>
      </div>
      {/* <span className='spanX'
      onClick={prompt.onDelete}
      >X</span> */}
    </li>
  );
}

export { TodoItem }