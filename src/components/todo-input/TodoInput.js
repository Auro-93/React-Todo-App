import React from 'react';
import './todo-input.css';
import {style} from '../../dynamic-style.js';



function TodoInput({onChange, input, isDark, onSubmit}) {

 

    return (
        <>
        <form 
            className = 'todo-form'
            style = {isDark ? style.dark.todo_input.input : style.light.todo_input.input }
            onSubmit = {onSubmit}
        >
            <div 
                className = 'input-circle'
                style = {isDark ? style.dark.todo_input.circle : style.light.todo_input.circle}
            />
            
            <input 
                className = {isDark ? 'todo-input dark-placeholder' : 'todo-input light-placeholder'}
                type = 'text'
                name = 'todo'
                placeholder = 'Create a new todo...'
                value = {input}
                onChange = {onChange}
            />    
        </form>  
        </>
    )
}

export default TodoInput;
