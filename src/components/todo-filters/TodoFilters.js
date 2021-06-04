import React from 'react';
import './todo-filters.css';
import {style} from '../../dynamic-style.js';




function TodoFilters({todos, isDark, setTodos, handleStatus, handleFilter, filterColor, handleFilterColor}) {

     
    

    let completedTodos = todos.filter(todo => todo.completed === false);
    completedTodos = completedTodos.length;

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

   


   return(

    <>
    
        <div 
            className = { 'todo-filters'}
            style = {isDark ? style.dark.todo_filters : style.light.todo_filters.version_1}

        >
            <div 
                className = {isDark ? 'items-left dark-text' : 'items-left light-text'}
            >
               {completedTodos} items left
            </div>

            <ul className = 'filters-desktop'
            >
               <li
                   onClick = {handleFilter}
  
                >
                    <div
                            id = 'a'
                            className = {filterColor.active === 'a' && isDark ? 'active-dark'
                                            :
                                            filterColor.active === 'a' && isDark === false? 'active-light'
                                            :
                                            ''
                        }
                            onClick = {handleFilterColor}
                    >  
                            <p
                                onClick = {handleStatus}
                                className = {isDark ? 'nav-link dark-text' : 'nav-link light-text'}  
                            > 
                                All
                            </p>
                    </div>
                </li>

                <li
                    onClick = {handleFilter}
                >

                    <div
                            id = 'b'
                            className = {filterColor.active === 'b' && isDark ? 'active-dark'
                            :
                            filterColor.active === 'b' && isDark === false? 'active-light'
                            :
                            ''}
                            onClick = {handleFilterColor}
                        >
                            <p
                                onClick = {handleStatus}
                                className = {isDark ? 'nav-link dark-text' : 'nav-link light-text'}  
                            >
                                Active 
                            </p>
                    </div>
                </li>

                <li
                    onClick = {handleFilter}
                >
                    <div
                        id = 'c'
                        className = {filterColor.active === 'c' && isDark ? 'active-dark'
                        :
                        filterColor.active === 'c' && isDark === false? 'active-light'
                        :
                        ''}
                        onClick = {handleFilterColor}
                    >
                        <p
                            onClick = {handleStatus}
                            className = {isDark ? 'nav-link dark-text' : 'nav-link light-text'}  
                        >
                            Completed  
                        </p>
                    </div>
                </li>
            </ul>

            <div 
                className = {isDark ? 'clear-completed dark-text' : 'clear-completed light-text'}
                onClick = {clearCompleted}
            >
                Clear Completed
            </div> 
        </div>

        <div 
            className = 'filters-container-mobile'
            style = {isDark ? style.dark.todo_filters : style.light.todo_filters.version_2}
        >
            <ul className = 'filters-mobile'>
                
                <li 
                    onClick = {handleFilter} 
  
                >
                    <div
                        id = 'a'
                        className = {filterColor.active === 'a' && isDark ? 'active-dark'
                                        :
                                        filterColor.active === 'a' && isDark === false? 'active-light'
                                        :
                                        ''
                    }
                        onClick = {handleFilterColor}
                    >
                        <p
                            onClick = {handleStatus}
                            className = {isDark ? 'nav-link dark-text' : 'nav-link light-text'}  
                        > 
                            All
                        </p>
                    </div>
                   
                </li>


                <li
                     onClick = {handleFilter}
                 
                >
                    <div
                        id = 'b'
                        className = {filterColor.active === 'b' && isDark ? 'active-dark'
                        :
                        filterColor.active === 'b' && isDark === false? 'active-light'
                        :
                        ''}
                        onClick = {handleFilterColor}
                    >
                        <p
                            onClick = {handleStatus}
                            className = {isDark === true ? 'nav-link dark-text' : 'nav-link light-text'}
                        >
                            Active 
                        </p>
                    </div>
                </li>

                <li
                     onClick = {handleFilter}
                >
                    <div
                        id = 'c'
                        className = {filterColor.active === 'c' && isDark ? 'active-dark'
                        :
                        filterColor.active === 'c' && isDark === false? 'active-light'
                        :
                        ''}
                        onClick = {handleFilterColor}
                    >
                        <p
                            onClick = {handleStatus}
                            className = {isDark ? 'nav-link dark-text' : 'nav-link light-text'}
                        >
                            Completed  
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </>
   )
    
    
}

export default TodoFilters
