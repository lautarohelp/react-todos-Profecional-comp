
import React from "react";
import "./TodoForm.css"
import { useNavigate } from "react-router-dom";

function TodoForm(props) {
  const navigate = useNavigate();

  const [newTodoValue, setNewTodovalue] = React.useState(props.defaultTodoText || '');

  const onSubmit = (event) => {  
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');


  }

  const  onCancel = () => {  
    navigate('/');
  }

  const  onChange = (event) => {  
    setNewTodovalue(event.target.value);
  }
  
  
  
  return (
    <form onSubmit={onSubmit} className="formTodoNew">
      <label>{props.label}</label>
      <textarea
      value={newTodoValue}
      onChange={onChange}
      placeholder="Escribi aca....">
      </textarea>
      <div className="TodoForm-buttonContainer">
      <button
      type="button"
      className="TodoForm-button TodoForm-button--cancel"
      onClick={onCancel}
      >Cancelar</button>
      <button
      type="submit"
      className="TodoForm-button TodoForm-button--add"
      >{props.submitText}</button>
      </div>
    </form>
  )
}

export {TodoForm};