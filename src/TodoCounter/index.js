import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'


function TodoCounter() {
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext)

    if(totalTodos === 0){
      return (<h1>
      <p>No tienes ninguna tarea pendiente 🚶‍♂️</p>
    </h1>)
    }else if (totalTodos === completedTodos) {
      return (
      <h1>
      <p className='sobreElTitulo'>🎊Felicidades por completar todas tus tareas🎊</p>
    </h1>
    )
    }else{
      return (<h1>
      <p>Has completado <span className='complete'>{completedTodos} </span> de  <span className='complete'>{totalTodos}</span> TODOS</p>
    </h1>)
    }
    /* total === complete ?
    <h1>
      <p className='sobreElTitulo'>🎊Felicidades por completar todas tus tareas🎊</p>
      <p className='tareasCompletadas'>Has completado <span className='complete'>{complete} </span> de  <span className='complete'>{total}</span> TODOS</p>
    </h1>
    
    :

    <h1>
      <p className='tareasCompletadas sobreElTitulo'>🎊Felicidades por completar todas tus tareas🎊</p>
      <p>Has completado <span className='complete'>{complete} </span> de  <span className='complete'>{total}</span> TODOS</p>
    </h1> */
  
}

export { TodoCounter };