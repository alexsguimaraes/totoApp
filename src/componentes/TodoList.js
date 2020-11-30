import React from 'react'; 
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul className="collection"> 
            {todos.map((todo, index) => { 
                return (
                    <li 
                        className = "collection-item" 
                        key={index} 
                        onClick={e => toggleTodo(todo)}
                        style={{ 
                            textDecoration: todo.done ? 'line-through' : null
                        }}>
                        {todo.text}
                    </li>
                );
            })}
        </ul>
    );
}

function mapaStateToProps(state){
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = { toggleTodo }; 

export default connect(mapaStateToProps, mapDispatchToProps)(TodoList);