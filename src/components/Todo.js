import React from 'react';
import './Todo.css';

export function Todo({todo,description}) {
  const [checked, setChecked] = React.useState(false);

  return (    
    <React.Fragment>

      <div className="todo">
        <label className="checkbox">
          <span>
            <input type="checkbox" 
              checked={checked} 
              onChange={() => setChecked(!checked)}
            />          
            <span></span>
          </span>
        </label> 
        <div className={`todo-text ${checked ? "crossed-line" : ""}`}>
          <h2 className={`todo-title ${checked ? "checked" : ""}`}>{todo.title}</h2>
          <p className={`todo-description ${checked ? "checked" : ""}`}>{description}</p>
        </div>
      </div>
    </React.Fragment>   
  )
}