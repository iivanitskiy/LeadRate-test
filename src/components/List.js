import React, {useState, useEffect} from 'react';
import './List.css';
import {Todo} from './Todo';
import {TodoApi} from '../lib/TodoApi';
import {getRandomInt} from '../lib/getRandomInt';

export function List() { 
const [todos, setTodos] = useState([])

  useEffect(() => {
    TodoApi().then(function(res) {
			setTodos(res.slice(0,7));
      }).catch(function(error) {
        console.log(error);
      })
  }, [setTodos]);

	return(

		<React.Fragment>
			<div className="container">
				<div className="rectangle-one"></div>
				<div className="rectangle-two"></div>
				<div className="list">
					<div className="title">
						<h1 className="title-name">Todo list</h1>
						<button className="title-button">ADD</button>
					</div>
						<div className="todos">
              {todos.map(todo => (
                <Todo todo={todo} description={getRandomInt(0,4) === 0 ? todo.title : ""} key={todo.id}/>
              ))}
            </div>

				</div>
				<p className="author">© 2021. Ivan Ivanitskiy</p>
			</div>
		</React.Fragment>
	)
}