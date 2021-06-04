import React from 'react';
import '../todo-list/todo-list.css';
import {style} from '../../dynamic-style.js';




function Todo({todos, todo, isDark, setTodos}) {

    
    const completeTodo = id => {
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id) {
                todo.completed = !todo.completed; 
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    const removeTodo = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    
    
    
    return (
      
                <li 
                    className = 'todo-item' style = {isDark ? style.dark.todo_item.default 
                        : 
                        style.light.todo_item.default
                    }
                >
                
                <div 
                    className = {isDark ? 'todo-text-check dark-text' : 'todo-text-check light-text'}
                    onClick = {() => {completeTodo(todo.id)}}
                >

               
                <div 
                    className = 'circle-gradient'
                    style = {isDark ? style.dark.todo_check : style.light.todo_check}
                    >
                    <div 
                        className = {todo.completed === false && isDark ? 'todo-circle unchecked dark-bg-circle' 
                                                    : 
                                    todo.completed ===false && isDark === false ? 'todo-circle unchecked light-bg-circle'
                                                    :
                                    'todo-circle checked'
                                }
    
                    >

                        {todo.completed ? <svg xmlns="http://www.w3.org/2000/svg" key = {todo.id} onClick = {removeTodo} className = "icon-checked" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                        : null
                        }

                    </div>
                </div>


                    <p
                        style = {

                        todo.completed === true && isDark? style.dark.todo_item.completed
                            : 
                        todo.completed === true && isDark === false ? style.light.todo_item.completed 
                            : 
                        null

                        }
                    >
                        {todo.value}
                    </p>


                </div>

                    <div  className = 'icon-cross' onClick = {removeTodo}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill={isDark ? "#494C6B" : "#B5B4BD"} fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                    </div>
                </li>
    )
}

export default Todo


