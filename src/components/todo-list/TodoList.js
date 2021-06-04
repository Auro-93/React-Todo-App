import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Todo from '../todo/Todo.js';
import './todo-list.css';
import {style} from '../../dynamic-style.js';



function TodoList({todos, isDark, setTodos, filteredTodos}) {
    return (

        <ul 
            className = 'todo-list'
            style = {isDark ? style.dark.todo_list : style.light.todo_list}
        >
           {filteredTodos.map((todo, index) => (
               <Draggable
                    draggableId = {todo.id.toString()}
                    key = {todo.id}
                    index = {index}
               >
                {(provided, snapshot) => (
                    <div
                        className = 'draggable'
                        ref = {provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Todo 
                            todos = {todos}
                            isDark = {isDark}
                            todo = {todo}
                            setTodos = {setTodos}
                        />
                    {provided.placeholder}
                    </div>
                
                )}
              
                </Draggable>
           ))}
        </ul>
    )
}

export default TodoList


