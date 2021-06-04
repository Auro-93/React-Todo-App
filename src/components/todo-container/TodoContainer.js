import React, {useState, useEffect} from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import './todo-container.css';
import TodoInput from '../todo-input/TodoInput';
import TodoList from '../todo-list/TodoList';
import TodoFilters from '../todo-filters/TodoFilters.js';
import TodoDragDrop from '../todo-drag-and-drop/TodoDragDrop.js';

export default function TodoContainer({isDark}) {


    const[input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState('All');
    const[filterColor, setFilterColor] = useState({active : 0});
 


    const handleChange = e =>{
        let newInput = e.target.value;
        setInput(newInput);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        const whiteSpaces = /^\s+$/;

        if(input.length === 0 || whiteSpaces.test(input) ){
            return
        }

        setTodos(
            [...todos,
                {
                    id : Math.floor(Math.random() * 10000),
                    completed: false,
                    value: input
                }
            ]
        )
        setInput('');
        setStatus('All');
        setFilterColor({active: 'a'});
    };


    const handleStatus = (e) =>{
        setStatus(e.target.innerText);
    }


    const handleFilter = () =>{
        switch(status){
            case 'Active' :
                        setFilteredTodos(todos.filter(todo => todo.completed === false));
                        
            break;
            case 'Completed' :
                        setFilteredTodos(todos.filter(todo => todo.completed === true));
                        
            break;
            default :
                        setFilteredTodos(todos);
                  
            break;
        }
    }

    const handleFilterColor = (e) => {
        let liId = e.currentTarget.id;
        setFilterColor({active: liId})
    };

    const saveTodos = () => {
      
        localStorage.setItem('todos', JSON.stringify(todos))
        
      }
  
      const loadTodos = () => {
  
          if(localStorage.getItem('todos') === null){
              localStorage.setItem('todos', JSON.stringify([]))
          }
          else{
              let todosLoaded = JSON.parse(localStorage.getItem('todos'));
              setTodos(todosLoaded);
          }
  
      }

      const reorder = (todos, startIndex, endIndex) =>{
      
          const result = Array.from(todos);
          const [removed] = result.splice(startIndex, 1);
          result.splice(endIndex, 0, removed);
            return result;
      }

      const onDragEnd = (result) => {

          if(result.destination === null){
              return
          }
          setTodos(reorder(todos, result.source.index, result.destination.index))
        }

    
    useEffect(() =>{
        loadTodos()
    }, [])
    

    useEffect(() => {
        handleFilter();
        saveTodos()
    }, [todos, status])

 

    return (
        <div className = 'todo-container'>
            <TodoInput
                 onChange = {handleChange}
                 input = {input} 
                 isDark = {isDark} 
                 onSubmit = {handleSubmit}
            />
            <DragDropContext
                onDragEnd = {onDragEnd}
            >
                <Droppable
                    droppableId = 'droppable1'
                >
                    {(provided, snapshot) => (
                        <div
                            ref = {provided.innerRef}
                        >
                            <TodoList
                            
                                todos = {todos}
                                isDark = {isDark}
                                setTodos = {setTodos}
                                filteredTodos = {filteredTodos}
                            />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {todos.length > 0 ? 
                <TodoFilters
                    todos = {todos}
                    isDark = {isDark}
                    setTodos = {setTodos}
                    handleStatus = {handleStatus}
                    handleFilter = {handleFilter}
                    filterColor = {filterColor}
                    handleFilterColor = {handleFilterColor}
                />
                :
                null
            
            }

            {todos.length > 0 ?
            <TodoDragDrop
                isDark = {isDark}
            />
            :
            null
            }
        </div>
    )
}
